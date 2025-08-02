interface ButtonProps {
    color?: "primary" | "success" | "warning" | "danger";
    children: string;
    onClick: () => void;
}

const Button = ({color = "primary", children, onClick}: ButtonProps) => {
    return (
        <button type="button" className={`btn btn-${color} m-2 p-2`}
                onClick={onClick}>
            {children}</button>
    );
}
export default Button;