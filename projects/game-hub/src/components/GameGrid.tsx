import useGames from '../hooks/useGames';
import {SimpleGrid, Text} from "@chakra-ui/react"
import GameCard from "@/components/GameCard.tsx";

const GameGrid = () => {
    const {games, error} = useGames();
    return (
        <div>
            Game Grid
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} columnGap={10} padding="10px" rowGap={5}>
                {games?.map(game => (<GameCard key={game.id} game={game}/>))}
            </SimpleGrid>
        </div>
    );
}
export default GameGrid;