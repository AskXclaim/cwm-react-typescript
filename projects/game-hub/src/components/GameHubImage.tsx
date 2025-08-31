import {Avatar} from "@chakra-ui/react";

type GameHubImageProps = {
    alternativeText: string;
    src: string;
    srcSet?: string;
    size?: "sm" | "md" | "lg" | "xl";
}

const GameHubImage =
    ({alternativeText, src, srcSet, size = "md"}: GameHubImageProps) => {
        return (
            <Avatar.Root size={size} shape={"square"}>
                <Avatar.Fallback name={alternativeText}/>
                <Avatar.Image src={src} srcSet={srcSet}/>
            </Avatar.Root>
        );
    }
export default GameHubImage;