import About from "@/components/About";
import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <Welcome />
        <ProjectsGrid />
        <About />
      </Layout>
      <Footer />
    </>
  );
}
