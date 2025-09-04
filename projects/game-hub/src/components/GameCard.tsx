import {Card, Image} from "@chakra-ui/react";
import type {Game} from "@/hooks/useGames.ts";

type GameCardProps = {
    game: Game;
}
const GameCard = ({game}:GameCardProps) => {
    return (
        <Card.Root borderRadius={"10px"} overflow={"hidden"}>
            <Image src={game.background_image} alt={game.name}/>
            <Card.Title fontSize={"2xl"} padding={"2"}>{game.name}</Card.Title>
            <Card.Body></Card.Body>
            <Card.Footer></Card.Footer>
        </Card.Root>
    );
}
export default GameCard;