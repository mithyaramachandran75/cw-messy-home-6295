import {Box , Text , Image, Flex} from "@chakra-ui/react";
import {TriangleDownIcon,Search2Icon} from '@chakra-ui/icons'
import { BsHandbag } from "react-icons/bs";
import { useContext } from "react"

import {Link} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"
import {useNavigate} from  'react-router-dom'
const Navbar=()=>{
    const {authState,handleLogout} = useContext(AuthContext)
    const navigate = useNavigate()
    function handleClick(){
        handleLogout()
        navigate('/')
    }
    return(
        <Box h="7rem" w="100%"  display="flex">
       <Box marginLeft="8rem" h="7rem" w="10rem">
        <Link to='/'>
            <Image boxSize="100%" src="https://cloudfront.fitnessblender.com/assets/img/fit-ogp-logo.jpg"/>
        </Link>
       </Box>
       <Flex gap="3px" marginLeft="2rem"  marginTop="3.8rem" fontWeight="650"  fontFamily="initial">      
       <Text>WORKOUTS </Text>
       <TriangleDownIcon color="RGB(79, 164, 213)"/>
       </Flex>
       <Box marginLeft="2rem" marginTop="3.8rem" fontWeight="650"  fontFamily="initial">      
       <Text>PROGRAMS <TriangleDownIcon color="RGB(79, 164, 213)"/></Text>
       </Box>
       <Box marginLeft="2rem" marginTop="3.8rem" fontWeight="650"  fontFamily="initial">      
       <Text>HEALTHY LIVING  <TriangleDownIcon color="RGB(79, 164, 213)"/></Text>
       </Box>
       <Box marginLeft="2rem" marginTop="3.8rem" fontWeight="650"  fontFamily="initial">      
       <Text>COMMUNITY  <TriangleDownIcon color="RGB(79, 164, 213)"/></Text>
       </Box>
       <Box marginLeft="2rem" marginTop="3.6rem" fontWeight="650"  fontFamily="initial">      
       <Text>ABOUT <TriangleDownIcon color="RGB(79, 164, 213)"/></Text>
       </Box>
       <Box marginLeft="2rem" marginTop="3.8rem" fontWeight="650"  fontFamily="initial">      
       <Text>STORE </Text>
       </Box>
       <Box marginLeft="2rem" marginTop="3.8rem" fontWeight="650"  fontFamily="initial">      
       <Text color={"RGB(79, 164, 213)"}>MEMBERSHIP </Text>
       </Box>
       {/* //this box for login section  */}
       <Box>
        {/* login */}
        <Box marginLeft="2rem" marginTop="3.5rem" fontWeight="650"   fontFamily="initial">      
      {authState.isAuth?<Text onClick={handleClick}>Logout</Text>:<Link to='/login' color="RGB(79, 164, 213)">Hi! Sign In </Link>} 
       <Text>My Fitness <TriangleDownIcon color="RGB(79, 164, 213)"/></Text>
       </Box>
       </Box>
       <Box>
        {/* cart or search bar  */}
        <Search2Icon marginTop={"4.5rem"} marginLeft="2rem" h="2rem" w="1.5rem"/>
       </Box>
       <Box marginLeft={"1.7rem"} marginTop="4.5rem">
       <BsHandbag  fontSize={"1.6rem"} />
       </Box>
        </Box>
    )
}
export default Navbar;