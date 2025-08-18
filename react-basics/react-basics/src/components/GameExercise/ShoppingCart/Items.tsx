import {Item} from "./index.ts";

type ItemsProps = {
    items: { id: number, title: string, quantity: number }[];
    onQuantityChange: (value: { itemId: number, sign: string }) => void;
    onTextChange: (value: { itemId: number, quantity: number }) => void;
}
const Items = ({items, onQuantityChange, onTextChange}: ItemsProps) => {
    return (<div className="row">
        <div className="col-12">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col" className="text-center">Quantity</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <Item item={item} key={item.id} onQuantityChange={onQuantityChange}
                          onTextChange={onTextChange}/>
                ))}
                </tbody>
            </table>
        </div>
    </div>);
}
export default Items;