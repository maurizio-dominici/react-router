// IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layout/DefaultLayout";
import ContentPage from "./pages/ContentPage";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/content" element={<ContentPage />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
