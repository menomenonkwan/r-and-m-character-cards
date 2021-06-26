import { Box, Flex } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Flex minHeight="100vh" direction="column" alignItems="center" justifyContent="center" background="#c7d9b7">
      <Header />
      <Flex as="main" direction="column" alignItems="center" justifyContent="center" flexBasis={['auto', '45%']} flex={1}>
        { children }
      </Flex>
      <Footer />
    </Flex>
  )
}
