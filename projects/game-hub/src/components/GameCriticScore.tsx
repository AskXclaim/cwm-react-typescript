import {Badge} from "@chakra-ui/react";

type GameCriticScoreProps = {
    criticScore: number
}

const getColorScheme = (score: number) => {
    if (score > 70) return "green";
    if (score > 60 && score <= 70) return "yellow";
    return "";
}
const GameCriticScore = ({criticScore}: GameCriticScoreProps) => {
    return (
        <Badge colorPalette={getColorScheme(criticScore)} fontSize="md"
               paddingX={2} borderRadius={1}>{criticScore}</Badge>
    );
}
export default GameCriticScore;