import {Heading, List} from "@chakra-ui/react";
import {GameGrid} from "@/components/index.ts";

const MainSection = () => {
    return (
        <List align="flex-start">
            <Heading size="3xl">Games</Heading>
            <GameGrid/>
        </List>
    );
}
export default MainSection;