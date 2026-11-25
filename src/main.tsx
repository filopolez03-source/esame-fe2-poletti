import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Shell from "./Components/Shell";
import MovieList from "./Components/pages/MovieList";
import MovieDetail from "./Components/pages/MovieDetail";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Shell condivisa con le 2 rotte richieste */}
        <Route path="/" element={<Shell />}>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
