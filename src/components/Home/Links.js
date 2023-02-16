import { Button, Container, HStack, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from "react-router-dom";

const Links = (props) => {

  const [copied, setCopied] = useState(false);
  const [color, setColor] = useState()

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);


  return (
    <>
        
        <HStack key={props.key} justifyContent={"space-between"} alignItems={"center"} my={"10px"}>
            <Text>{props.link}</Text>
            <HStack spacing={"10px"}>
              <a href={props.shortenLink} target="_blank">
                <Text color="teal.600">{props.shortenLink}</Text>
              </a>
              <CopyToClipboard text={props.shortenLink} onCopy={() => setCopied(true)}>
                <Button  colorScheme={"teal"}>{copied ? "Copied" : "Copy"}</Button>
              </CopyToClipboard>
            </HStack>
        </HStack>
        
    </>
  )
}

export default Links