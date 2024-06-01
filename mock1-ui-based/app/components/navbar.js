"use client";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Links = ["Home", "IDO", "Tokenomics", "Roadmap"];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={8}
        pt={8}
        backgroundImage={"url('https://s3-alpha-sig.figma.com/img/894b/df6e/56b90bbef82ad188765f40d12a46caef?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBniJIIabUM5Sz2MptOUCZcISt5SJUkYa~32yo4k4uKIZOnsv2UPfRCUlYo-w2quEcv9rqDuuafokBaRla7zZMxJf6ILz1UBaSYRjEtjO9Is-QiWLUdkXnOgDQSf2oZEvHTyyPZkokWIVlUlyVkawK~OaqKGqcoGccfLpefDMbC4Gzb9p8Ta~8QmdfAVadD~0KfT8IvJYgefdHWYAyFSSAUkE35Ne4jTu0pXAH61KDcvPipctfKO-Pkq3j3Q9ADYxg-c8H2970mBZ8c7Ap8dDwtCB3Nx7ZseV8CNB-SnNW4TjDWGB9wVYeRtEnABJmkKot4pxdnjs04l5mKHfXR4VA__')"}
        height={"588px"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        backgroundPosition={"center center"}  // You can change this to "bottom right", "20% 30%", etc.
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Flex alignItems={"center"} justifyContent={"center"}>
            <Image
              src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
              w={"108px"}
              h={"117px"}
              alt="Saviour"
              mt={6}
            />
            <Text color={"white"} fontSize={"24px"} fontFamily={"shojumaru"}>
              Saviour
            </Text>
          </Flex>
          <Flex flex={1} justifyContent={"center"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                p={2}
                display={{ base: "none", md: "flex" }}
                alignItems={"center"}
                justifyContent={"center"}
                w={"583px"}
                h={"52px"}
                bg={"black"}
                color={"white"}
                borderRadius={"20px"}
              >
                {Links.map((link) => (
                  <Link
                    fontFamily={"shojumaru"}
                    fontWeight={"400"}
                    key={link}
                    fontSize={"16px"}
                  >
                    {link}
                  </Link>
                ))}
                <Menu>
                  <MenuButton
                    as={Link}
                    fontFamily={"shojumaru"}
                    fontWeight={"400"}
                    fontSize={"16px"}
                    bg={"black"}
                    color={"white"}
                    rightIcon={<IoIosArrowDropdownCircle />}
                  >
                    Coming Soon
                  </MenuButton>
                  <Box bg={"black"} color={"white"}>
                    <IoIosArrowDropdownCircle />
                  </Box>
                  <MenuList bg={"black"} color={"white"}>
                    <MenuItem bg={"black"} color={"white"}>
                      Feature 1
                    </MenuItem>
                    <MenuItem bg={"black"} color={"white"}>
                      Feature 2
                    </MenuItem>
                    <MenuItem bg={"black"} color={"white"}>
                      Feature 3
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </HStack>
          </Flex>
          <Flex alignItems={"center"}>
            <Button
              w={"127px"}
              h={"38px"}
              fontFamily={"poppins"}
              color={"white"}
              bgGradient="linear(to-l, #F05733,#ED0137)"
              borderRadius={"15px"}
              fontSize={"12px"}
            >
              Connect Wallet
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link fontFamily={"shojumaru"} key={link}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}

        <Flex
          justifyContent="center"
          alignItems="center"
          mt={"160px"} // Position the text below the navbar
        >
          <Text
            width={{ base: "324px", md: "1262px" }}
            height={{ base: "266px", md: "108px" }}
            mt={{ base: "-50px", md: "0" }}
            padding={{ base: "0 0 263.64px 0", md: "0" }}
            borderRadius={{ base: "20px 0px 0px 0px", md: "0" }}
            background={{ base: "#24232366", md: "none" }}
            fontFamily={"shojumaru"}
            fontSize={{ base: "32px", md: "45px" }}
            fontWeight={"400"}
            lineHeight={{base: "38.08px", md: "53.55px"}}
            textAlign={"center"}
            color={"white"}
            opacity={"1"} // Set opacity to 1 for full visibility
          >
            Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
          </Text>
        </Flex>
      </Box>
    </>
  );
}
