import {NativeSelect} from "@chakra-ui/react";
import type {ValueText} from "@/types-interfaces/ValueText.ts";

export type GameHubSelectProps = {
    options: ValueText[]
}
const GameHubSelect = ({options}: GameHubSelectProps) => {
    return (
        <NativeSelect.Root size="sm" width="20%" minWidth={"200px"} mt={2} mr={4}>
            <NativeSelect.Field placeholder="Select option">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.text}</option>
                ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator/>
        </NativeSelect.Root>
    );
}
export default GameHubSelect;