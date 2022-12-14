import "./App.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";


function App() {
  // Welcome to project
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}
export default App;