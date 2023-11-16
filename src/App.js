import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Editor />
      <Previewer />
    </Provider>
  );
}

export default App;
