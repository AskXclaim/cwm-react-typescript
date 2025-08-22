import {FaHeart} from "react-icons/fa";
import {useState} from "react";

const Like = () => {
    const [like, setLike] = useState<boolean>(false);
    return (
        <FaHeart size="30px" cursor="pointer" color={like ? "#eb7474" : "#eee4e4"}
                 onClick={() => setLike(!like)}/>
    )
}
export default Like;