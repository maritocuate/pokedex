import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'

import ListItems from './components/ListItems'

function App() {
  return (
    <div className="container-fluid">
      <h1 className='display-1 m-4'>Pokedex</h1>
      <ListItems />
    </div>
  );
}

export default App;