import Link from 'next/link';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';

export default function CharacterCard({ character }) {
  return (
    
    <Link href={`/character/${character.id}`}>
      <Box
        textAlign="center" 
        overflow="hidden" 
        rounded="25px" 
        background="gray.500"
      >
        <Image 
          src={character.image} 
          width={300} 
          height={300}
          alt={character.url} 
        />
        <Text as="h1" p={2} fontSize="lg" color="#c7d9b7">{character.name}</Text>
      </Box>
    </Link>
  )
}
