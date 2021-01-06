import './App.css';
import { BrowserRouter } from 'react-router-dom';

//Imported Components 
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </div>
  );
}

export default App;
