import React from 'react'
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import Home_Page from './home_Page';
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/bitcoin" replace />} />
      <Route path="/:coinId" element={<Home_Page />} />
    </Routes>
  </Router>
  )
}

export default App
