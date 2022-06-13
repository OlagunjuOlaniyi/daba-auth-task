import "./App.css";
import Constant from "./components/Constant";
import Welcome from "./pages/welcome/Welcome";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Constant />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
