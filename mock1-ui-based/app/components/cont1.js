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
    <Flex 
      direction={["column", "row"]} // Change flex direction based on screen size
      justifyContent="center" 
      alignItems="center" 
      p={8} 
      bg="black" 
      color="white" 
      minHeight="100vh"
    >
      <Box maxW={["100%", "50%"]} mb={[8, 0]}> {/* Adjust margin for responsiveness */}
        <Text
          fontFamily={"shojumaru"}
          fontSize={["32px", "44px"]} // Responsive font size
          fontWeight="300"
          lineHeight={["38.08px", "52.36px"]} // Responsive line height
          color="#E62E28"
          width={["285px", "500px"]} // Responsive width
          h={["38px", "52px"]} // Responsive height
          textAlign="left"
        >
          INTRODUCTION
        </Text>
        <Text 
          fontFamily={"ZCOOL KuaiLe"} 
          fontSize="16px" 
          lineHeight="24px" mt={4}
        >
          We've all been in the mud once, and now we've decided to fight it out.
        </Text>
        <Text fontFamily={"ZCOOL KuaiLe"} fontSize="16px" lineHeight="24px" mt={4}>
          Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain.
        </Text>
        <Text fontFamily={"ZCOOL KuaiLe"} fontSize="16px" lineHeight="24px" mt={4}>
          Save the lucky ones alive, join us to save the future!
        </Text>
        <Text fontFamily={"ZCOOL KuaiLe"} fontSize="16px" lineHeight="24px" mt={4}>
          Our mission is to empower everyone to share wealth and succeed.
        </Text>
        <Link href="#" color="cyan.400" mt={4} fontFamily={"ZCOOL KuaiLe"} fontSize="16px">
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
      <Box ml={[0, 16]}> {/* Adjust margin for responsiveness */}
        <Image
          src=""
          alt="Introduction Image"
          boxSize={["300px", "450px"]} // Responsive size
        />
      </Box>
    </Flex>
  );
};

export default Content;
