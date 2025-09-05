import {Card, Heading, HStack, Image} from "@chakra-ui/react";
import type {Game} from "@/hooks/useGames.ts";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import getCroppedImageUrl from "@/services/imageUrl.ts";
import GameCriticScore from "@/components/GameCriticScore.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";

type GameCardProps = {
    game: Game,
}
const GameCard = ({game}: GameCardProps) => {
    return (
        <GameCardContainer>
            <Card.Root >
                <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}/>
                <Card.Body padding={1}>
                    <Heading fontSize={"2xl"}>{game.name}</Heading>
                    <HStack justify="space-between">
                        {<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>}
                        {<GameCriticScore criticScore={game.metacritic}/>}
                    </HStack>
                </Card.Body>

                <Card.Footer></Card.Footer>
            </Card.Root>
        </GameCardContainer>
    
    );
}
export default GameCard;