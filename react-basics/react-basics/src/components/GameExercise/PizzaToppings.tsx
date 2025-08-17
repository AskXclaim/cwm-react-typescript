import {type ChangeEvent, useState} from "react";

const PizzaToppings = () => {
    const [newToppings, setNewToppings] = useState("");
    const [pizza, setPizza] = useState({
        name: "Spicy Pepperoni",
        toppings: ["Mushroom"]
    });
    const handleToppings = (e: ChangeEvent<HTMLInputElement>) => {
        setNewToppings(e.target.value);
    }
    const handleAddToppings = () => {
        if (newToppings?.trim().length > 0 && !pizza.toppings.includes(newToppings.trim())) {
            setPizza({...pizza, toppings: [...pizza.toppings, newToppings.trim()]});
        }
    }
    return (
        <div className="container-fluid border border-info p-2">
            <div className="row m-1">
                <div className="col-2">
                    <input type="text" className="form-control"
                           onChange={(e) => handleToppings(e)}/>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary btn-md"
                            onClick={handleAddToppings}>Add pizza toppings
                    </button>
                </div>
            </div>
            <div className="row m-1">
                <div className="col-3">
                    <div>
                        <span>{pizza.name} with: </span>
                        {pizza.toppings.map((topping) => {
                            return (topping.toLowerCase())
                        }).join(',')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PizzaToppings;