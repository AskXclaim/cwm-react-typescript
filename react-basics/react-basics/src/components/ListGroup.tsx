import {useState} from "react";
import {AlertColor} from "./Alerts";

interface ListGroupProps {
    heading: string;
    items: string[];
    onSelectItem: (item: string, alertColor: AlertColor) => void;
}

const ListGroup = ({heading, items, onSelectItem}: ListGroupProps) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const getAlertColor = (index: number) => {
        switch (index) {
            case 0:
            case 1:
                return AlertColor.info
            case 2:
            case 3:
                return AlertColor.success
            case 4:
                return AlertColor.warning
            default:
                return AlertColor.danger
        }
    }
    const handleClick = (city: string, index: number) => {
        console.log(city);
        setSelectedIndex(index);
        onSelectItem(city, getAlertColor(index));
    }
    const setActive =
        (selectedIndex: number, index: number): "active" | "" =>
            selectedIndex === index ? "active" : "";

    return (<>
        <h2>{heading}</h2>
        {items.length === 0 && <p> There are no cities available!</p>}
        <ul className="list-group">
            {items.map((city, index) => {
                return <li role="button" className=
                    {`list-group-item ${setActive(selectedIndex, index)}`} key={city}
                           onClick={() => handleClick(city, index)}
                           onKeyDown={() => handleClick(city, index)}>
                    {city}
                </li>
            })}
        </ul>
    </>)
}
export default ListGroup;