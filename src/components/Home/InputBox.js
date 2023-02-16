import { Box, Button, Container, HStack, Input, Stack, Text } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import backgroundImage from "../../images/bg-shorten-mobile.svg";
import "./input.css"
import Links from './Links';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InputBox = () => {

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  }

  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortenLink, setShortenLink] = useState(undefined);
  const [addLinks, setAddLinks] = useState([]);
  const [clicked, setClicked] = useState(undefined);
  // const [remove, setRemove] = useState("1");

    const fetchData = async () => {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      const data = await res.json()
      console.log(data.result.full_short_link);
      await setShortenLink(data.result.full_short_link);
      console.log(setAddLinks);
  
    }

    const setArr = async () => {
      setLoading(true);
      
      await addLinks.push([link, shortenLink]);

      setLoading(false);
      
      console.log(addLinks);

    }

    useEffect(() => {
      setArr();
      
    } , [shortenLink])
  
  

  const handleChange = (e) => {
    setLink(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    // console.log(link);

    if(!link){
      toast.error("Enter the Link First...", toastOptions);
    }
    else{

      if(link.length) {
        
        await fetchData();
        
        setClicked(true);
        // setLink("");
      }

    }

  }
 
  return (
    <>
    <Container my={"20px"} className="box" maxW={"container.xl"} padding={["10px" , "20px"]} size={"container.lg"} height={"50%"}  width={"100%"} >
        <Stack direction={["column", "row"]} width={"100%"} alignItems={"flex-start"} justifyContent={"center"} spacing={["2px", "15px"]}>
          <Input variant="filled"  value={link} name={"link"} onChange={handleChange}    placeholder="Shorten a Link here.." width="60%" className='inp'  />
          <Button colorScheme='teal' type="submit" onClick={handleSubmit}>Shorten It!</Button>

        </Stack>
    </Container>

    <Container maxW={"container.xl"} padding={["10px" , "20px"]} size={"container.lg"} height={"50%"}>

          {addLinks.map((item, index) => {
            if(item[0] === ""){
              console.log("ehe")
            }
            return(
              <> 
                {item[0] === "" ? (<></>) : (
                  <>
                    <Links key={index} link={item[0]} shortenLink={item[1]} /> 
                  </>
                )}  
              </>
            )
          })}
      
      
    </Container>
    <ToastContainer />
    </>
  )
}

export default InputBox