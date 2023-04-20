import React from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/forms/contactForm";
import { Box, Heading } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        flexDir="column"
        h="97vh"
        alignContent="space-between"
        justifyContent="space-between"
      >
        <Layout>
          <Heading as="h1" textAlign="center" my="1rem">
            Contact
          </Heading>
          <Box w={["full", "80%", "50%"]} m="auto" px={["1rem", "3rem"]}>
            <ContactForm />
          </Box>
        </Layout>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Contact;
