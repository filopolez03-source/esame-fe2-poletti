import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import MovieList from "./Components/pages/MovieList";
import Shell from "./Components/Shell";
import MovieDetail from "./Components/pages/MovieDetail";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shell />}>
          <Route index element={<MovieList />} />
          <Route path=":movieId" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
