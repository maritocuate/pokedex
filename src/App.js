import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'

import { PopupProvider } from './context/PopupContext';

import ListItems from './components/ListItems'
import Popup from './components/Popup';

function App() {
  return (
    <div className="container-fluid">
      <h1 className='display-1 m-4'>Pokedex</h1>

      <PopupProvider>
        <ListItems />
        <Popup />
      </PopupProvider>
    </div>
  );
}

export default App;