import { HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from "../../images/logo.svg";
import facebook  from "../../images/icon-facebook.svg";
import twitter  from "../../images/icon-twitter.svg";
import pinterest  from "../../images/icon-pinterest.svg";
import instagram  from "../../images/icon-instagram.svg";
import "./footer.css";

const Footer = () => {
  return (
    <Stack direction={["column","row"]} alignItems={"flex-start"} justifyContent={"space-evenly"} py={"40px"} css={{backgroundColor:"rgb(19, 4, 64)", color: "white"}}>
        
            <Image  src={logo} alt="" />
            <HStack  alignItems={"flex-start"} justifyContent={"center"} spacing={"50px"}>
                <VStack justifyContent={"center"} alignItems={"flex-start"}>
                    <Text fontWeight="bold">Features</Text>
                    <Text className="img" color="grey">Link Shortening</Text>
                    <Text  className="img" color="grey">Branded Links</Text>
                    <Text className="img" color="grey">Analytics</Text>
                </VStack>
                <VStack justifyContent={"center"} alignItems={"flex-start"}>
                    <Text fontWeight="bold">Resources</Text>
                    <Text className="img" color="grey">Blog</Text>
                    <Text className="img" color="grey">Developers</Text>
                    <Text className="img" color="grey">Support</Text>
                </VStack>
                <VStack justifyContent={"center"} alignItems={"flex-start"}>
                    <Text fontWeight="bold">Company</Text>
                    <Text className="img" color="grey">About</Text>
                    <Text className="img" color="grey">Our Teams</Text>
                    <Text className="img" color="grey">Career</Text>
                    <Text className="img" color="grey">Contact</Text>
                </VStack>
            </HStack>
            <HStack spacing="20px">
                <Image className="img" src={facebook} alt="facebook" />
                <Image className="img" src={twitter} alt="Twitter" />
                <Image className="img" src={pinterest} alt="pinterest" />
                <Image className="img" src={instagram} alt="instagram" />
            </HStack>
    </Stack>
  )
}

export default Footer