import React from "react";
import { connect } from 'react-redux';
import { parseMarkdown, toggleEditor } from "../actions/parsemdActions";

// Define state and dispatch mapping
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
    return {
        submitMarkdownParse: (input) => {
            dispatch(parseMarkdown(input));
        },
        submitToggleRequest: () => {
            dispatch(toggleEditor());
        }
    }
}

// Define component
class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value
        });
        this.props.submitMarkdownParse(e.target.value);
    }
    toggleEditor() {
        this.props.submitToggleRequest();
    }
    render() {
        return (
            <div className='editor-window'>
                <div className='window-header'>
                    <p className="m-0"><i className='fa fa-terminal'></i> Editor</p>
                    <button className='btn btn-link'><i className='fa fa-window-maximize'></i></button>
                </div>
                <textarea value={this.state.input} onChange={this.handleChange}></textarea>
            </div>
        )
    }
}

// Connect presentational component to redux store
const Editor = connect(null, mapDispatchToProps)(Presentational);

export default Editor;