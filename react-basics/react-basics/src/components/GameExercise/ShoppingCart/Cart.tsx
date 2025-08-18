import {Items} from "./index.ts";
import {useEffect, useState} from "react";

const Cart = () => {
    const getTotalQuantity = () => {
        return cart.items
            .reduce((acc, {quantity}) =>
                acc + quantity, 0);
    }

    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {id: 1, title: "Product 1", quantity: 1},
            {id: 2, title: "Product 2", quantity: 1}
        ]
    });
    const [totalQuantity, setTotalQuantity] = useState(getTotalQuantity());

    const handleQuantityChange = (value: { itemId: number, sign: string }): void => {
        const item = cart.items.find((i) => i.id === value.itemId);

        if (!item) return;

        if (value.sign === "+") item.quantity += 1

        if (value.sign === "-") item.quantity -= 1

        const index = cart.items.findIndex(i => i.id === value.itemId);

        let newItems = [...cart.items];
        if (item.quantity === 0) newItems = newItems.filter(i => i.id !== item.id);

        if (item.quantity > 0) newItems.splice(index, 1, item);

        setCart({...cart, items: [...newItems]});
    }

    const handleTextChange = (value: { itemId: number, quantity: number }): void => {
        const item = cart.items.find((i) => i.id === value.itemId);
        if (!item) return;
        const newItems = [...cart.items];

        const index = newItems.indexOf(item);
        if (value.quantity <= 0)
            newItems.splice(index, 1);

        if (value.quantity > 0) {
            item.quantity = value.quantity;
            newItems.splice(index, 1, item);
        }

        setCart({...cart, items: [...newItems]});
    }

    useEffect(() => {
        setTotalQuantity(getTotalQuantity());
    }, [cart]);

    return (
        <div className="container-fluid border border-primary-subtle">
            <div className="row text-start py-1"><h1>Shopping Cart Demo</h1></div>
            <div className="row text-end"><span className="text-end">
               <span className="badge bg-secondary">{totalQuantity}</span>
            </span></div>
            <Items items={cart.items} onQuantityChange={handleQuantityChange}
                   onTextChange={handleTextChange}/>
        </div>);
}

export default Cart;