# GeminiApp - Google Gemini AI Clone

![GeminiApp Screenshot](public/gemini-preview.png) _(You might want to add a screenshot later)_

A responsive web application that mimics the core functionality of Google's Gemini AI, built with React.js and powered by the Gemini API. This project demonstrates how to integrate Google's AI capabilities into a modern web interface.

## Features

- **AI-Powered Conversations**: Chat with Google's Gemini AI model
- **Markdown Support**: Responses are rendered with proper formatting
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Session Management**: Maintains conversation history during the session
- **Modern UI**: Clean, minimalist interface inspired by Google's design
- **Loading States**: Visual feedback during AI response generation

## Technologies Used

- **Frontend**: React.js (Vite)
- **Styling**: CSS (with media queries for responsiveness)
- **AI Integration**: Google Gemini API
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Structure

GeminiApp/
├── public/ # Static assets
├── src/
│ ├── assets/ # Images and icons
│ ├── components/ # Reusable components
│ │ ├── Header.jsx # Navigation header
│ │ └── ... # Other components
│ ├── App.jsx # Main application component
│ ├── main.jsx # Application entry point
│ └── styles/ # CSS files
├── .gitignore
├── package.json
├── README.md # This file
└── vite.config.js # Vite configuration

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/tushar598/GeminiApp.git
   cd GeminiApp

   ```

2. **Install dependencies**  
   npm install

3. **Set up your Gemini API key**
   Get an API key from Google AI Studio

Create a .env file in the root directory:
VITE_GEMINI_API_KEY=your_api_key_here

4.  **Run the development server**
    npm run dev

5.  **Open in browser**
    The app should be running at https://gemini-app-three.vercel.app/

**How It Works**
The user enters a prompt in the chat input

The application sends the prompt to the Gemini API

The AI processes the request and generates a response

The response is displayed in the chat interface with proper formatting

The conversation history is maintained in the application state

**Customization**
You can customize the following aspects:

Styling: Modify the CSS files in src/styles/

Prompt Handling: Adjust how prompts are processed before sending to the API

UI Components: Edit or add new components in src/components/

**Deployment**
To deploy this application:

1. Build the production version:
   npm run build

2. Deploy the dist folder to your preferred hosting service (Vercel, Netlify, GitHub Pages, etc.)

**Contributing**
Contributions are welcome! Please follow these steps:

Fork the repository

Create a new branch for your feature

Commit your changes

Push to the branch

Open a pull request

**License**
This project is open-source and available under the MIT License.

**Acknowledgments**
Google Gemini API team

React.js community

Vite.js developers

Developed by **Tushar**
