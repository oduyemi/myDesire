import React from 'react';
import { Box } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box bg="#121212" color="#F5F5F5">
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};
