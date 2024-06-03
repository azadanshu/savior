'use client';
import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Center,
  Button,
  Heading
} from "@chakra-ui/react";

const Tokenomics = () => {
  return (
    <Box 
      // bgImage={ }
      backgroundImage={"url(https://s3-alpha-sig.figma.com/img/c869/1086/fe977eb60a56b9a690490c109cbb1a69?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XA1t0b6aKfEFEi8SOkmzGbtRMDXEjumznJbv0p2WpiD~l2-xsBobVymr7-CfDvuQDpYIJ1knk1uhXhMcVxmO2vaILNqXsEfraEIrdk8kbD4CCwV5TNFx0ZrgRPV73dZHtmGEMV7yiS7Vj-IFRAXc1UpZnMELiRSu8eV6ciOKc3FH4oxBzESsyEmSMYpEyqsFP0ngm~epgO5NdtlqPT~r6r3DJXFxG8D22tUzjK7JAbSye8-aFtHiwPy-PgaM2ngqBtJh7QOl2I3ftcYflPfmsrUgLdqv0XqLZVCrFI2mdV2a3dhGpiRJCXLK4LA-qBkd5MLD8q2ggVml1es-J2PArQ__)"}
      // bg="rgba(0, 0, 0, 0.8)"
      opacity={0.8}
      
    >
      <Text
        fontFamily="shojumaru"
        fontSize={["32px", "44px"]}
        fontWeight="300"
        lineHeight={["38.08px", "52.36px"]}
        color="#E62E28"
        textAlign="center"
        mb={8}
        pt={8}
      >
        TOKENOMICS
      </Text>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        // bg="rgba(0, 0, 0, 0.8)"
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

            <Box
              display={"flex"}
              flexDir={"column"}
              justifyContent={"space-between"}
              border={"2px solid rgba(239, 73, 15, 1)"}
              padding={[6, 9]}
              borderRadius={"20px"}
              fontFamily={"zcool"}
              width={["auto", "412px"]}
              height={["249px", "306px"]}
              position="relative"
            >
              <Button
                position="absolute"
                top={["-12%", "-12%"]}
                left="50%"
                transform="translateX(-50%)"
                bgGradient="linear(to-l, #F05733,#ED0137)"
                _hover={{ bgGradient: "linear(to-l, #ED0137,#F05733)" }}
                color="white"
                zIndex={1}
                width={["206.73px","244px"]}
                height={["59.31px", "70px"]}
                borderRadius={"20px"}
                fontSize={["15px", "20px"]}
              >
                Token Info
              </Button>
              <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
                {" "}
                <Text fontSize={["12px", "20px"]}>Name: </Text>
                <Text color={"rgba(223, 24, 10, 1)"}>Saviour</Text>
              </Box>
              <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
                {" "}
                <Text fontSize={["12px", "20px"]}>Symbol: </Text>
                <Text color={"rgba(223, 24, 10, 1)"}>SVR</Text>
              </Box>
              <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
                {" "}
                <Text fontSize={["12px", "20px"]}>Total Supply: </Text>
                <Text color={"rgba(223, 24, 10, 1)"}>1000 Trillion</Text>
              </Box>
              <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
                {" "}
                <Text fontSize={["12px", "20px"]}>Decimals:</Text>
                <Text color={"rgba(223, 24, 10, 1)"}>18</Text>
              </Box>
            </Box>
          </VStack>

          <VStack 
            alignItems="center"
            bg="transparent"
            justifyContent="center"
            flex="1"
            p="1rem"
            borderRadius="md"
            mb={{ base: "2rem", lg: "0" }}
            width={["auto", "885px"]}
            height={["145.37px", "372px"]}
            
          >
            <Flex 
              flexDirection="row"
              display="flex"
              justifyContent="center" 
              alignItems="center" 
              mt={8}
            >
              
              <box 
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                // gap={10}
              >
                <Text  fontSize={["6.25px","14px"]} color="white" fontFamily="shojumaru" >
                  IDO Round(20%)_______
                </Text>
                <Text fontSize={["6.25px","14px"]} color="white" fontFamily="shojumaru" mt={8}>
                  Ecological Fund (5%)_______
                </Text>
                <Text fontSize={["6.25px","14px"]} color="white" fontFamily="shojumaru" mt={8} mb={8}>
                  Initial Liquidity_______ Provider (15%)
                </Text>
              </box>
              <Image
                src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JzJV78wxSDPw71Yp132UXcWr4VsyiQUyfFL4XSy76XRSJoBtIp-f~KQvTwyR6kZshDLDvnyBroMFMEYbBQ8MA2RqAlftlsLuzbWtkXsbA4pF7fJjf4nyMVb5Blp6gewH2ntEkBkKLnsvtCH6ZW6TNy9vn3J8nSG~ZhBHMj44vNAj0zthBFQMmM84YIlO-kf4aTmwa6XYBC0EQc60Iera~H0asb8AKeuDuZyuMUcOLSlY3biY2GU3ZUIxJB8yw3~J6kVly4c1T2YMGKZg~K-PU6G2UW2Lm7FBM7fY07FE8~G3aYXJKo6dYllXhHKOYt-F3GJ0jJDiiis-VcgeF4qEvA__"
                alt="Tokenomics Chart"
                width={["108.63px","278px"]}
                height={["119.97px","307px"]}
              />
              <box>
                <Text fontSize={["6.25px","14px"]} color="white" fontFamily="shojumaru">
                  _______Community Airdrop (7.5%)
                </Text>
                <Text fontSize={["6.25px","14px"]} color="white" fontFamily="shojumaru" mt={8}>
                  _______Team Founders (2.5%)
                </Text>
                <Text fontSize={["6.25px","14px"]} color="white" fontFamily="shojumaru" mt={8} mb={8}>
                  _______Black Hole Contract Address (50%)
                </Text>
              </box>
              
              
            </Flex>
          </VStack>
          
      </Flex>

    </Box>
  );
};

export default Tokenomics;
