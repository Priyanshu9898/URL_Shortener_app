import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ImageCard = (props) => {
  return (
    <>
        <VStack spacing={["2p", "20px"]} alignItems={"flex-start"}>
            <Image css={{height:"80px" ,backgroundColor:"rgb(19, 4, 64)", borderRadius:"37px", padding: "15px"}} src={props.url} alt={props.heading}/>
            <Heading my={"4px"}>{props.heading}</Heading>
            <Text css={{color: "grey"}}>{props.text}</Text>
        </VStack>
    </>
  )
}

export default ImageCard