import {Flex, Text} from "@chakra-ui/react";
import {GameHubImage} from "@/components";

export type MenuItemProps = {
    text: string;
}

const MenuItem = ({text}: MenuItemProps) => {
    return (
        <Flex direction={"row"} align={"center"} gap={2} cursor={"pointer"}>
            <GameHubImage alternativeText={text} src={"./src/assets/game-hub-logo.png"} 
                          srcSet={"./src/assets/game-hub-logo.webp"}/>
            <Text textStyle="md">{text}</Text>
        </Flex>
    );
}
export default MenuItem;