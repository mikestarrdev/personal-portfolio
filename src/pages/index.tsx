import About from "@/components/About";
import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <ProjectsGrid />
    </>
  );
}
