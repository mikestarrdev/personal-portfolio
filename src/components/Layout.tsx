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
      py="1rem"
      px={["1rem", "1rem", "1rem", "5rem"]}
      justifySelf="center"
    >
      {children}
    </Box>
  );
};

export default Layout;
