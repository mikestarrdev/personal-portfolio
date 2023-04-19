import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  HStack,
  Box,
  Image,
} from "@chakra-ui/react";
import { FiKey, FiChevronDown, FiXCircle } from "react-icons/fi";
import { truncateAddress } from "../../utils/general";

const ConnectWallet = () => {
  const { isConnecting } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => (
        <Box
          {...(!mounted && {
            "aria-hidden": true,
            style: {
              opacity: 0,
              pointerEvents: "none",
              userSelect: "none",
            },
          })}
        >
          {(() => {
            if (!mounted || !account || !chain) {
              return (
                <Button
                  leftIcon={<FiKey />}
                  disabled={isConnecting}
                  onClick={openConnectModal}
                  data-cy="connect-wallet"
                  variant="links"
                >
                  Connect
                </Button>
              );
            }

            if (chain.unsupported) {
              return (
                <Button
                  variant="links"
                  fontWeight="normal"
                  onClick={openChainModal}
                >
                  Unsupported network
                </Button>
              );
            }

            return (
              <Flex gap={3}>
                <Menu offset={[0, 4]} placement="bottom-end" autoSelect={false}>
                  {/* <Button variant="solid" onClick={openChainModal}>
                    <Image
                      alt={chain.name ?? "Chain icon"}
                      src={chain.iconUrl}
                      width={25}
                      height={25}
                      mr={2}
                    />
                    {chain.name}
                  </Button> */}

                  <MenuButton
                    as={Button}
                    variant="links"
                    fontWeight="normal"
                    rightIcon={
                      <Icon as={FiChevronDown} color="brand.primary.600" />
                    }
                  >
                    <Flex dir="row" alignItems="center">
                      <Image
                        alt={chain.name ?? "Chain icon"}
                        src={chain.iconUrl}
                        width={25}
                        height={25}
                        mr={2}
                      />
                      {account.ensName
                        ? account.ensName
                        : truncateAddress(account.address)}
                    </Flex>
                  </MenuButton>
                  <MenuList
                    minWidth="none"
                    py={0}
                    border="1px solid #825C2C"
                    _dark={{ bg: "black", border: "1px solid #FFFF00" }}
                  >
                    <MenuItem
                      onClick={() => openAccountModal()}
                      _hover={{ backgroundColor: "neonYellow" }}
                      _dark={{ bg: "black" }}
                      rounded="md"
                    >
                      <HStack>
                        <Icon
                          as={FiKey}
                          color="brand.accent"
                          _dark={{ color: "neonYellow" }}
                        />
                        <Box _dark={{ color: "neonYellow" }}>Wallet</Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem
                      onClick={() => disconnect()}
                      _hover={{ backgroundColor: "gray.600" }}
                      _dark={{ bg: "black" }}
                      rounded="md"
                    >
                      <HStack spacing={2}>
                        <Icon
                          as={FiXCircle}
                          color="brand.accent"
                          _dark={{ color: "neonYellow" }}
                        />
                        <Box color="black" _dark={{ color: "neonYellow" }}>
                          Disconnect
                        </Box>
                      </HStack>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            );
          })()}
        </Box>
      )}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet;
