import { Box, Image, Text} from "@chakra-ui/react";
const last=()=>{
    return(
        <Box w="100%" h="28rem" marginTop={"7rem"}>
            <Box  marginTop={"15rem"}>
                <Text marginLeft={"4rem"} fontSize={"2.8rem"}>Not sure where to start?</Text>
            </Box >
            <Box >
                <Text gap="6" marginLeft={"4rem"}>Programs offer day-to-day guidance on an interactive calendar to keep you on track.</Text>
            </Box>
            <Box width={"100%"} display="flex">
            <Box >
                <Text marginLeft={"6rem"} marginTop="3rem" fontFamily={"initial"} fontSize={"1.7rem"} fontWeight={"600"}> Perfect for Beginners</Text>
            
            <Box marginLeft={"2rem"} marginRight={"4rem"} w="85%" h="29rem"  >
                <Image  w="100%" h="15rem" src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-o_31_fb-low-impact-round-2-fat-loss-program-40-minutes-or-less.jpg" />
            <Text fontFamily={"initial"} marginLeft={"1rem"} color={"RGB(79, 164, 213)"}>4 WEEK PROGRAM - 34 MIN/DAY</Text>
            <Text marginLeft={"1rem"} fontWeight={"600"} fontSize={"1.1rem"}>FB Low Impact Round 2 - Build <br></br> Muscle & Burn Fat - 40 Minutes <br></br> or Less</Text>
            <Text marginTop={"4.5rem"} fontWeight={"600"}>$14.99</Text>
            </Box>
            </Box>
            <Box>
                <Text marginLeft={"4rem"} marginTop="3rem" fontFamily={"initial"} fontSize={"1.7rem"} fontWeight={"600"}>You Choose</Text>
           
            <Box marginLeft={"2rem"}  marginRight={"4rem"} w="85%" h="29rem" >
                <Image  w="100%" h="15rem" src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-o_29_4-week-fb-blend-burn-fat-build-muscle-tone-35-or-55-minutes-a-day.jpg" />
                <Text fontFamily={"initial"} marginLeft={"1rem"} color={"RGB(79, 164, 213)"}>4 WEEK PROGRAM - 38 MIN/DAY</Text>
            <Text marginLeft={"1rem"} fontWeight={"600"} fontSize={"1.1rem"}>FB Blend - Burn Fat, Build <br></br> Muscle, Tone; 35 or 55 Minutes a <br></br> Day</Text>
            <Text marginTop={"4.5rem"} fontWeight={"600"}>$14.99</Text>
           </Box>
            </Box>
            <Box>
                <Text marginLeft={"4rem"} marginTop="3rem" fontFamily={"initial"} fontSize={"1.7rem"} fontWeight={"600"}> Short on Time?</Text>
            
            <Box marginLeft={"2rem"}  marginRight={"4rem"} w="85%" h="29rem" >
                <Image  w="100%" h="15rem" src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-o_28_fb-30-4-week-fat-loss-program-for-busy-people-round-4.jpg" />
                <Text fontFamily={"initial"} marginLeft={"1rem"} color={"RGB(79, 164, 213)"}>4 WEEK PROGRAM - 30 MIN/DAY</Text>
            <Text marginLeft={"1rem"} fontWeight={"600"} fontSize={"1.1rem"}>FB 30 - Fat Loss Program For <br></br> Busy People (Round 4)</Text>
            <Text marginTop={"4.5rem"} fontWeight={"600"}>$14.99</Text>
            </Box>
            </Box>
            <Box>
                <Text marginLeft={"4rem"} marginTop="3rem" fontFamily={"initial"} fontSize={"1.7rem"} fontWeight={"600"}> No Equipment Necessary</Text>
            
            <Box marginLeft={"2rem"}  marginRight={"4rem"} w="85%" h="29rem" >
                <Image  w="100%" h="15rem" src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-o_7_fb-bodyweight-bodyweight-only-fat-loss-program.jpg" />
                <Text fontFamily={"initial"} marginLeft={"1rem"} color={"RGB(79, 164, 213)"}>4 WEEK PROGRAM - 40 MIN/DAY</Text>
            <Text marginLeft={"1rem"} fontWeight={"600"} fontSize={"1.1rem"}>FB Bodyweight - Bodyweight <br></br> Only Fat Loss Program  </Text>
            <Text marginTop={"4.5rem"} fontWeight={"600"}>$14.99</Text>
            </Box>
            </Box>
            </Box>
        </Box>
    )

}
export default last;