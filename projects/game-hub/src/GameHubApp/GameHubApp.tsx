import "./GameHubApp.css";
import {Container, Flex} from "@chakra-ui/react";
import {MainSection, Menu, NavigationBar} from "@/components";
import {useState} from "react";
import {DarkTheme, LightTheme, type Theme} from "@/GameHubApp/index.ts";
import type {ValueText} from "@/Types-Interfaces/ValueText.ts";

const genres = [{value:"Action", text:"Action"}, {value:"Indie", text:"Indie"},
    {value:"Adventure", text:"Adventure"},{value: "RPG",text:"RPG"},{value: "Strategy",text:"Strategy"}];
const platForms:ValueText[] = [{value: "Xbox", text: "Xbox"},
    {value: "Nintendo", text: "Nintendo"}, {value: "Play Station", text: "Play Station"}];
const orderByText = "Order by ";
const orderBys:ValueText[] = [{value: "Relevance", text: `${orderByText} Relevance`},
    {value: "Genre", text: `${orderByText} Genre`}, {value: "Release Date", text: `${orderByText} Release Date`}];

const GameHubApp = () => {
    const themes: Theme[] = [DarkTheme, LightTheme];
    const [theme, setTheme] = useState<Theme>(themes[1]);

    const handleThemeChange = (isChecked: boolean) => {
        if (isChecked) setTheme(themes[0]);

        if (!isChecked) setTheme(themes[1]);
    }

    const themeTogglerValues = {
        isChecked: theme.name === "Dark Theme",
        themeText: theme.name,
    };

    return (
        <Container fluid padding={0} height="100%"
                   backgroundColor={theme.backgroundColor} color={theme.fontColor}>
            <NavigationBar text={themeTogglerValues.themeText} isChecked={themeTogglerValues.isChecked}
                           onCheckedChange={handleThemeChange} themeClassStyle={theme.themeStyleClass}/>

            <Flex direction={"row"}>
                <Menu name="Genres" genres={genres}/>

                <MainSection platformOptions={platForms} orderByOptions={orderBys}/>
            </Flex>

        </Container>
    );
}

export default GameHubApp;
