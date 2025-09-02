import {Heading, VStack} from "@chakra-ui/react";
import {MenuItem} from "@/components";
import type {Genre} from "@/services/genreService.ts";

type MenuProps = {
    name: string;
    genres: Genre[];
}
const Menu = ({name, genres}: MenuProps) => {
    return (
        <VStack align={"flex-start"}>
            <Heading size="2xl">{name}</Heading>
            {genres.map((genre) => (
                <MenuItem key={genre.id} text={genre.name} src={genre.image_background}
                          srcSet={genre.image_background}/>
            ))}
        </VStack>
    );
}
export default Menu;