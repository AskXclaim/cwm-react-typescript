import {IoAddCircleOutline} from "react-icons/io5";
import {IoMdRemoveCircleOutline} from "react-icons/io";
import {useEffect, useState} from "react";

type ItemProps = {
    item: {
        id: number;
        title: string;
        quantity: number;
    };
    onQuantityChange: (value: { itemId: number, sign: string }) => void;
    onTextChange: (value: { itemId: number, quantity: number }) => void;
}
const Item = ({item, onQuantityChange, onTextChange}: ItemProps) => {

    const [quantity, setQuantity] = useState(item.quantity);
    const handleTextChange = (quantity: string) => {
        console.log(quantity);
        onTextChange({itemId: item.id, quantity: parseInt(quantity)});
    }

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item.quantity]);

    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td className="text-center">
                <IoMdRemoveCircleOutline className="cursor-pointer"
                                         onClick={() => onQuantityChange({itemId: item.id, sign: "-"})}/>
                <input type="number" className="form-control-sm text-center ms-1 me-1" value={quantity}
                       onChange={(e) => setQuantity(parseInt(e.target.value))}
                       onBlur={(e) => handleTextChange(e.target.value)}/>
                <IoAddCircleOutline className="cursor-pointer"
                                    onClick={() => onQuantityChange({itemId: item.id, sign: "+"})}/>
            </td>
        </tr>
    );
}
export default Item;