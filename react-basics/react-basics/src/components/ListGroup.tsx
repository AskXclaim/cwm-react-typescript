import {useState} from "react";

interface ListGroupProps {
    heading: string;
    items: string[];
}

const ListGroup = ({heading, items}: ListGroupProps) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const handleClick = (city: string, index: number) => {
        console.log(city);
        setSelectedIndex(index);
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