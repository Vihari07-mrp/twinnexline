import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ExecutiveSummary from './pages/ExecutiveSummary';
import ProblemContext from './pages/ProblemContext';
import Research from './pages/Research';
import Solution from './pages/Solution';
import Architecture from './pages/Architecture';
import Dashboard from './pages/Dashboard';
import Ethics from './pages/Ethics';
import Outcomes from './pages/Outcomes';
import NextSteps from './pages/NextSteps';
import Lessons from './pages/Lessons';

function App() {
  return (
    <div className="App">
      {/* ✅ Use your repo name as basename to ensure routing works correctly */}
      <BrowserRouter basename="/twinnexline">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/executive-summary" element={<ExecutiveSummary />} />
          <Route path="/problem-context" element={<ProblemContext />} />
          <Route path="/research" element={<Research />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/outcomes" element={<Outcomes />} />
          <Route path="/next-steps" element={<NextSteps />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
