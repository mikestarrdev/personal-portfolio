import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
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
  );
};

export default Layout;
