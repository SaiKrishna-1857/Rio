import React from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Route as well

const App: React.FC = () => {
  return (
    <Router basename="/chatBot_frontend">
      <div className="App">
        <main>
          <Routes>
            {/* Define a default route or any other route for ChatBox */}
            <Route path="/" element={<ChatBox />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;