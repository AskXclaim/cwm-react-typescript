import {HStack, List, Text} from "@chakra-ui/react";
import {GameHubImage} from "@/components";
import type {Genre} from "@/hooks/useGenres.ts";

export type MenuItemProps = {
    genre: Genre;
}

const MenuItem = ({genre}: MenuItemProps) => {
    return (
        <List.Item paddingY="5px" cursor={"pointer"} >
            <HStack justify="space-between">
                <GameHubImage alternativeText={genre.name} 
                              src={genre.image_background} 
                              srcSet={genre.image_background}/>
                <Text textStyle="lg">{genre.name}</Text>
            </HStack>
        </List.Item>
    );
}
export default MenuItem;