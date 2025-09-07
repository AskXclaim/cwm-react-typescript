import useGames from '../hooks/useGames';
import {SimpleGrid, Text} from "@chakra-ui/react"
import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";

const GameGrid = () => {
    const {data, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}

            {<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5}} columnGap={3} padding="10px" rowGap={5}>
                {isLoading && skeletons.map(skeleton => (<GameCardSkeleton key={skeleton}/>))}
                {data?.map(game => (<GameCard key={game.id} game={game}/>))}
            </SimpleGrid>}
        </>
    );
}
export default GameGrid;