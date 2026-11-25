import { Outlet } from "react-router";
import Header from "./Header";
import MovieDetail from "./pages/MovieDetail";
import React from "react";

type Props = {};

const Shell = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Shell;
