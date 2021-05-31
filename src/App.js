import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'

import { PopupProvider } from './context/PopupContext';
import { FormattedMessage } from 'react-intl';

import LangMenu from './components/LangMenu';
import ListItems from './components/ListItems'
import Popup from './components/Popup';

function App() {

  return (
    <div className="container-fluid">
      <h1 className='display-1 my-4'>
        <FormattedMessage id='app.title' defaultMessage='Pokedex'/>
      </h1>
      <LangMenu />

      <PopupProvider>
        <ListItems />
        <Popup />
      </PopupProvider>
    </div>
  );
}

export default App;