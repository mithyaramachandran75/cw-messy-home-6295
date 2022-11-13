import { Box,Button, Image, Text} from "@chakra-ui/react";
const page=()=>{
    return(
        <Box w="100%" h="35rem" backgroundColor={"RGB(244, 230, 247)"} >
        <Box  w="100%">
            <Text fontSize={"2.5rem"} fontWeight="500" textAlign="center">Introducing<br></br>FB Plus Passes</Text>
        </Box>
        <Box>
            <Text fontSize={"1rem"} marginTop={"1rem"} textAlign={"center"}>Passes give you full access to everything FB Plus has<br></br>to offer, without a long-term subscription. Choose a<br></br>pass that fits your budget and your schedule.</Text>
        </Box>
        <Box>
            <Button marginLeft={"45rem"} marginTop="1.8rem" w="9rem" h="3.2rem" color={"white"} backgroundColor="black">BUY A PASS</Button>
        </Box>
        <Box>
            <Image marginLeft={"28rem"} src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp"></Image>
        </Box>
        </Box>
    )
}
export default page;