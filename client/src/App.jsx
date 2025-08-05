import { Routes, Route } from "react-router";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Home from "./Page/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </>
  );
}

export default App;
