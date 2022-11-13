import { Box, Image, Text} from "@chakra-ui/react";

const data=()=>{
    return(
        <Box w="100%" h="50rem" marginTop={"14rem"}>
            <Box backgroundColor={"RGB(240, 250, 255)"} paddingTop="2rem">
            <Text  fontSize={"3rem"} textAlign={"center"}>Supportive Community</Text>
            <Text paddingTop={"0.5rem"} textAlign={"center"}>Stay motivated and engaged with a little help from a<br></br>supportive community of other members.</Text>
            <Image w="100%" h="50rem"  src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-2160.webp"></Image>
            </Box>
        </Box>
    )
}
export default data;