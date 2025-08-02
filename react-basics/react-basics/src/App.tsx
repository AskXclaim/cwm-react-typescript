import Message from "./components/Message";
import ListGroup from "./components/ListGroup.tsx";
import {Alert, AlertColor} from "./components/Alerts";
import {useState} from "react";
import {Button,ModuledButton} from "./components/Buttons";

function App() {
    const cities = ["London", "Leeds", "New york", "Lagos", "New Delhi"];
    const [alert, setAlert] = useState<null | string>(null);
    const [alertColor, setAlertColor] = useState<null|AlertColor>(null);
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
    const handleSelectItem = (city: string, alertColor: AlertColor) => {
        setAlert(getInformationAboutCity(city));
        setAlertColor(alertColor);
    }

    const handleAlertClose = () => {
        setAlert(null);
        setAlertColor(null);
    }
    return (
        <div className="App">
            <Message/>
            <ListGroup heading="Cities" items={cities}
                       onSelectItem={handleSelectItem}/>
            <Alert color={alertColor} onAlertCloseClick={handleAlertClose}>
                {alert}
            </Alert>
            <Button color="primary" onClick={()=>console.info("Clicked")}>Welcome</Button>
            <ModuledButton>
                I'm a moduled styled button
            </ModuledButton>
        </div>
    )
}

export default App
