import './App.css';
import {useEffect} from 'react';
import LandingContainer from './containers/LandingContainer';

function App() {
  useEffect(() => {
    document.title = 'Поиск лидов';
  }, []);

  return (
    <div className="App">
        <LandingContainer />
    </div>
  );
}

export default App;
