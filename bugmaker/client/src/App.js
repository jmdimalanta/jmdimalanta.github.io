import './App.css';
import AllBugs from './components/AllBugs';
import NewBug from './components/NewBug';
import OneBug from './components/OneBug';
import EditBug from './components/EditBug';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AllBugs path='/'/>
        <NewBug path='/new'/>
        <OneBug path='/bug/:id'/>
        <EditBug path='/edit/bug/:id'/>
      </Router>
    </div>
  );
}

export default App;
