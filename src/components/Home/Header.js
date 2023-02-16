import React from 'react'
import { Box, Heading, HStack, Stack, Text, Image, Button } from '@chakra-ui/react';
import "./Header.css";
import img from "../../images/illustration-working.svg";

const Header = () => {
  return (
    <Stack px={["5px", "10"]}  direction={['column', 'row']} width={"100%"} alignItems={"center"} justifyContent={['center' , "space-between"]}>
        <Box className="text" width={"60%"} css={{paddingLeft: "120px"}}>
          <Heading className="title">
            More Than Just Shorter Links
          </Heading>
          <Text className="para">Build your brand's recognition and get detailed insights on how your links are performing</Text>
          <Button css={{borderRadius:"20px", marginTop: "25px"}} colorScheme="teal">Get Started</Button>
        </Box>
        <Box>
          <Image  src={img} width={"500px"} height={"400px"} />
        </Box>
    </Stack>
  )
}

export default Header