import { Box, Image, Text} from "@chakra-ui/react";
 const mine=()=>{
    return(
        <Box w="100%" h="25rem" marginTop={"14rem"} display="flex" gap={6}>
        <Box backgroundColor={"black"} w="50%" h="41rem">
     <Box>
        <Text color="white" backgroundColor={"black"} fontWeight={"600"} fontSize={"2.5rem"} paddingTop="2rem" textAlign={"center"} >Wellness Articles</Text>
     </Box>
     <Box>
        <Text color="white" backgroundColor={"black"} marginTop={"1.1rem"} textAlign="center">Research-backed articles to help you care for your<br></br> body and mind.</Text>
     </Box>
     <Box>
        <Text  marginTop={"1rem"} color="RGB(79, 164, 213)" textAlign={"center"}>Learn from Experts</Text>
     </Box>
     <Box>
       <Image marginTop={"2rem"} src="https://cloudfront.fitnessblender.com/assets/img/homepage/articles-720.webp"></Image>
     </Box>
     </Box>
     <Box backgroundColor={"RGB(216, 217, 218)"} w="50%" h="41rem">
     <Box>
        <Text fontWeight={"600"} fontSize={"2.5rem"} paddingTop="2rem" textAlign={"center"}>Healthy Recipes</Text>
     </Box>
     <Box>
        <Text marginTop={"1.1rem"} textAlign={"center"}>Fuel your day with recipes by Registered Dietitians and<br></br>professional chefs.</Text>
     </Box>
     <Box>
        <Text  marginTop={"1rem"} color="RGB(79, 164, 213)" textAlign={"center"}>Find a Recipe</Text>
     </Box>
     <Box>
       <Image marginTop={"2rem"} src="https://cloudfront.fitnessblender.com/assets/img/homepage/recipes-720.webp"></Image>
     </Box>
     </Box>
    </Box>
    )
    }
    export default mine;