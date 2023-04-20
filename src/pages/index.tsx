import OtherAdventures from "@/components/OtherAdventures";
import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";
import { Divider } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <Welcome />
        <Divider />
        <ProjectsGrid />
        <Divider />
        <OtherAdventures />
      </Layout>
      <Footer />
    </>
  );
}
