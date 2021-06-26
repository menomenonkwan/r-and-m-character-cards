import { Box, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box as="footer" width="100%" textAlign="center" p={5}>
      <Text fontSize="sm">made by Brannon Lee</Text>
      <Text fontSize="m">with use of the <Text as="a" fontStyle="italic" fontWeight="bold" color="purple.500" href="https://rickandmortyapi.com/">Rick And Morty API</Text></Text>
    </Box>
  )
}
