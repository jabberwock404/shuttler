import React from "react";
import './App.css';
import Sidebar from "./Sidebar"
import Chat from "./Chat"

function App() {
  return (
    <div className="app"> 
      <div className="appHeader">
        <h1 className="logo">shuttler</h1>
      </div>
      <div className="appBody">
        {/* Application Sidebar */}
        <Sidebar />
        {/* Chat Section */}
        <Chat />
      </div>
    </div>
  );
  
}

export default App;
