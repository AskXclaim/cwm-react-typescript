import {Card, Skeleton, SkeletonText} from "@chakra-ui/react";
import GameCardContainer from "@/components/GameCardContainer.tsx";

const GameCardSkeleton = () => {
    return (
        <GameCardContainer>
            <Card.Root width="md">
                <Skeleton height={"250px"}/>
                <Card.Body padding={1}>
                    <SkeletonText/>
                </Card.Body>
            </Card.Root>
        </GameCardContainer>
    );
}
export default GameCardSkeleton