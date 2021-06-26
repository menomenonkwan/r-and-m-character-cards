import { Box, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="header" textAlign="center" p={4} background="gray.500" color="#c7d9b7" width="100%">
      <Heading as="h1">Rick & Morty</Heading>
      <Heading as="h2">Character Cheat Sheet</Heading>
    </Box>
  )
}