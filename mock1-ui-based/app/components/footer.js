'use client'; // Ensures this file is treated as a client component

import React from 'react';
import { Box, Flex, Text, Link, Image, HStack, VStack } from "@chakra-ui/react";
import { FaTwitter, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { chakra } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg="black"
      color="white"
      py={12}
      textAlign="center"
      backgroundImage={"linear-gradient(180deg, #030405 0%, #120101 100%)"}
      width={{ base: "100%"}}
      height={{ base: "auto", md: "428px" }}
      top="4666px"
      gap="0px"
      opacity="0px"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Image
          src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
          alt="Logo"
          boxSize="100px"
          mb={4}
          width= {{base: "auto", md:"200px"}}
          height= {{base: "auto", md:"221px"}}

        />
        <Text
          fontFamily={"shojumaru"}
          fontSize={["24px", "32px"]}
          fontWeight="300"
          color="#E62E28"
        >
          SITEMAP
        </Text>
        <HStack
          spacing={8}
          mt={4}
          wrap={{ base: "wrap", md: "nowrap" }}
          justifyContent="center"
        >
          <Link href="#" _hover={{ color: "#E62E28" }}>Home</Link>
          <Link href="#" _hover={{ color: "#E62E28" }}>IDO</Link>
          <Link href="#" _hover={{ color: "#E62E28" }}>Tokenomics</Link>
          <Link href="#" _hover={{ color: "#E62E28" }}>Road Map</Link>
          <Link href="#" _hover={{ color: "#E62E28" }}>Whitepaper</Link>
          <Link href="#" _hover={{ color: "#E62E28" }}>Pledge</Link>
          <Link href="#" _hover={{ color: "#E62E28" }}>NFT</Link>
          <Link href="#" _hover={{ color: "#E62E28" }}>Games</Link>
        </HStack>
        <HStack spacing={6} mt={8}>
          <Link href="https://twitter.com" isExternal>
            <chakra.div as={FaTwitter} boxSize={6} _hover={{ color: "white" }} color="#E62E28"/>
          </Link>
          <Link href="https://telegram.org" isExternal>
            <chakra.div as={FaTelegramPlane} boxSize={6} _hover={{ color: "white" }} color="#E62E28"/>
          </Link>
          <Link href="mailto:support@example.com" isExternal>
            <chakra.div as={FaEnvelope} boxSize={6} _hover={{ color: "white" }} color="#E62E28"/>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
