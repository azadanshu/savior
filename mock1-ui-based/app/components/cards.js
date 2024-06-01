import React from 'react';
import { Box, Flex, Text, Image, VStack } from "@chakra-ui/react";

const phases = [
  {
    phase: "Phase 1",
    description: "Technical Readiness and Smart Contract Audit",
    image: "/path/to/image1.png",
  },
  {
    phase: "Phase 2",
    description: "Increase Liquidity and Trading Volume",
    image: "/path/to/image2.png",
  },
  {
    phase: "Phase 3",
    description: "Community Building and Marketing",
    image: "/path/to/image3.png",
  },
  {
    phase: "Phase 4",
    description: "Ecosystem Expansion and Partnerships",
    image: "/path/to/image4.png",
  },
];

const RoadMapCard = ({ phase, description, image }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    bg="black"
    color="white"
    p={4}
    textAlign="center"
    maxW="250px"
  >
    <Image src={image} alt={`${phase} image`} borderRadius="md" />
    <Text fontSize="xl" fontWeight="bold" mt={4}>
      {phase}
    </Text>
    <Text mt={2}>
      {description}
    </Text>
  </Box>
);

const Cards = () => {
  return (
    <Box bg="black" color="white" py={12}>
      <Text
        fontFamily={"shojumaru"}
        fontSize={["32px", "44px"]}
        fontWeight="300"
        lineHeight={["38.08px", "52.36px"]}
        color="#E62E28"
        textAlign="center"
        mb={8}
      >
        ROAD MAP
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        spacing={8}
      >
        {phases.map((phase, index) => (
          <Box key={index} m={4}>
            <RoadMapCard {...phase} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Cards;
