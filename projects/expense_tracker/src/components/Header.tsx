type HeaderProps = {
    text: string;
}
const Header = ({text}: HeaderProps) => {
    return (
        <div className="m-4 p-1">
            <h1>{text}</h1>
        </div>
    );
}
export default Header;