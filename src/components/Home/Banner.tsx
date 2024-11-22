import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import CTAButton from '../elements/CTAButton';
import hero from "../../assets/images/hero.png";

export const Banner: React.FC = () => {
  return (
    <Box
      as="section"
      bgImage={hero}
      bgSize="cover"
      bgPosition="center"
      color="#F5F5F5"
      py={16}
      height="80.5vh"
      textAlign="center"
      bgColor="#121212"
      display="flex"
      justifyContent="center"
      alignItems="center"  
      pt={0}  
    >
      <VStack spacing={6} align="center">
        <Heading
          size="2xl"
          fontWeight="bold"
          color="#fff"
        >
          Welcome to My Desire!
        </Heading>
        <Text fontSize="xl" maxW="600px" mt={2} color="#F5F5F5">
          Dive into an exciting world of adventure, strategy, and fun. Start your journey today.
        </Text>
        <CTAButton 
          text="Play Now"
          color="white" 
          bgColor="#6200EA"
          _hover={{ bgColor: "#3700B3" }}
        />
      </VStack>
    </Box>
  );
};
