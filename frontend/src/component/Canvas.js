import { Component, createRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Canvas = class extends Component {
    constructor(props) {
        super(props);
        this.canvas = createRef();
    };
    render() {
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
        const styles = {
            border: "0.25rem solid #9c9c9c",
            borderRadius: "0.5rem",
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
                    style={styles}
                    strokeWidth={5}
                    strokeColor="black"
                />
                <div className="mt-4 is-flex is-justify-content-center">
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
        )
    }
};

export default Canvas;