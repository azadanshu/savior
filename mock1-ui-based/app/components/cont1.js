"use client";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";


export default function Content() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg={"black"} h={"100%"}>
      <Grid templateColumns={isMobile ? "1fr" : "1fr 1fr"} gap={6} p={4}>
        <Box p={4} position={"relative"} top={["0","0","0","10%"]}>
          <Heading
            pl={isMobile ? 0 : 8}
            color="#ED0137"
            fontFamily="shojumaru"
            fontSize={"4xl"}
            mb={4}
            textAlign={isMobile ? "center" : "left"}
          >
            Introduction
          </Heading>
          {isMobile && (
            <Flex justify="center" mb={4} >
              <Image
                src="https://s3-alpha-sig.figma.com/img/72d9/2d64/713f95c34c945a62844515044f63fcd4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PH7-UOlccPF8t3q~uRPdjm-eXO6SvLELF6nO9w4LUU6BfSr6nbxJUS4VgrLNBE5kYPYre7L1iuNvZA~Ls2g3A7pJHrajP-wVdseuNITWEKfb9GHsGq9Z6RlqyutRBmEZ8yCUM-OrNElnieCQ3W6SMy4uYHUvnKEOwgjgFxtdw9NIuZ1NeGmkpzr8L8qoexAsa2BhvpJAmrgVJrtFJGvXMMKz3DZDEOhmaZQubI3H31OA9rOo-T5uVEsX4Q6yLvPvhR0yC2dB-IRVZ-U~9bMtl869PX2xvbXyMtYTGjvi7gnEr6fu3NEGmQk6MJIFWX2zS~dweCYm3~Hzo-AE-0EhBw__"
                w="100%"
                h="auto"
                alt="Saviour"
              />
            </Flex>
          )}
          <Box
            fontFamily="zcool"
            color="white"
            fontSize={["23px", "24px"]}
            textAlign={isMobile ? "center" : "left"}
            pl={isMobile ? 0 : 8}
          >
            <Text mb={2}>
              We've all been in the mud once, and now we've decided to fight it
              out.
            </Text>
            <Text mb={2}>
              Pay tribute to those pioneers of WEB3 and the warriors who
              dedicated their love to the blockchain. Save the lucky ones alive,
              join us to save the future!
            </Text>
            <Text mb={2}>
              Our mission is to empower everyone to share wealth and succeed.
            </Text>
            <Text color={"gray"} mb={4}>
              read more...
            </Text>
            <Menu>
              <MenuButton
                as={Button}
                fontFamily={"zcool"}
                fontWeight={"400"}
                fontSize={"24px"}
                bgGradient="linear(to-l, #F05733,#ED0137)"
                _hover={{ bgGradient: "linear(to-l, #ED0137,#F05733)" }}
                color={"white"}
                _focus={{   bgGradient:"linear(to-l, #F05733,#ED0137)" }}
                _active={{   bgGradient:"linear(to-l, #ED0137,#F05733)" }}
                rightIcon={<ChevronDownIcon />}
                borderRadius={"21px"}
                pt={"24px"}
                pb={"24px"}
                pl={"15px"}
                pr={"15px"}
              >
                Document
              </MenuButton>
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
          </Box>
        </Box>
        {!isMobile && (
          <Flex justify="center" align="center" mt={[0,-12]} ml={[0,-12]}>
            <Image
              src="https://s3-alpha-sig.figma.com/img/72d9/2d64/713f95c34c945a62844515044f63fcd4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PH7-UOlccPF8t3q~uRPdjm-eXO6SvLELF6nO9w4LUU6BfSr6nbxJUS4VgrLNBE5kYPYre7L1iuNvZA~Ls2g3A7pJHrajP-wVdseuNITWEKfb9GHsGq9Z6RlqyutRBmEZ8yCUM-OrNElnieCQ3W6SMy4uYHUvnKEOwgjgFxtdw9NIuZ1NeGmkpzr8L8qoexAsa2BhvpJAmrgVJrtFJGvXMMKz3DZDEOhmaZQubI3H31OA9rOo-T5uVEsX4Q6yLvPvhR0yC2dB-IRVZ-U~9bMtl869PX2xvbXyMtYTGjvi7gnEr6fu3NEGmQk6MJIFWX2zS~dweCYm3~Hzo-AE-0EhBw__"
              w="100%"
              h="auto"
              maxW="785px"
              maxH="785px"
            //   minW="755px"
            //   minH="755px"
              //   borderRadius="md"
              alt="Saviour"
            />
          </Flex>
        )}
      </Grid>
    </Box>
  );
}


