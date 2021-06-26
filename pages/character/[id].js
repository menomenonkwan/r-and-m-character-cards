import Link from 'next/link';
import Image from 'next/image';
import { Button, Flex, Text } from "@chakra-ui/react";

const rickAndMortyEndpoint = `https://rickandmortyapi.com/api/character/`;

export async function getServerSideProps({ params }) {
  const res = await fetch(`${rickAndMortyEndpoint}${params.id}`);
  const data = await res.json();

  return {
    props: {
      character: data
    },
  };
}

export default function CharacterInfo({ character }) {
  
  return (
    <>
      <Link href="/">
        <Button 
          as="button"
          mb={10}
          color="#89023e"
          background="#f3e1dd"
          _hover={{ boxShadow: "md", cursor: "pointer" }}
          transition="all 0.3s ease"
        >Back Home</Button>
      </Link>
      <Flex background="gray.400" rounded="25px" overflow="hidden">
        <Image 
          src={character.image} 
          width={300} 
          height={300}
          alt={character.url} 
        />
        <Flex direction="column" justifyContent="center" alignItems="start" fontWeight="bold" px={5} lineHeight={2}>
          <Text as="p">Name: <Text as="span" fontWeight="normal">{character.name}</Text></Text>
          <Text as="p">Species: <Text as="span" fontWeight="normal">{character.species}</Text></Text>
          <Text as="p">Gender: <Text as="span" fontWeight="normal">{character.gender}</Text></Text>
          <Text as="p">Location: <Text as="span" fontWeight="normal">{character.location.name}</Text></Text>
          <Text as="p">Status: <Text as="span" fontWeight="normal">{character.status}</Text></Text>
        </Flex>
      </Flex>
    </>
  )
}