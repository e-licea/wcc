import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import { rootReducer } from './Components/Reducers'

//Imported Components 
import Render from './Components/Pages/Render';

//Imported CSS
import 'animate.css';
import { keepTheme } from './Components/Utils/Themes';

export const store = createStore( rootReducer, applyMiddleware(logger))


function App(props) {

  //monitors current theme
  useEffect(() => {
    keepTheme();
    
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Provider store = {store}>
          {/* <UnderMaint/>*/}
          <Render/>
        </Provider>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
 