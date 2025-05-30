// IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
          </Route>
          {/* <Navbar /> */}
          {/* <HomePage /> */}
          {/* <ContentPage /> */}
          {/* <AboutUs /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
