import {useEffect, useState} from "react";
import {Text} from "@chakra-ui/react"
import gameService from "@/services/gameService.ts";

const GameGrid = () => {

    type Game = {
        id: number,
        name: string,
    }
    type GamesResponse = {
        count: number,
        results: Game[]
    }

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const {request, cancel} = gameService.getAll<GamesResponse>()
        request
            .then((response) => {
                setGames(response.data.results);
            })
            .catch((error) => {
                setError(error.message);
            });

        return () => cancel()
    }, [])

    return (
        <div>
            Game Grid
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => (<li key={game.id}>{game.name}</li>))}
            </ul>
        </div>
    );
}
export default GameGrid;