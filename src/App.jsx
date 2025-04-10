// src/App.jsx
import React, { useContext } from "react";
import Sidebar from "./Components/SideBar/Sidebar";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext";
import Main from "./Components/Main/Main";

const AppContent = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Sidebar />
      <Main/>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
