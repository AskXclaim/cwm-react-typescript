import {useState} from "react";

const Game = () => {
    const gameState = {
        id: 1,
        player: {
            name: "John"
        }
    };
    const [game, setGame] = useState(gameState);
    const [playerName, setPlayerName] = useState("");
    const handleClick = () => {
        setGame({
            ...game,
            player: {
                ...game.player,
                name: playerName?.length > 0 ? playerName : game.player.name
            }
        });
    }
    return (
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-2 pe-0">
                    <input className="form-control" type="text" name="newPlayerName" value={playerName}
                           onChange={(e) => setPlayerName(e.target.value)}/>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" onClick={handleClick}>Change name
                    </button>
                </div>
            </div>

            <div className="row m-1">
                <div className="col-2">
                    {game.player.name}
                </div>
            </div>
        </div>
    );
}

export default Game;