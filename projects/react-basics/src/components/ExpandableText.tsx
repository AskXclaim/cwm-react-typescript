import {useState} from "react";

type ExpandableTextProps = {
    text: string;
    maxChars?: number;
}
const ExpandableText = ({text, maxChars = 10}: ExpandableTextProps) => {
    const getTextToDisplay = () => {
        if (text.length <= maxChars) return text

        return `${text.substring(0, (maxChars <= 0 ? 10 : maxChars))}...`;
    }

    const shouldShowMore = text.length > maxChars;
    const [textToDisplay, setTextToDisplay] = useState(getTextToDisplay());
    const [toggleText, setToggleText] = useState(shouldShowMore);

    const handleToggle = () => {
        if (toggleText) setTextToDisplay(text);
        else setTextToDisplay(getTextToDisplay());

        setToggleText(!toggleText);
    }
    const shouldShowButton = () => {
        return text?.length > 0 && text?.length > maxChars;
    }
    return (
        <div className="row m-1">
            <div className="col-12 p-1">
                {textToDisplay}
                {
                    shouldShowButton() && <button className="btn btn-sm btn-outline-dark" onClick={handleToggle}>
                        {toggleText ? "More" : "less"}</button>
                }

            </div>
        </div>
    )

}
export default ExpandableText