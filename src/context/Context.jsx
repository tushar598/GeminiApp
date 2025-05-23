import { createContext, useState } from "react";
import run from "../Config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);
  
      const currentPrompt = prompt ?? input;
      if (prompt === undefined) {
        setPrevPrompt((prev) => [...prev, input]);
      }
      setRecentPrompt(currentPrompt);
  
      const response = await run(currentPrompt);
  
      // Format bold text using "**bold**"
      const formattedBold = response
        .split("**")
        .map((part, index) =>
          index % 2 === 1 ? `<b>${part}</b>` : part
        )
        .join("");
  
      // Replace * with <br> for line breaks
      const formattedLineBreaks = formattedBold.replace(/\*/g, "</br>");
  
      // Split response into words and render with delay
      const wordsArray = formattedLineBreaks.split(" ");
      wordsArray.forEach((word, index) => {
        delayPara(index, word + " ");
      });
  
      setInput("");
    } catch (error) {
      console.error("Error in onSent:", error);
    } finally {
      setLoading(false);
    }
  };
  

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
