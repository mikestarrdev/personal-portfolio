import { Box, Container } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      w="100%"
      mx="auto"
      px={["1rem", "5rem"]}
      justifySelf="center"
      border="1px"
    >
      {children}
    </Box>
  );
};

export default Layout;
