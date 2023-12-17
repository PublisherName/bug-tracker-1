import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import BugList from './Views/BugList/BugList.jsx';
import Dashboard from './Views/Dashboard/index.jsx';
import Navbar from './Views/NavBar/NavBar.jsx';
import Footer from "./Views/Footer/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/buglist" element={<BugList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;