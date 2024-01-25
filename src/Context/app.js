import logo from './images/icon-html.svg';
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      {/* add provider */}
      <ThemeProvider>
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
      </ThemeProvider>
    </div>
  );
}

export default App;
