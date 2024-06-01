'use client';

import React, { useState } from 'react';
import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react";
// import faqImage from './path/to/Screenshot 2024-06-02 041737.png';

const faqItems = [
    {
      question: "Why choose 'Savior'?",
      answer: "Savior offers unique blockchain solutions with a strong community focus.",
    },
    {
      question: "Why is the IDO duration so long?",
      answer: "The extended duration ensures widespread participation and stability.",
    },
    {
      question: "When will trading go live?",
      answer: "Trading will go live immediately after the IDO ends.",
    },
    {
      question: "When can we claim the tokens?",
      answer: "After the IDO concludes, you can claim the tokens on our official website.",
    },
  ];
  

const FaqItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Box borderWidth="1px" borderRadius="md" bg="black" color="white" mb={4}>
      <Flex
        p={4}
        justifyContent="space-between"
        alignItems="center"
        bg={showAnswer ? "green.600" : "red.600"}
        onClick={() => setShowAnswer(!showAnswer)}
        cursor="pointer"
      >
        <Text>{question}</Text>
        <Text>{showAnswer ? "▲" : "▼"}</Text>
      </Flex>
      {showAnswer && (
        <Box p={4} bg="gray.800">
          <Text>{answer}</Text>
        </Box>
      )}
    </Box>
  );
};

const Faq = () => {
  return (
    <Box bg="black" color="white" py={12} >
      <Flex justifyContent="center" mb={8}>
        <Image src="" alt="FAQ Logo" boxSize="100px" />
      </Flex>
      <Text
        fontFamily={"shojumaru"}
        fontSize={["32px", "44px"]}
        fontWeight="300"
        lineHeight={["38.08px", "52.36px"]}
        color="#E62E28"
        textAlign="center"
        mb={8}
      >
        FAQ
      </Text>
      <VStack spacing={4} px={4}>
        {faqItems.map((item, index) => (
          <FaqItem key={index} {...item} />
        ))}
      </VStack>
    </Box>
  );
};

export default Faq;
