import { Component, createRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { CirclePicker } from "react-color";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faChevronDown, faUndoAlt, faRedoAlt, faPencilAlt, faEraser, faPalette} from '@fortawesome/free-solid-svg-icons';

const Canvas = class extends Component {
    constructor(props) {
        super(props);
        this.canvas = createRef();
        this.state = {
            strokeWidth: 4,
            strokeColor: "black"
        };
    };

    render() {

        const styles = {
            border: "0.25rem solid #9c9c9c",
            borderRadius: "0.5rem",
        };

        const handleSendImage = () => {
            this.canvas.current
                .exportImage("png")
                .then((data) => {
                    this.props.handleDataURI(data);
                    this.canvas.current.resetCanvas();
                }).catch((err) => {
                    console.log(err);
                });
        };

        const handleUndo = () => {
            this.canvas.current.undo();
        };

        const handleRedo = () => {
            this.canvas.current.redo();
        };

        const handlePencil = () => {
            this.canvas.current.eraseMode(false);
        };
        
        const handleEraser = () => {
            this.canvas.current.eraseMode(true);
        };

        const handleStrokeWidthChange = (event) => {
            this.setState({strokeWidth: event.target.value});
        };
        
        const handleColorChange = (color, event) => {
            this.setState({ strokeColor: color.hex});
        };

        return (
            <div className="px-4 pb-4 has-background-dark is-flex is-flex-direction-column">
                <button
                    onClick={this.props.toggleModal}
                    className="button is-dark"
                >
                    <span className="icon">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </button>
                <ReactSketchCanvas
                    ref={this.canvas}
                    height={window.innerHeight * 0.27}
                    style={styles}
                    strokeWidth={this.state.strokeWidth}
                    strokeColor={this.state.strokeColor}
                />
                <div className="mt-4 field is-grouped">
                    <div className="control">
                        <button
                            onClick={handlePencil}
                            className="button is-info is-light"
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </span>
                        </button>
                    </div>
                    <div className="control">
                        <button
                            onClick={handleEraser}
                            className="button is-info is-light"
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faEraser} />
                            </span>
                        </button>
                    </div>
                    <div className="control">
                        <button
                            onClick={handlePencil}
                            className="button is-info is-light"
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faPalette} />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <input
                            id="sliderWithValue"
                            className="slider is-info is-circle is-medium is-fullwidth" 
                            step="1" 
                            min="1" 
                            max="10" 
                            defaultValue="4" 
                            type="range"
                            onChange={handleStrokeWidthChange}
                        />
                    </div>
                    <div className="control">
                        <p className="has-text-light">{this.state.strokeWidth}</p>
                    </div>
                </div>
                <div className="mt-4 field is-grouped">
                    <div className="control">
                        <button
                            onClick={handleUndo}
                            className="button is-info is-light"
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faUndoAlt} />
                            </span>
                        </button>
                    </div>
                    <div className="control">
                        <button
                            onClick={handleRedo}
                            className="button is-info is-light"
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faRedoAlt} />
                            </span>
                        </button>
                    </div>
                    <div className="control">
                        <button
                            onClick={handleSendImage}
                            className="button is-info"
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </span>
                        </button>
                    </div>
                </div>
                <CirclePicker onChangeComplete={handleColorChange}/>
            </div>
        )
    }
};

export default Canvas;