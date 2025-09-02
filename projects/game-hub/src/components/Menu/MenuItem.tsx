import {Flex, Text} from "@chakra-ui/react";
import {GameHubImage} from "@/components";

export type MenuItemProps = {
    text: string;
    src: string;
    srcSet: string;
}

const MenuItem = ({text, src, srcSet}: MenuItemProps) => {
    return (
        <Flex direction={"row"} align={"center"} gap={2} cursor={"pointer"}>
            <GameHubImage alternativeText={text} src={src} srcSet={srcSet}/>
            <Text textStyle="md">{text}</Text>
        </Flex>
    );
}
export default MenuItem;