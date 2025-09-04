import {Heading, VStack, Text} from "@chakra-ui/react";
import {MenuItem} from "@/components";
import useGenres from "@/hooks/useGenres.ts";


const Menu = () => {
    const {genres, error} = useGenres();
    return (
        <VStack align={"flex-start"}>
            {error && <Text>{error}</Text>}
            <Heading size="2xl">Genres</Heading>
            {genres?.map((genre) => (
                <MenuItem key={genre.id} genre={genre}/>
            ))}
        </VStack>
    );
}
export default Menu;