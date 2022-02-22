import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Forms from './components/Forms';
import SimpleForm from './components/forms/SimpleForm';
import ComplexForm from './components/forms/ComplexForm';
import OtherForm from './components/forms/OtherForm';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="forms/simpleForm"> Forms </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="forms" element={<Forms />}>
          <Route path="simpleForm" element={<SimpleForm />} />
          <Route path="complexForm" element={<ComplexForm />} />
          <Route path="otherForm" element={<OtherForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
