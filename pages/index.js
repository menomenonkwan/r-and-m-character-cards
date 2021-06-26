import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Button, FormControl, Input, Wrap, WrapItem } from '@chakra-ui/react';
import { motion } from "framer-motion";

import CharacterCard from '../components/CharacterCard';

const rickAndMortyAPI = `https://rickandmortyapi.com/api/character/`;
const MotionBox = motion(WrapItem);

export async function getServerSideProps() {
  const res = await fetch(rickAndMortyAPI);
  const data = await res.json();
  return {
    props: {
      data
    },
  };
}


export default function Home({ data }) {
  const { info, results: defaultResults = [] } = data;
  const [results, updateResults] = useState(defaultResults);
  const [page, updatePage] = useState({
    ...info,
    current: rickAndMortyAPI
  });
  const { current } = page;

useEffect(() => {
  if ( current === rickAndMortyAPI ) return;

  async function request() {
    const res = await fetch(current)
    const nextData = await res.json();

    updatePage({
      current,
      ...nextData.info
    });

    if ( !nextData.info?.prev ) {
      updateResults(nextData.results);
      return;
    }

    updateResults(prev => {
      return [
        ...prev,
        ...nextData.results
      ]
    });
  }

  request();
}, [current]);

function handleLoadMore() {
  updatePage(prev => {
    return {
      ...prev,
      current: page?.next
    }
  });
}

function handleOnSubmitSearch(e) {
  e.preventDefault();

  const { currentTarget = {} } = e;
  const fields = Array.from(currentTarget?.elements);
  const fieldQuery = fields.find(field => field.name === 'query');

  const value = fieldQuery.value || '';
  const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;

  updatePage({
    current: endpoint
  });
}

  return (
    <>
      <Head>
        <title>Rick And Morty</title>
        <meta name="description" content="A Rick and Morty Character guide, using the Rick and Morty API: https://rickandmortyapi.com"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <FormControl className="search" onSubmit={handleOnSubmitSearch}
        display="flex"
        maxW="500px"
        mt={5}
      >
        <Input 
          name="query" 
          type="search" 
          borderColor="gray.500" 
          borderStartRadius="10px" 
          borderEndRadius="0" 
          background="#f3e1dd"
        />
        <Button 
          borderStartRadius="0" 
          borderEndRadius="10px" 
          background="#89023e" 
          color="#f3e1dd"
          _hover={{ color: "gray.500" }}
        >Search</Button>
      </FormControl>

      <Wrap py={10} maxW="1250px" spacing={10} justify="center">
        {results.map(character => (
          <MotionBox key={character.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          boxShadow="base"
          rounded="25px"
          bg="white"
          _hover={{ boxShadow: "dark-lg", cursor: "pointer" }}
          transition="all 0.3s ease"
          > 
            <CharacterCard character={character} />
          </MotionBox> 
        ))}  
      </Wrap>
      <Button 
        as="button"
        my={5}
        color="#89023e"
        background="#f3e1dd"
        _hover={{ boxShadow: "md", cursor: "pointer" }}
        transition="all 0.3s ease"
        onClick={handleLoadMore}
      >Load More...</Button>
    </>
  )
}
