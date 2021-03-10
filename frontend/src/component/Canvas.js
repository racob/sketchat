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
            isShowingColor: false,
            strokeWidth: 4,
            strokeColor: "black"
        };
    };

    render() {

        const styles = {
            border: "0.25rem solid #9c9c9c",
            borderRadius: "0.5rem",
        };

        const colors = [
            "#000000", 
            "#e91e63", 
            "#9c27b0", 
            "#673ab7", 
            "#3f51b5", 
            "#2196f3", 
            "#03a9f4", 
            "#00bcd4", 
            "#009688", 
            "#4caf50", 
            "#8bc34a", 
            "#cddc39", 
            "#ffeb3b", 
            "#ffc107", 
            "#ff9800", 
            "#ff5722", 
            "#795548", 
            "#607d8b"
        ];

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

        const toggleColorShow = () => {
            this.setState({ isShowingColor: !this.state.isShowingColor });
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
                            onClick={toggleColorShow}
                            className="button is-info is-light"
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faPalette} />
                            </span>
                        </button>
                    </div>
                </div>
                { !this.state.isShowingColor &&
                <div>
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
                </div>
                }
                {this.state.isShowingColor && <CirclePicker colors={colors} onChangeComplete={handleColorChange}/>}
            </div>
        )
    }
};

export default Canvas;