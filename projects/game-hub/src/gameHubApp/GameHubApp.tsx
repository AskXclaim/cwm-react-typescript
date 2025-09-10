import "./GameHubApp.css";
import {Grid, GridItem, Show, useBreakpointValue} from "@chakra-ui/react";
import {GameGrid, Menu, NavigationBar} from "@/components";
import {useState} from "react";
import {DarkTheme, LightTheme, type Theme} from "@/gameHubApp/index.ts";
import type {Genre} from "@/hooks/useGenres.ts";
import type {Platform} from "@/hooks/useGames.ts";

type GameQuery = {
    genre: Genre | null;
    platform: Platform | null;
}
const GameHubApp = () => {
    const themes: Theme[] = [DarkTheme, LightTheme];
    const [theme, setTheme] = useState<Theme>(themes[1]);
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    const handleThemeChange = (isChecked: boolean) => {
        if (isChecked) setTheme(themes[0]);

        if (!isChecked) setTheme(themes[1]);
    }

    const themeTogglerValues = {
        isChecked: theme.name === "Dark Theme",
        themeText: theme.name,
    };
    const shouldShowAside = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}
            templateColumns={{
                base: "1fr",
                lg: "260px 1fr",
            }}
            backgroundColor={theme.backgroundColor} color={theme.fontColor}>
            <GridItem area="nav">
                <NavigationBar text={themeTogglerValues.themeText} isChecked={themeTogglerValues.isChecked}
                               onCheckedChange={handleThemeChange} themeClassStyle={theme.themeStyleClass}/>
            </GridItem>
            <Show when={shouldShowAside}>
                <GridItem area="aside">
                    <Menu/>
                </GridItem>
            </Show>

            <GridItem area="main" marginY={5}>
                <GameGrid/>
            </GridItem>
        </Grid>
    );
}

export default GameHubApp;
