import {type ReactNode} from "react";
import type {AlertColor} from "../Alerts";

interface AlertProps {
    children: ReactNode;
    color: null | AlertColor;
    onAlertCloseClick: () => void;
}
const Alert = ({children, color, onAlertCloseClick}: AlertProps) => {
    if (children === null ) {
        return null;
    }
    return (
        <div className={`m-1 alert alert-${color} alert-dismissible fade show`} role="alert">
            {children}
            <button type="button" className="btn-close" aria-label="Close"
            onClick={onAlertCloseClick}></button>
        </div>
    );
}
export default Alert;