import {Button, HStack, Link, List, Text} from "@chakra-ui/react";
import {GameHubImage} from "@/components";
import type {Genre} from "@/hooks/useGenres.ts";

export type MenuItemProps = {
    genre: Genre;
}

const MenuItem = ({genre}: MenuItemProps) => {
    return (
        <List.Item paddingY="5px">
            <Button asChild textStyle="lg" variant="plain"
                    whiteSpace="normal" textAlign="left">
                <Link href="#" padding={2}>
                    <HStack>
                        <GameHubImage alternativeText={genre.name}
                                      srcSet={genre.image_background}
                                      src={genre.image_background}/>
                        <Text>{genre.name}</Text>
                    </HStack>
                </Link>


            </Button>

        </List.Item>
    );
}
export default MenuItem;