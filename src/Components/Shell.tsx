import { Outlet } from "react-router";
import Header from "./Header";

const Shell = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Shell;
