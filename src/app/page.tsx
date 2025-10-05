'use client';
import { ThemeProvider } from "../context/ThemeContext";
// import Navbar from "@/section/navbar";
import Main from "@/section/main";

export default function Home() {
  return (
    <ThemeProvider>
        <Main />
    </ThemeProvider>
  );
}
