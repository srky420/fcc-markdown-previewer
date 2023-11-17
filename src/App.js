import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';
import { marked } from 'marked';
import parse from 'html-react-parser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      html: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      html: marked(e.target.value).replace('/\n/g', '<br />')
    });
    console.log(this.state.html);
  }
  render() {
    return (
      <div className='App'>
        <div className='editor-window'>
          <div className='window-header'>
              <p><i className='fa fa-terminal'></i> Editor</p>
              <button className='btn'><i className='fa fa-window-maximize'></i></button>
          </div>
          <textarea id='editor' value={this.state.input} onChange={this.handleChange}></textarea>
        </div>
        <div className='preview-window'>
          <div className='window-header'>
              <p><i className='fa fa-code'></i> Previewer</p>
              <button className='btn'><i className='fa fa-window-maximize'></i></button>
          </div>
          <div className='preview-inner' id='preview'>
              { parse(this.state.html) }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
