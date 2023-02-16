import React from 'react';
import {Heading, Text, Image, VStack, HStack, Container, Stack, Box, Button} from "@chakra-ui/react";
import ImageCard from './ImageCard';
import brand from "../../images/icon-brand-recognition.svg";
import records from "../../images/icon-detailed-records.svg";
import cutomize from "../../images/icon-fully-customizable.svg";
const SecondSection = () => {
  return (
    <>
    <Container maxW={"container.xl"} padding={["10px" , "20px"]} size={"container.lg"} css={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection:"column"}}>
        <Heading>Advanced Statistics</Heading>
        <Text css={{color: "grey", marginTop: "20px", flexWrap: "wrap"}}>Track how your links are performing across web with our advanced Statistics dashboard</Text>
        
        <Stack direction={["column", "row"]} spacing={["2px", "4"]} justifyContent={"space-between"} css={{marginTop: "50px"}}>
            
            <ImageCard url={brand} heading="Brand Recognition" text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help install confidence in your content." />
            <ImageCard url={records} heading="Brand Recognition" text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help install confidence in your content." />
            <ImageCard url={cutomize} heading="Brand Recognition" text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help install confidence in your content." />
        
        </Stack>

        

    </Container>

    <VStack width={"100%"} height={"200px"}  alignItems={"center"} justifyContent={"center"} spacing={"20px"} css={{backgroundColor: "#3D1766", marginTop: "50px"}}>
        <Heading color="whiteAlpha.900">Boost Your Links Today</Heading>
        <Button colorScheme="teal"  css={{borderRadius: "20px"}}>Get Started</Button>
    </VStack>
    </>
  )
}

export default SecondSection