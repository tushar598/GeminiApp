import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { ThemeContext } from "../../context/ThemeContext";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Main = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  useEffect(() => {
    if (isListening) {
      setInput(transcript);
    }
  }, [transcript, isListening, setInput]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        if (isListening || input.trim() !== "") {
          handleSendClick();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isListening, input]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleMicClick = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setIsListening(true);
  };

  const handleSendClick = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
      setIsListening(false);
    }
    if (input.trim() !== "") {
      onSent();
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p onClick={() => window.location.reload()}>Gemini✨</p>
        <div className="img">
          <img
            onClick={toggleTheme}
            src={darkMode ? assets.moon_icon : assets.sun_icon}
            alt="Toggle Dark Mode"
          />
          <img src={assets.user_icon} alt="" />
        </div>
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Tushar.</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  onSent(
                    "Suggest beautiful places to see on an upcoming road trip."
                  )
                }
              >
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div
                className="card"
                onClick={() =>
                  onSent("Briefly summarize this concept: urban planning.")
                }
              >
                <p>Briefly summarize this concept: urban planning.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div
                className="card"
                onClick={() =>
                  onSent(
                    "Brainstrom team bonding activities for our work retreat."
                  )
                }
              >
                <p>Brainstrom team bonding activities for our work retreat.</p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div
                className="card"
                onClick={() =>
                  onSent("Improve the readablity of the following code.")
                }
              >
                <p>Improve the readablity of the following code.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendClick();
              }}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              {!isListening && !input ? (
                <img
                  onClick={handleMicClick}
                  src={assets.mic_icon}
                  alt="Start listening"
                />
              ) : (
                <img
                  onClick={handleSendClick}
                  src={assets.send_icon}
                  alt="Send"
                />
              )}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-click its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
