import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Signup from "./components/registration/Signup";
import Signin from "./components/registration/Signin";
import Home from "./pages/home/Home";

import "./styles/main.scss";
function App() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
