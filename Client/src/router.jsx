import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import Board from "./pages/Board";
import ClickBoard from "./pages/ClickBoard";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>          
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/clickboard" element={<ClickBoard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
