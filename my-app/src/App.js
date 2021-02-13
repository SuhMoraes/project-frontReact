import bug from './bug.gif';
import './App.css';
import { lazy, Suspense } from 'react';

const Work = lazy(() => import('./code-splitting/Work'));
const Text = lazy(() => import('./code-splitting/Text'));
const Rodape = lazy(() => import('./code-splitting/Rodape'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Suspense fallback={ <p>Carregando...</p>}>
        <Work />
      </Suspense>

        <br />
      <img src={bug} className="App-logo" alt="logo" />
        
        <Suspense fallback={ <p>Carregando...</p>}>
        <Text />
        </Suspense>


        <Suspense fallback={ <p>Carregando...</p>}>
        <Rodape />
        </Suspense>
        

      </header>
    </div>
  );
}

export default App;
