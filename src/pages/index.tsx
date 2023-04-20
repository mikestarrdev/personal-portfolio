import OtherAdventures from "@/components/OtherAdventures";
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
        <OtherAdventures />
      </Layout>
      <Footer />
    </>
  );
}
