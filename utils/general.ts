export const truncateAddress = (address: string) =>
  `${address.substring(0, 4)}...${address.slice(-4, address.length)}`;
