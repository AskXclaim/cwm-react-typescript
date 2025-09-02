import {Heading, HStack, VStack} from "@chakra-ui/react";
import {GameGrid, GameHubSelect} from "@/components/index.ts";
import type {ValueText} from "@/Types-Interfaces/ValueText.ts";

type MainSectionProps = {
    platformOptions: ValueText[];
    orderByOptions: ValueText[];

}
const MainSection = ({platformOptions, orderByOptions}: MainSectionProps) => {
    return (
        <VStack align="flex-start">
            <Heading size="3xl">Games</Heading>
            <HStack>
                <GameHubSelect options={platformOptions}/>
                <GameHubSelect options={orderByOptions}/>
            </HStack>
            <GameGrid/>
        </VStack>
    );
}
export default MainSection;