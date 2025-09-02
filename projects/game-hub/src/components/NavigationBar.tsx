import { HStack, Input, InputGroup} from "@chakra-ui/react";
import {LuSearch} from "react-icons/lu";
import {GameHubImage, ThemeToggler} from "./";
import type {ThemeTogglerProps} from "@/components/ThemeToggler.tsx";

type NavigationBarProps =ThemeTogglerProps &  {
    themeClassStyle:string,
}

const NavigationBar = ({text,isChecked,onCheckedChange, themeClassStyle}:NavigationBarProps) => {
    return (
            <HStack justifyContent="space-between" padding="10px">
                <GameHubImage alternativeText={"logo"} src={"./src/assets/game-hub-logo.png"} 
                              srcSet={"./src/assets/game-hub-logo.webp"}/>
                <InputGroup flex="1" startElement={<LuSearch className={themeClassStyle}/>}>
                    <Input placeholder="Search games..." className={themeClassStyle}/>
                </InputGroup>
                <ThemeToggler isChecked={isChecked} 
                              text={text} onCheckedChange={onCheckedChange}/>
            </HStack>
 
    )
}

export default NavigationBar;