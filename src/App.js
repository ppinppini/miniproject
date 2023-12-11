import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BoothInfo from "./pages/BoothInfo";
import Home from "./pages/Home";
import Made from "./pages/Made";
import ShowInfo from "./pages/ShowInfo";
import Boothmap from "./pages/Boothmap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/boothinfo" element={<BoothInfo></BoothInfo>}></Route>
        <Route path="/showinfo" element={<ShowInfo></ShowInfo>}></Route>
        <Route path="/made" element={<Made></Made>}></Route>
        <Route path="/boothmap" element={<Boothmap></Boothmap>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
