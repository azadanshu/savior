"use client";
import {
  Box,
  Text,
  Input,
  Button,
  Flex,
  HStack,
  Heading,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";
import React from "react";
import { useState, useEffect } from "react";

export default function Event() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const newSeconds = time.seconds === 59 ? 0 : time.seconds + 1;
      const newMinutes = newSeconds === 0 ? time.minutes + 1 : time.minutes;
      setTime({ minutes: newMinutes, seconds: newSeconds });
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <Box
      width={"100%"}
      display="flex"
      flexDirection="column"
      gap={"35px"}
      color="white"
      backgroundColor={"black"}
      padding={"0px 80px 0px 80px"}
    >
      <Heading
        as="h1"
        size="lg"
        textAlign="center"
        fontSize={["28px", "40px"]}
        color="rgba(237, 1, 55, 1)"
        fontFamily="shojumaru"
      >
        Participate in our IDO Event!
      </Heading>

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        bg="rgba(0, 0, 0, 0.8)"
        borderRadius="md"
      >
        <VStack
          spacing="1rem"
          p="1rem"
          borderRadius="md"
          flex="1"
          justifyContent="center"
          mb={{ base: "2rem", lg: "0" }}
          alignItems="center"
        >
          <Text
            textAlign="center"
            mb="2rem"
            fontSize={["16px", "20px"]}
            fontWeight={"400"}
            fontFamily={"zcool"}
          >
            During our IDO event, you will gain early access to our
            revolutionary ecosystem, designed to empower everyone to share
            wealth and achieve success.
          </Text>
          <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"space-between"}
            alignSelf={"center"}
            textAlign={"center"}
            border={"1.5px solid rgba(239, 73, 15, 1)"}
            padding={[4, 6]}
            borderRadius={"20px"}
            fontFamily={"zcool"}
            width={["265px", "412px"]}
            height={["255px", "382px"]}
            position="relative"
          >
            <Button
              position="absolute"
              top={["-6%", "-5%"]}
              left="50%"
              transform="translateX(-50%)"
              bgGradient="linear(to-l, #F05733,#ED0137)"
              _hover={{ bgGradient: "linear(to-l, #ED0137,#F05733)" }}
              color="white"
              zIndex={1}
            >
              Token Info
            </Button>
            <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
              {" "}
              <Text fontSize={["12px", "20px"]}>Total Token Supply: </Text>
              <Text color={"rgba(223, 24, 10, 1)"}>20%</Text>
            </Box>
            <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
              {" "}
              <Text fontSize={["12px", "20px"]}>Soft Cap: </Text>
              <Text color={"rgba(223, 24, 10, 1)"}>200 BNB</Text>
            </Box>
            <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
              {" "}
              <Text fontSize={["12px", "20px"]}>Initial Exchange Rate: </Text>
              <Text color={"rgba(223, 24, 10, 1)"}> 1 BNB</Text>
            </Box>
            <Text mt={"1rem"} fontSize={["12px", "20px"]}>
              Recommended Referral Commission:
            </Text>
            <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
              {" "}
              <Text fontSize={["12px", "20px"]}>1st Generation: </Text>
              <Text color={"rgba(223, 24, 10, 1)"}>5%</Text>
            </Box>

            <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
              {" "}
              <Text fontSize={["12px", "20px"]}>2nd Generation: </Text>
              <Text color={"rgba(223, 24, 10, 1)"}>2%</Text>
            </Box>
          </Box>
          <Button
            bgGradient="linear(to-l, #F05733,#ED0137)"
            _hover={{ bgGradient: "linear(to-l, #ED0137,#F05733)" }}
            color="white"
            borderRadius={"16px"}
            padding={"12px 15px 12px 15px"}
            gap={"8px"}
            fontFamily={"poppins"}
          >
            Connect Wallet
          </Button>
          <Text
            textAlign="center"
            mb="1rem"
            color="red.500"
            fontFamily={"shojumaru"}
            fontWeight={"400"}
            fontSize={["20px", "28px"]}
            p={4}
          >
            Become an affiliate & Earn 7% as Commission!
          </Text>
          <Flex>
            <Flex
              justify="space-around"
              width={["350px", "467px"]}
              h={"48px"}
              align={"center"}
              mb="2rem"
              border={"1.5px solid rgba(196, 17, 12, 1)"}
              borderRadius={"20px"}
            >
              <Box
                fontFamily={"zcool"}
                p={"1rem"}
                fontSize={["12px", "16px"]}
                color={"rgba(237, 235, 235, 1)"}
              >
                Generate a unique referral link
              </Box>

              <Button
                bg="rgba(237, 1, 55, 1)"
                fontFamily={"zcool"}
                color="white"
                _hover={{ bg: "red.600" }}
                borderRadius={"20px"}
                fontSize={["12px", "16px"]}
                ml={10}
              >
                Generate
              </Button>
            </Flex>
            <IconButton
              _hover={{ bg: "none" }}
              icon={<FaCopy />}
              color={"red"}
              bg={"none"}
            />
          </Flex>
        </VStack>

        <VStack
          spacing="1rem"
          p="1rem"
          borderColor="red.500"
          borderRadius="10px"
          flex="2"
          justify={"space-between"}
          alignItems="center"
          height={["379px", "738px"]}
          border={"1.5px solid rgba(239, 73, 15, 1)"}
          position="relative"
        >
          <Text
            bg={"black"}
            border={"1.5px solid red.500"}
            position="absolute"
            top="-3%"
            left="50%"
            transform="translateX(-50%)"
            color="white"
            fontFamily={"shojumaru"}
            fontSize={["16px", "24px"]}
          >
            {`${time.minutes.toString().padStart(2, "0")}:${time.seconds
              .toString()
              .padStart(2, "0")}`}
          </Text>
          <Heading
            as="h2"
            fontSize={["22px", "48px"]}
            fontFamily={"shojumaru"}
            size="md"
            color={["white", "rgba(237, 1, 55, 1)"]}
          >
            PRESALE 1
          </Heading>
          <Text
            color={["rgba(237, 1, 55, 1)", "white"]}
            fontFamily={"zcool"}
            fontSize={["12px", "24px"]}
          >
            1 Saviour = 0.657 USDT
          </Text>
          <Text
            color={["rgba(237, 1, 55, 1)", "white"]}
            fontFamily={"zcool"}
            fontSize={["12px", "24px"]}
          >
            Next Stage Price = 0.723 USDT
          </Text>
          <Text
            color={["rgba(237, 1, 55, 1)", "white"]}
            fontFamily={"zcool"}
            fontSize={["12px", "24px"]}
          >
            Sold = $34,56,56,764/50,00,00,00,000
          </Text>
          <Text
            color={["rgba(237, 1, 55, 1)", "white"]}
            fontFamily={"zcool"}
            fontSize={["11px", "24px"]}
          >
            Raised = $34,56,56,764/$40,00,00,000
          </Text>
          <Input
            width={["232px", "467px"]}
            placeholder="Enter the amount (BNB)"
            bg="black"
            color="white"
            borderRadius={"20px"}
          />
          <Input
            width={["232px", "467px"]}
            placeholder="Minimum Quantity to Buy"
            bg="black"
            color="white"
            borderRadius={"20px"}
          />
          <Input
            width={["232px", "467px"]}
            placeholder="Maximum Quantity of Tokens"
            bg="black"
            color="white"
            borderRadius={"20px"}
          />
          <HStack spacing="1rem">
            <Button
              borderRadius={"21px"}
              color="white"
              bgGradient="linear(to-l, #F05733,#ED0137)"
              _hover={{ bgGradient: "linear(to-l, #ED0137,#F05733)" }}
            >
              Buy
            </Button>
            <Button
              color="white"
              borderRadius={"21px"}
              bgGradient="linear(to-l, #F05733,#ED0137)"
              _hover={{ bgGradient: "linear(to-l, #ED0137,#F05733)" }}
            >
              Claim Drop
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}
