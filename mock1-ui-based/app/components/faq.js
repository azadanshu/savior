'use client';

import React, { useState } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

// import faqImage from './path/to/Screenshot 2024-06-02 041737.png';


const Faq = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent="center"
      p={5}
      bg="black" // Set background color to black
    >
      {/* Image section for desktop view */}
      <Box
        display={{ base: "none", md: "block" }}
        mr={{ base: 0, md: 5 }}
        mb={16}
      >
        <Image
          src="https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__"
          w="450px"
          h="450px"
        />
      </Box>

      {/* Main content section */}
      <Box
        w={{ base: "100%", md: "500px" }}
        textAlign={{ base: "center", md: "left" }}
      >
        {/* FAQ title for mobile and tablet view */}
        <Text
          fontSize="32px"
          fontWeight="bold"
          color="red.500"
          mb={5}
          display={{ base: "block", md: "none" }}
          fontFamily={"shojumaru"}
        >
          FAQ
        </Text>

        {/* FAQ title for desktop view */}
        <Text
          fontSize="40px"
          fontWeight="bold"
          color="red.500"
          mb={5}
          display={{ base: "none", md: "block" }}
          textAlign={{ base: "center", md: "center" }}
          mt={[0, 0, 8]}
          fontFamily={"shojumaru"}
        >
          FAQ
        </Text>

        {/* Image section for mobile and tablet view */}
        <Box
          display={{ base: "flex", md: "none" }}
          mb={{ base: 4, md: 0 }}
          justifyContent="center"
        >
          <Image
            src="https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__"
            w={["300px", "400px"]}
            h={["300px", "400px"]}
          />
        </Box>

        {/* FAQ content */}
        <Accordion allowToggle align={"center"}>
          <AccordionItem mt={[0, 0, 12]} border={"none "}>
            <h2>
              <AccordionButton
                border={"1px solid rgba(237, 1, 55, 1) "}
                width={["350px", "450px"]}
                color="white"
                fontSize="lg"
                p={3}
                bg="black"
                borderRadius="20px"
                _hover={{ bg: "red.500" }}
                mb={3}
                _expanded={{ bg: "red.500", color: "white" }}
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontFamily={"shojumaru"}
                  fontSize={["10px", "14px"]}
                >
                  <Flex pl={8} gap={[12, 14]}>
                    <Box>1. </Box>
                    <Box>What is Saviour?</Box>
                  </Flex>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              border={"1px solid rgba(237, 1, 55, 1) "}
              color="white"
              borderRadius="20px"
              fontFamily={"zcool"}
              mb={4}
            >
              Saviour is a platform that allows you to participate in the IDO.
              and get rewards. This platform also provide you with airdrop.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"none "}>
            <h2>
              <AccordionButton
                bg="black"
                width={["350px", "450px"]}
                border={"1px solid rgba(237, 1, 55, 1) "}
                color="white"
                p={3}
                borderRadius="20px"
                _hover={{ bg: "red.500" }}
                mb={3}
                _expanded={{ bg: "red.500", color: "white" }}
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontFamily={"shojumaru"}
                  fontSize={["10px", "14px"]}
                >
                  <Flex pl={4} gap={[12, 14]}>
                    <Box>2. </Box>
                    <Box> Why is the IDO duration so long?</Box>
                  </Flex>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              border={"1px solid rgba(237, 1, 55, 1) "}
              color="white"
              borderRadius="20px"
              fontFamily={"zcool"}
              mb={4}
            >
              IDO duration is long because of the volatility of the market and
              the risk of loss.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"none "}>
            <h2>
              <AccordionButton
                bg="black"
                width={["350px", "450px"]}
                border={"1px solid rgba(237, 1, 55, 1) "}
                color="white"
                p={3}
                borderRadius="20px"
                _hover={{ bg: "red.500" }}
                mb={3}
                _expanded={{ bg: "red.500", color: "white" }}
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontFamily={"shojumaru"}
                  fontSize={["10px", "14px"]}
                >
                  <Flex pl={4} gap={[12, 14]}>
                    <Box>3. </Box>
                    <Box> When will trading go live?</Box>
                  </Flex>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              border={"1px solid rgba(237, 1, 55, 1) "}
              color="white"
              borderRadius="20px"
              fontFamily={"zcool"}
              mb={4}
            >
              The IDO will be live on 01/01/2022.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"none "}>
            <h2>
              <AccordionButton
                bg="black"
                width={["350px", "450px"]}
                border={"1px solid rgba(237, 1, 55, 1) "}
                color="white"
                p={3}
                borderRadius="20px"
                _hover={{ bg: "red.500" }}
                mb={3}
                _expanded={{ bg: "red.500", color: "white" }}
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontFamily={"shojumaru"}
                  fontSize={["10px", "14px"]}
                >
                  <Flex pl={4} gap={[12, 14]}>
                    <Box>4. </Box>
                    <Box> When can we claim the tokens?</Box>
                  </Flex>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              border={"1px solid rgba(237, 1, 55, 1) "}
              color="white"
              borderRadius="20px"
              fontFamily={"zcool"}
              mb={4}
            >
              After the IDO concludes, you can claim the tokens on our official
              website.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
};

export default Faq;
