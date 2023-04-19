import About from "@/components/About";
import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <ProjectsGrid />
        <About />
      </Layout>
      <Footer />
    </>
  );
}
