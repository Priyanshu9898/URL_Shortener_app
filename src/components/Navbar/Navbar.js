import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
const Navbar = () => {
  return (
    <>
        <div className="navbar">

            {/* Navbar Container */}
            <div className="con">

                <div className="sec">
                    {/* Logo here */}
                    <Link to="/" className='logo'>
                        Shortly
                    </Link>

                    <div className='items'>
                        <Link to="/features" className="link">
                            Features
                        </Link>
                        <Link to="/pricing" className="link"> 
                            Pricing
                        </Link>
                        <Link to="/resources" className="link">
                            Resources
                        </Link>

                    </div>
                </div>

                <div className='buttons'>
                    <Link to="/login" className="login">
                        <Button variant="link">
                        Login
                        </Button>
                     
                       
                    </Link>

                    <Link to="/register" >
                       <Button css={{borderRadius: "20px"}} colorScheme={"teal"}>Signup</Button>
                    </Link>
                </div>

            </div>

        </div>
    </>
  )
}

export default Navbar;