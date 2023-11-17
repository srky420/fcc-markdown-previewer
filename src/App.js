import './App.css';
import React from 'react';
import { marked } from 'marked';
import { initialState } from './initialState';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initialState,
      html: '',
      active: 'BOTH'
    }
    this.handleChange = this.handleChange.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  componentDidMount() {
    this.setState(state => ({
      ...state,
      html: marked(state.input)
    }));
  }

  handleChange(e) {
    console.log(e);
    this.setState({
      input: e.target.value,
      html: marked(e.target.value)
    });
  }

  toggleView(view) {
    this.setState({
      ...this.state,
      active: view
    });
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
    }
    return (
      <div className='App'>
        <Editor handleChange={this.handleChange} input={this.state.input} active={this.state.active} toggleView={this.toggleView} style={styles} />
        <Previewer html={this.state.html} active={this.state.active} toggleView={this.toggleView} style={styles} />
      </div>
    );
  }
}

export default App;
