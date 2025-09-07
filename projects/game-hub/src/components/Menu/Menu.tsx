import {List, Spinner} from "@chakra-ui/react";
import {MenuItem} from "@/components";
import useGenres from "@/hooks/useGenres.ts";


const Menu = () => {
    const {data,isLoading, error} = useGenres();
    if (error) return null;
    return (
        <>
            {isLoading && <Spinner/>}
            <List.Root variant="plain">
                {data?.map((genre) => (
                    <MenuItem key={genre.id} genre={genre}/>
                ))}
            </List.Root>
        </>
    );
}
export default Menu;