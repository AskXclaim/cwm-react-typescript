import {Avatar} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/imageUrl.ts";

type GameHubImageProps = {
    alternativeText: string;
    src: string;
    srcSet: string;
    size?: "sm" | "md" | "lg" | "xl";
}

const GameHubImage =
    ({alternativeText, src, srcSet, size = "md"}: GameHubImageProps) => {
        return (
            <Avatar.Root size={size} shape={"square"} >
                <Avatar.Fallback name={alternativeText}/>
                <Avatar.Image borderRadius="10px" objectFit="fill" src={getCroppedImageUrl(src)} srcSet={getCroppedImageUrl(srcSet)}/>
            </Avatar.Root>
        );
    }
export default GameHubImage;