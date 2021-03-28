import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [roomName, setRoomName] = useState("");
    const [username, setUsername] = useState("");
    
    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div className="hero is-fullheight is-centered">
            <div className="hero-body has-text-centered">
                <div className="container">
                    <form>
                        <div className="m-5">
                            <h2 className="title is-size-2">Sketchat</h2>
                            <p className="subtitle">Sketch your chat</p>
                            <div className="field">
                                <div className="control">
                                    <input
                                        id="nickname" 
                                        name="nickname" 
                                        type="text" 
                                        className="input"
                                        placeholder="Nickname"
                                        value={username}
                                        onChange={handleUsernameChange}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        id="roomId"
                                        name="roomId"
                                        type="text"
                                        value={roomName}
                                        placeholder="Room name"
                                        onChange={handleRoomNameChange}
                                        autoComplete="off"
                                        required
                                        className="input"
                                    />
                                </div>
                            </div>
                            <Link to={`/${roomName.replace(/\s/g, '_')}/${username.replace(/\s/g, '_')}`} >
                                <button
                                    type="submit"
                                    className="button is-info is-fullwidth mt-5 has-text-weight-medium">
                                    Start chatting!
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;

