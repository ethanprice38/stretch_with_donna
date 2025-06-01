import { useState } from "react";
import "@/app/globals.css";

type NavIcon3Props = {
  isOpen: boolean;
  onClick: () => void;
};

export default function NavIcon3({ isOpen, onClick }: NavIcon3Props) {
  return (
    <div
      id="nav-icon3"
      className={isOpen ? "open" : ""}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
