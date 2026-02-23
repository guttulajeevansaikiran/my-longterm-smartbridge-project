import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Properties from "./pages/Properties";
import AddProperty from "./pages/AddProperty";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





