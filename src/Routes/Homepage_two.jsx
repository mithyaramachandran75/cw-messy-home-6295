import { Box, Image, Text} from '@chakra-ui/react'

const me=()=>{
    return(
        <Box w="100%" h="25rem" marginTop={"1rem"} display="flex" gap={4}>
            <Box backgroundColor={"RGB(240, 244, 246)"} w="50%" h="39rem">
         <Box>
            <Text fontWeight={"600"} fontSize={"2.5rem"} paddingTop="2rem" textAlign={"center"} >Workout Videos</Text>
         </Box>
         <Box>
            <Text marginTop={"1.1rem"} textAlign="center">Exercise with certified personal trainers whether you're<br></br> at home or on the road.</Text>
         </Box>
         <Box>
            <Text  marginTop={"1rem"} color="RGB(79, 164, 213)" textAlign={"center"}>Find a Workout</Text>
         </Box>
         <Box>
           <Image marginTop={"2rem"} src="https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp"></Image>
         </Box>
         </Box>
         <Box w="50%" h="39rem">
         <Box>
            <Text fontWeight={"600"} fontSize={"2.5rem"} paddingTop="2rem" textAlign={"center"}>Programs</Text>
         </Box>
         <Box>
            <Text marginTop={"1.1rem"} textAlign={"center"}>Professionally designed programs take the guesswork<br></br> out of exercising.</Text>
         </Box>
         <Box>
            <Text  marginTop={"1rem"} color="RGB(79, 164, 213)" textAlign={"center"}>Browse All Programs</Text>
         </Box>
         <Box>
           <Image marginTop={"2rem"} src="https://cloudfront.fitnessblender.com/assets/img/homepage/programs-720.webp"></Image>
         </Box>
         </Box>
        </Box>
    )
}
export default me;