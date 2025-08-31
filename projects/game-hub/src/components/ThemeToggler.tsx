import {Switch} from "@chakra-ui/react";

export type ThemeTogglerProps = {
    text: string;
    isChecked: boolean;
    onCheckedChange: (checked: boolean) => void;
}
const ThemeToggler = ({text, isChecked, onCheckedChange}: ThemeTogglerProps) => {
    return (
        <div>
            <Switch.Root size="lg" checked={isChecked} colorPalette="green"
                         onCheckedChange={(e) => onCheckedChange(e.checked)}>
                <Switch.HiddenInput/>
                <Switch.Control/>
                <Switch.Label>{text}</Switch.Label>
            </Switch.Root>
        </div>
    );
}

export default ThemeToggler;