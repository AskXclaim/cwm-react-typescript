import type {ReactNode} from "react";

interface AlertProps {
    children: ReactNode;
    type: null|string;
}

const Alert = ({children, type}: AlertProps) => {
    if (children===null) {
        return null;
    }
    return (
        <div className={`alert alert-${type}`}>
            {children}
        </div>
    );
}
export default Alert;