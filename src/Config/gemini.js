import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCCK7wF4rHvYOO1toF2JMFxZtdo7dojkOU"; // Replace with your API Key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
  } catch (error) {
    console.error("Error:", error);
  }
}

export default run;
