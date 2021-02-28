import { Component, createRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

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
            <div className="w-full py-4 px-2 bg-gray-100 flex flex-col space-y-4">
                <ReactSketchCanvas
                    ref={this.canvas}
                    style={styles}
                    strokeWidth={5}
                    strokeColor="black"
                />
                <div className="flex flex-row justify-between space-x-5">
                <button
                    onClick={this.props.toggleModal}
                    className="py-2 px-4 text-sm rounded font-medium text-red-600 border border-red-600 hover:text-white hover:bg-red-600 focus:outline-none"
                >
                    Hide
                </button>
                <button
                    onClick={handleSendImage}
                    className="py-2 px-4 text-sm rounded font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                    Send
                </button>
                </div>
            </div>
        )
    }
};

export default Canvas;