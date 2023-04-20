import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import MetaData from "./Metadata";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Mike Starr Portfolio",
  description: `Discover a skilled TypeScript, JavaScript, React, and Web3 developer's portfolio of innovative web apps and cutting-edge technologies. Contact now to discuss your project`,
  keywords: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "React.js",
    "Next.js",
    "Chakra-UI",
    "TailwindCSS",
    "REST API",
    "Software developer",
    "Web3 developer",
    "Frondend developer",
    "Bootcamp graduate",
  ],
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MetaData />
      <Box
        w="100%"
        mx="auto"
        pt="4rem"
        pb="1rem"
        px={["0.5rem", "1rem", "1rem", "5rem"]}
        justifySelf="center"
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
