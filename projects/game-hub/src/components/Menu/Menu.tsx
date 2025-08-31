import {Heading, VStack} from "@chakra-ui/react";
import {MenuItem} from "@/components";
import type {ValueText} from "@/Types-Interfaces/ValueText.ts";

type MenuProps = {
    name: string;
    genres: ValueText[];
}
const Menu = ({name, genres}: MenuProps) => {
    return (
        <VStack width={"18%"} align={"flex-start"} paddingLeft={1} >
            <Heading size="2xl">{name}</Heading>
            {genres.map((genre) => (
                <MenuItem key={genre.value} text={genre.text}/>
            ))}
        </VStack>
    );
}
export default Menu;