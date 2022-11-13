import { Box, Divider, Flex, Image,  Text } from "@chakra-ui/react";

export default function Header()
{
    return (
        < Box bg="RGB(0, 0, 0)"  height="500px" pl="80px" pr="80px" marginTop={"25rem"}>
        <Flex>
            <Box w="40%">
            
            <Image marginTop={"2rem"} h="5rem" w="50%" src="data:image/png;base64,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" alt="img"/></Box>
            <Box ml="50px" mt="30px">
                <Text color="white" fontWeight="bold" mt="20px">WORKOUTS</Text>
                <Text color="white"  mt="20px">WORKOUT VIDEOS</Text>
                <Text color="white"  mt="20px">CUSTOM WORKOUTS</Text>
                <Text fontWeight="bold" color="white"  mt="20px">PROGRAMS</Text>
                <Text color="white"  mt="20px">WORKOUT PROGRAMS</Text>
                <Text color="white"  mt="20px">MEAL PLANS</Text>
                <Text color="white"  mt="20px">PILOT PROGRAMS</Text>
                <Text color="white"  mt="20px">ROUTINES</Text>
            </Box>
            <Box ml="50px" mt="30px">
            <Text color="white" fontWeight="bold" mt="20px">HEALTHY LIVINGS</Text>
                <Text color="white"  mt="20px">FITNESS</Text>
                <Text color="white"  mt="20px">HEALTH </Text>
                
                <Text color="white"  mt="20px">NUTRITION</Text>
                <Text color="white"  mt="20px">HEALTHY RECIPIES</Text>
                <Text color="white"  mt="20px">EXPERTS</Text>
                
            </Box>
            <Box ml="50px" mt="30px">
            <Text color="white" fontWeight="bold" mt="20px">ABOUT</Text>
                <Text color="white"  mt="20px">CAREERS</Text>
                
                <Text color="white"  mt="20px">TUTORIALS</Text>
                <Text color="white"  mt="20px">OUR TEAMS</Text>
                <Text color="white"  mt="20px">B2B OPTIONS</Text>
            </Box>
            <Box ml="50px" mt="30px"><Text color="white" fontWeight="bold" mt="20px">MEMBERSHIPS</Text>
            <Text color="white" fontWeight="bold" mt="20px">BLOG</Text>
            <Text color="white" fontWeight="bold" mt="20px">COMMUNITY</Text>
            <Text color="white" fontWeight="bold" mt="20px">FB PLUS</Text>
            <Text color="white" fontWeight="bold" mt="20px">CONTACT</Text>
            <Text color="white" fontWeight="bold" mt="20px">FAQ</Text>
            <Text color="white" fontWeight="bold" mt="20px">STORE</Text></Box>
        </Flex>
        <Divider mt="20px" orientation='horizontal' />
        <Text color="white">Copyright © 2022 Fitness Blender. All rights reserved. Terms of Use Privacy Policy</Text>
        </Box >
    )
}