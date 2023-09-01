import React from 'react';
import { Card,CardFooter,Text, Box } from '@chakra-ui/react';
import GroupsIcon from '@mui/icons-material/Groups';


const Bodytwocard = ({src,heading,text}) => {
  return (
    <Box borderRadius={5} border={"1px solid gray"} >
        <Card bg={'#1B2028'}>
            {/* <Image borderRadius="5px 5px 0 0" src={src}/> */}
            <GroupsIcon style={{margin:"auto",fontSize:60,background:"rgb(14,219,157)",borderRadius:"5px",marginTop:"30px"}} />
            {/* <CardHeader >
            <Heading fontFamily={"Open Sans, sans-serif, Arial, Helvetica"} fontWeight={700} fontSize="18px">{heading}</Heading>
            </CardHeader> */}
            <CardFooter>
            <Text fontWeight={500} color="white" fontSize="23px" textAlign={'center'} lineHeight={'2'} bg={'#1B2028'} p={10}>{text}</Text>
            </CardFooter>
        </Card>
    </Box>
  )
}

export default Bodytwocard;