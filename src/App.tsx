import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import EventInfo from './pages/EventInfo';
import Tips from './pages/Tips';
import Confirmation from './pages/Confirmation';
import Quiz from './pages/Quiz'; // Importando a nova página de Quiz
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
        <Route path="/quiz" element={<Quiz />} /> 
      </Routes>
    </Router>
  );
};

export default App;
