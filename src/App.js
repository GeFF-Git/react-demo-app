import "./App.css";
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes,MemoryRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        {/* <Route path="" element></Route> */}
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Layout></Layout>
    </BrowserRouter>
  );
}

export default App;
