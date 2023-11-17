import React from "react";
import { connect } from "react-redux";
import { togglePreviewer } from "../actions/parsemdActions";
import parse from "html-react-parser";

// Define state mapping
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
    return {
        submitToggleRequest: () => {
            dispatch(togglePreviewer());
        }
    }
}

// Define component
class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.togglePreviewer = this.togglePreviewer.bind(this);   
    }
    togglePreviewer() {
        this.props.submitToggleRequest();
    }
    render() {
        return (
            <div className='preview-window'>
                <div className='window-header'>
                    <p className="m-0"><i className='fa fa-code'></i> Previewer</p>
                    <button className='btn btn-link'><i className='fa fa-window-maximize'></i></button>
                </div>
                <div className='html-preview'>
                    { parse(this.props.output) }
                </div>
            </div>
        );
    }
}

// Connect presentational component to redux store
const Previewer = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default Previewer;