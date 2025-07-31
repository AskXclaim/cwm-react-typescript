import Message from "./components/Message";
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import {useState} from "react";
import Button from "./components/Button.tsx";

function App() {
    const cities = ["London", "Leeds", "New york", "Lagos", "New Delhi"];
    const [alert, setAlert] = useState<null | string>(null);
    const [type, setType] = useState<string>("");
    const getInformationAboutCity = (city: string): string => {
        switch (city?.trim().toLowerCase()) {
            case "london":
                return "London is the capital city in United Kingdom. To be specific the capital of England.";
            case "leeds":
                return "Leeds is a major city in the northern region of England."
            case "lagos":
                return "Lagos is a major city in the Nigeria. It used to be the capital."
            case "new york":
                return "New York is a major city in the United State of America."
            case "new delhi":
                return "New Delhi is the capital city of India."
            default:
                console.log(`Selected city - ${city} not found`);
                return "Sorry could not find the selected city "
        }
    }
    const handleSelectItem = (city: string, type: string) => {
        setAlert(getInformationAboutCity(city));
        setType(type);
    }

    return (
        <div className="App">
            <Message/>
            <ListGroup heading="Cities" items={cities}
                       onSelectItem={handleSelectItem}/>
            <Alert type={type}>
                {alert}
            </Alert>
            <Button type="primary" text="Welcome" />
        </div>
    )
}

export default App
