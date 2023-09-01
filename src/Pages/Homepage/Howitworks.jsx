import { Box, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react';
import src_first from "../Assets/first.jpeg"
import src_second from "../Assets/second.jpeg"
import arrow from "../Assets/Arrow.jpeg"
import one from "../Assets/1.jpg"
import two from "../Assets/2.jpg"

const Howitworks = () => {
  return (
    <>
    <Box my={130}>
    <Heading textAlign={'center'} margin={'auto'} mb={70}>How it works ?</Heading>
    <HStack margin={'auto'} width={'60%'} justifyContent={'space-between'}>
        <HStack gap={5}>
        <Image boxSize={50} src={one} alt='one'/>
        <Text width={'50%'} fontSize={'23'} fontWeight={550}>Select the funding level that suits your business's needs.</Text>
        </HStack>
        <Image src={src_first} boxSize={400} />
    </HStack>
   <Image width={"40%"} margin={"auto"} src={arrow} alt='arrow'/>
    <HStack margin={'auto'} width={'60%'} gap={200} justifyContent={'space-between'}>
        <Image src={src_second} boxSize={400} />
        <HStack gap={5}>
        <Image boxSize={50} src={two} alt='two'/>
        <Text width={'80%'} fontSize={'23'} fontWeight={550}>Enter the specifics of your business and outline your goals</Text>
        </HStack>
    </HStack>
    </Box>
    </>
  )
}

export default Howitworks