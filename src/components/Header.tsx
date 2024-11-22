import React from 'react';
import { Box, HStack, Link, Text } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <Box
      as="header"
      bg="#121212" 
      p={4}
      color="#F5F5F5"  
      shadow="md"
    >
      <HStack justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" color="#fff">
          MY DESIRE
        </Text>
        <HStack spacing={6}>
          <Link href="#features" color="#F5F5F5" _hover={{ textDecoration: 'underline', color: '#00B8D4' }}>
            Features
          </Link>
          <Link href="#about" color="#F5F5F5" _hover={{ textDecoration: 'underline', color: '#00B8D4' }}>
            About
          </Link>
          <Link href="#contact" color="#F5F5F5" _hover={{ textDecoration: 'underline', color: '#00B8D4' }}>
            Contact
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};
