import { Text } from "@chakra-ui/react";

export const truncateAddress = (address: string) =>
  `${address.substring(0, 4)}...${address.slice(-6, address.length)}`;
