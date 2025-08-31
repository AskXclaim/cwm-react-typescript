import {Flex, Heading} from "@chakra-ui/react";
import {GameHubSelect} from "@/components/index.ts";
import type {ValueText} from "@/Types-Interfaces/ValueText.ts";

type MainSectionProps = {
    platformOptions: ValueText[];
    orderByOptions: ValueText[];

}
const MainSection = ({platformOptions, orderByOptions}: MainSectionProps) => {
    return (
        <Flex direction="column" grow={1} pl={2}>
            <Heading size="3xl">Games</Heading>
            <Flex direction="row">
                <GameHubSelect options={platformOptions}/>
                <GameHubSelect options={orderByOptions}/>
            </Flex>
        </Flex>
    );
}
export default MainSection;