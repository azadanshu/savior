import React from 'react';
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const phases = [
  {
    phase: "Phase 1",
    description: "Technical Readiness and Smart Contract Audit",
    image: "https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__",
  },
  {
    phase: "Phase 2",
    description: "Increase Liquidity and Trading Volume",
    image: "https://s3-alpha-sig.figma.com/img/aa29/8bb9/151666f4ac7fae86b6b63f7e97472d61?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZAHaJXiBYfL1h1zgGPIaFE0JavKk6hTn3UOSRgYpS-DqHfNvBX1Zohv99pdXvGSRn2E8qKQy3rUrez0ySAOTwPCu3XeZgk4fsGL8xc-81KN5vvTzjWexDRx4NXnfW6PnIzY8nlwaizp7wImuel-p6v~HAj5yNO4QQQyTkK7Qc8qPTfZ-EK74gDlaMRluU1sJfDwiGihGOhxnVIlyEa~FuAzvJpUmuoERPLFnrrHoRktYitrDFOmbzL41UpIIhJ0qoi6HVz8OPWYXNEAHxe46UXL6RMwmFnwsezpMONedZIB5IboMY7i~3eXxbueFbLgi4yD0~NssIKD~vhbXqHoiw__",
  },
  {
    phase: "Phase 3",
    description: "Community Building and Marketing",
    image: "https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__",
  },
  {
    phase: "Phase 4",
    description: "Ecosystem Expansion and Partnerships",
    image: "https://s3-alpha-sig.figma.com/img/e792/f455/d02fe23b0b95b2461d5ab0db33cfb4b7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FoHmU4eSMr3BrRCqhZU4684944N4vHk3CFWj4zcV~r2Lwras3ip4Q55mWg8jvJaRoiZfA-lXzDxE6zK0s66seFnh4cFV5bkUCf7oxRmwWosNn4InT3~WxIRVJXTruqzwLeK2Kg467xnwbp9B4tOtff46QCteK6wfLR-A2TpQDBKd2dSfGQEwKRBLeZlKdUMt40PuBXlzS4LJm6yE98HrysbllIqXZlFe7dIXoeHkSkDzrWuiTTvKFYS6qqLSBU5P6RgxzCVewvHf69K24gsKLBHBJMJmHqzS0qOYT8j7teh6KaxoLnLef58tI99B9UdGeJQ4l2sygHUmvubcWJMqJw__",
  },
];

const RoadMapCard = ({ phase, description, image }) => (
  <Box
    position="relative"
    borderWidth="1px"
    borderRadius="13.17px"
    overflow="hidden"
    width={["131.3px", "237.06px"]} // Adjusted width for small screens
    height={["193.3px", "349px"]} // Adjusted height for small screens
    textAlign="left"
    mb={[0, 8]} // Adjusted margin bottom for small screens
  >
    <Image
      src={image}
      alt={`${phase} image`}
      objectFit="cover"
      width="100%"
      height="100%"
      position="absolute"
      top="0"
      left="0"
      zIndex="1"
    />
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bg="rgba(0, 0, 0, 0.6)"
      zIndex="2"
    />
    <Box
      position="absolute"
      bottom="0"
      left="0"
      width="100%"
      p={4}
      zIndex="3"
    >
      <Text
        fontFamily="Inter"
        fontSize={["16px", "21.95px"]} // Adjusted font size for small screens
        fontWeight="700"
        lineHeight={["24px", "32.92px"]} // Adjusted line height for small screens
        color="white"
        mb={2}
      >
        {phase}
      </Text>
      <Text
        fontFamily="Manrope"
        fontSize={["13px", "17.56px"]} // Adjusted font size for small screens
        fontWeight="400"
        lineHeight={["19.5px", "26.34px"]} // Adjusted line height for small screens
        color="white"
      >
        {description}
      </Text>
    </Box>
  </Box>
);

const Cards = () => {
  return (
    <Box
      color="white"
      position="relative"
      h="712px"
      bgImage="url('https://s3-alpha-sig.figma.com/img/7fb8/c9c7/2e63edc105c3925cfa651946f437c2fd?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjLcTC3sH3GYbn7re~tH~Nmk1RGHp0R2VmCRcND3C-8~YPtYnKAGwtoRrge6hYpDbiEEjiFS81-GaSkT9E76UPQCb4SI0grIdfxU29vpK3Nqaw3KTU9AUYdwPxjbJzc7JXd5ipQuYTNdD6Y2p-AnWzv8tKVcVhhSBIf1F0BAqao09vOZw5RiVvKueL5m7-qEVbVm4ybeFvPo9Vnoi9ZLk7eWw5E5fLY1Ifd0lWW5htWnhDegKifYhgbKJu-gqjs2ifZNVPGt-qVomH1ScrUAOF69Urdxi83gjySJ89JzuYFalMH-qwUJifSgv3Hn2A961XxqppCaW1mW7Onyc4AzBg__')"
      bgSize="cover"
      bgPos="center"
      bgOpacity="0.4" // Background image opacity set to 40%
    >
      <Text
        fontFamily="shojumaru"
        fontSize={["32px", "44px"]}
        fontWeight="300"
        lineHeight={["38.08px", "52.36px"]}
        color="#E62E28"
        textAlign="center"
        mb={8}
        pos="relative"
      >
        ROAD MAP
      </Text>
      <Flex justifyContent="center" alignItems="center" wrap="wrap" gap={[0, 8]}> {/* Adjusted gap for small screens */}
        {phases.map((phase, index) => (
          <Box key={index}>
            <RoadMapCard {...phase} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Cards;

