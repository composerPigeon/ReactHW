import './App.css';
import {useState} from 'react';
import {NavBar} from './MyComponents.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import PageOne from './pages/One.js';
import PageTwo from './pages/Two';
import PageThree from './pages/Three';

function App() {

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar page={page} setPage={setPage}/>
      <PageOne page={page}/>
      <PageTwo count={count} setCount={setCount} page={page}/>
      <PageThree count={count} setCount={setCount} page={page}/>      
    </div>
  );
}

export default App;
