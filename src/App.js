
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CookiesProvider } from "react-cookie";
import { useEffect } from "react";

import Login from './Components/Login';
import Chat from './Components/Chat';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
    <CookiesProvider>
    <Router>
     <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="chat" element={<Chat />} />
      </Routes>

      </Router>
      </CookiesProvider>
    </div>
  );
}

export default App;
