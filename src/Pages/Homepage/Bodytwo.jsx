import React from 'react';
import { Box,SimpleGrid } from "@chakra-ui/react";
import Bodytwocard from './Bodytwocard';

const Bodytwo = () => {
  return (
    <Box fontFamily={"Open Sans, sans-serif, Arial, Helvetica"} mx={20} p={30} bg={'#1B2028'}>

    <Box>
        <SimpleGrid gap={'70'} templateColumns='repeat(auto-fill, minmax(285px, 1fr))'>

            <Bodytwocard src="https://img.gkbcdn.com/s3/bn/2301/dyads11dog2-63c66dea2b40c939489cd456.gif"  text="We're here to assist
you in forming a
thriving startup team"/>

            <Bodytwocard src="https://img.gkbcdn.com/bn/2212/488x274-63998a412b40c92ac0082d77._p1_.jpg"  text="We provide financing to expand your business"/>

            <Bodytwocard src="https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg" text="We support you in crafting strategy and marketing solutions"/>

        </SimpleGrid>
    </Box>
    </Box>
  )
}

export default Bodytwo;