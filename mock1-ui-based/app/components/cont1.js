import {
    Box,
    Flex,
    Text,
    Button,
    Image,
    Link,
  } from "@chakra-ui/react";
  import { IoIosArrowDropdownCircle } from "react-icons/io";
  
  const Content = () => {
    return (
      <Flex justifyContent="center" alignItems="center" p={8} bg="black" color="white" minHeight="100vh">
        <Box maxW="50%">
          <Text fontFamily="Shojumaru" fontSize="40px" color="#E62E28">
            INTRODUCTION
          </Text>
          <Text 
            fontFamily="Press Start 2P" 
            fontSize="16px" 
            lineHeight="24px" 
            mt={4}>
            We've all been in the mud once, and now we've decided to fight it out.
          </Text>
          <Text fontFamily="Press Start 2P" fontSize="16px" lineHeight="24px" mt={4}>
            Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain.
          </Text>
          <Text fontFamily="Press Start 2P" fontSize="16px" lineHeight="24px" mt={4}>
            Save the lucky ones alive, join us to save the future!
          </Text>
          <Text fontFamily="Press Start 2P" fontSize="16px" lineHeight="24px" mt={4}>
            Our mission is to empower everyone to share wealth and succeed.
          </Text>
          <Link href="#" color="cyan.400" mt={4} fontFamily="Press Start 2P" fontSize="16px">
            read more...
          </Link>
          <Button
            rightIcon={<IoIosArrowDropdownCircle />}
            colorScheme="red"
            mt={8}
            size="lg"
            fontFamily="Poppins"
            bgGradient="linear(to-l, #F05733,#ED0137)"
            borderRadius="15px"
          >
            Documents
          </Button>
        </Box>
        <Box ml={16}>
          <Image
            src=""
            alt="Introduction Image"
          />
        </Box>
      </Flex>
    );
  };
  
  export default Content;
  