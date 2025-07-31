interface ButtonProps {
    type: string;
    text: string;
}

const Button = ({type, text}: ButtonProps) => {
    return (
        <button type="button" className={`btn btn-${type} m-2 p-2`}>{text}</button>
    );
}
export default Button;