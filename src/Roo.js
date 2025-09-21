import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StockCard from "./components/StockCard";
import Footer from "./components/Footer";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>
            <Route index element={<StockCard />} />
          <Route path="Footer" element={<Footer />} />
        </Routes>
       </BrowserRouter>
    );
}

export default roo;