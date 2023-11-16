import React from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";

// Define state mapping
const mapStateToProps = (state) => state;

// Define component
class Presentational extends React.Component {
    constructor(props) {
        super(props);   
    }
    render() {
        return (
            <div className='window'>
                <div className='window-header'>
                    <p className="m-0"><i className='fa fa-code'></i> Previewer</p>
                    <button className='btn btn-link'><i className='fa fa-window-maximize'></i></button>
                </div>
                <div className='window-inner preview'>
                    { parse(this.props.output) }
                </div>
            </div>
        );
    }
}

// Connect presentational component to redux store
const Previewer = connect(mapStateToProps, null)(Presentational);

export default Previewer;