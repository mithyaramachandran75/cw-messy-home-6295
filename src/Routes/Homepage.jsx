import { Box,Button, Image, Text} from "@chakra-ui/react";
import Page from "./Homepage_one";
 import Hpage from "./Homepage_two"
 import Ppage from "./Homepage_three"
 import Mypage from "./Homepage_four"
 import Vpage from "./Homepage_last"
 import Header from '../Components/footer';
const  Home=()=>{
    return(
     <Box h="38rem" w="100%" border={"1px solid black"} backgroundColor="RGB(44, 181, 198)">
      <Text fontSize={"2.9rem"} fontWeight="600" color="white" paddingLeft="18rem" paddingTop={"6rem"}>Feel Great.<br></br>Body and Mind.</Text>
      <Text fontSize={"1.3rem"}  color="white" paddingLeft="18rem" paddingTop={"1rem"}>Choose from hundreds of workouts, healthy<br></br>recipes, relaxing meditations, and expert<br></br>articles, for a whole body and mind<br></br>approach to feeling great.</Text>
     <Button marginLeft={"18rem"} marginTop="1rem" w="9rem" h="3.5rem" color={"white"} backgroundColor="black">JOIN NOW</Button>

    <Image marginTop={"-26.8rem"} marginLeft="55rem" w="35%" src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp"></Image>
    <Page />
    <Hpage />
    <Ppage />
    <Mypage />
    <Vpage />
    <Header />
     </Box>
    
    )
}
export default Home;