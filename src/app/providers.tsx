'use client';

import { ThemeProvider } from '@/style/ThemeProvider';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </CacheProvider>
  );
}