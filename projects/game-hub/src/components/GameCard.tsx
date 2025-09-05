import {Card, Heading, Image} from "@chakra-ui/react";
import type {Game} from "@/hooks/useGames.ts";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import getCroppedImageUrl from "@/services/imageUrl.ts";

type GameCardProps = {
    game: Game,
}
const GameCard = ({game}: GameCardProps) => {
    return (
        <Card.Root borderRadius={"10px"} overflow={"hidden"}>
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}/>
            <Card.Body padding={1}>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                {<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>}
            </Card.Body>

            <Card.Footer></Card.Footer>
        </Card.Root>
    );
}
export default GameCard;