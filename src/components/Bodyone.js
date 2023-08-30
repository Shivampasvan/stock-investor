import { Box, Button, HStack, Heading, Image} from '@chakra-ui/react'
import React from 'react';
import src from '../Assets/bodyone_image.jpg'

const Bodyone = () => {
  return (
    <Box m={20}>
    <HStack mt={20} justifyContent={'space-between'}>
        <Box>
            <Heading fontSize={{sm:16, md:20, lg:60}} fontFamily={'mono'}>Turning <span style={{color: "rgb(14,219,157)"}}>Ideas</span> into <br/> <span style={{color: "rgb(14,219,157)"}}>Reality</span>, Bridging <br/> Visions</Heading>
            <Button bg={'rgb(14,219,157)'} mt={30} color={'white'} padding={"24px 36px"} fontSize={'24px'}>Get in touch</Button>
        </Box>
        <Box>
            <Image src={src}/>
        </Box>
    </HStack>
    </Box>
  )
}

export default Bodyone