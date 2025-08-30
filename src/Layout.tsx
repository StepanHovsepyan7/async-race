import React from "react";
import Header from "./common/components/Header/Header";
import { Outlet } from "react-router-dom";

export const metadata = {
  title: "ASYNC RACE",
  description: "Async Race Task"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <Header />
      {children}
      <Outlet />
      <div id="modal-portal" />
    </body>
  );
}