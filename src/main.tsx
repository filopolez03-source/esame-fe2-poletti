import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <Header
        logoText="MovieApp"
        buttonLabel="Home/Elenco"
        onButtonClick={() => console.log("Clicca")}
      ></Header>
    </div>
  </StrictMode>,
);
