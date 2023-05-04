import { Outlet } from "react-router-dom";
import AppBarWrapper from "./AppBarWrapper.jsx";

export default function Root() {
  return (
    <>
      <AppBarWrapper />
      <Outlet />
    </>
  );
}