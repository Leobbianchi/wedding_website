// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import EventInfo from './pages/EventInfo';
import Tips from './pages/Tips';
import Confirmation from './pages/Confirmation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/informacoes-do-evento" element={<EventInfo />} />
        <Route path="/dicas-dos-noivos" element={<Tips />} />
        <Route path="/confirmacao" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};


export default App;
