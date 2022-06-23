import React from "react";
import './App.css';
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="app"> 
      <div className="app_body">
        {/* Application Sidebar */}
        <Sidebar />
        {/* Chat Section */}
      </div>
    </div>
  );
  
}

export default App;
