import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from './Components/Login/Login';
// import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
