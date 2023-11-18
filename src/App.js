import './App.css';
import React from 'react';
import { Marked } from 'marked';
import { initalInput } from './initialInput';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

// Define marked object with highlight js
const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = 'javascript';
      return hljs.highlight(code, { language }).value;
    }
  })
)

// Set breaks to true
marked.setOptions({
  breaks: true
})

// Define app component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initalInput,
      html: '',
      active: 'BOTH'
    }
    this.handleChange = this.handleChange.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  componentDidMount() {
    this.setState(state => ({
      ...state,
      html: marked.parse(state.input)
    }));
  }

  handleChange(e) {
    this.setState(state => ({
      ...state,
      input: e.target.value,
      html: marked.parse(e.target.value)
    }));
  }

  toggleView(view) {
    this.setState((state) => ({
      ...state,
      active: view
    }));
  }

  render() {
    // Define styles
    const styles = {
      maximize: {
        minHeight: '90vh',
      },
      minimize: {
        display: 'none'
      }
    };
    return (
      <div className='App'>
        <Editor handleChange={this.handleChange} input={this.state.input} active={this.state.active} toggleView={this.toggleView} style={styles} />
        <Previewer html={this.state.html} active={this.state.active} toggleView={this.toggleView} style={styles} />
      </div>
    );
  }
}

export default App;
