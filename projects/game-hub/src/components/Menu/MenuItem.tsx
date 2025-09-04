import { HStack, Text} from "@chakra-ui/react";
import {GameHubImage} from "@/components";
import type {Genre} from "@/hooks/useGenres.ts";

export type MenuItemProps = {
    genre: Genre;
}

const MenuItem = ({genre}: MenuItemProps) => {
    return (
        <HStack align={"center"} gap={2} cursor={"pointer"}>
            <GameHubImage alternativeText={genre.name}
                          src={genre.image_background} srcSet={genre.image_background}/>
            <Text textStyle="md">{genre.name}</Text>
        </HStack>
    );
}
export default MenuItem;