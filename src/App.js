import './App.css';
import Main from './components/Main';
import { ContextProvider } from './context/Context';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Main />
      </div>
    </ContextProvider> 
  );
}

export default App;
