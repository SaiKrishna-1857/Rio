import React from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

const App: React.FC = () => {
  return (
    <Router basename="/chatBot_frontend">

      <div className="App">
        <main>
          <ChatBox />
        </main>
      </div>
    </Router>
  );
}

export default App;
