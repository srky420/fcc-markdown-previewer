import React from "react";
import { connect } from 'react-redux';
import { parseMarkdown } from "../actions/parsemdActions";

// Define state and dispatch mapping
const mapDispatchToProps = (dispatch) => {
    return {
        submitMarkdownParse: (input) => {
            dispatch(parseMarkdown(input));
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
    render() {
        return (
            <div className='window'>
                <div className='window-header'>
                    <p className="m-0"><i className='fa fa-terminal'></i> Editor</p>
                    <button className='btn btn-link'><i className='fa fa-window-maximize'></i></button>
                </div>
                <div className="window-inner editor">
                    <textarea value={this.state.input} onChange={this.handleChange}></textarea>
                </div>
            </div>
        )
    }
}

// Connect presentational component to redux store
const Editor = connect(null, mapDispatchToProps)(Presentational);

export default Editor;