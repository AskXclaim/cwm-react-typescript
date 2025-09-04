import {Heading, VStack} from "@chakra-ui/react";
import {GameGrid} from "@/components/index.ts";

const MainSection = () => {
    return (
        <VStack align="flex-start">
            <Heading size="3xl">Games</Heading>
            <GameGrid/>
        </VStack>
    );
}
export default MainSection;