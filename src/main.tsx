import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.tsx';
import Cech from './routes/cohomology/cech.tsx';
import Dolbeult from './routes/cohomology/dolbeult.tsx';
import Etale from './routes/cohomology/etale.tsx';
import Relativity from './routes/physics/relativity.tsx';
import Qft from './routes/physics/qft.tsx';
import StringTheory from './routes/physics/stringtheory.tsx';
import Layout from './components/Layout.tsx';
import Error404 from './components/Error404.tsx';
import DeRham from './routes/cohomology/deRham.tsx';
import SheafTheory from './routes/geometry/sheafs.tsx';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Error: Failed to find the DOM root element.');
}

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='geometry-sheafs' element={<App />}/>

          <Route path='geometry-sheafs/geometry'>
            <Route path='sheafs' element={<SheafTheory/>}/>
          </Route>

          <Route path='geometry-sheafs/cohomology'>
            <Route path='deRham' element={<DeRham/>}/>
            <Route path='cech' element={<Cech />} />
            <Route path='dolbeult' element={<Dolbeult/>} />
            <Route path='etale' element={<Etale/>} />
          </Route>

          <Route path='mathematicalPhysics'>
            <Route path='relativity' element={<Relativity/>}/>
            <Route path='qft' element={<Qft/>}/>
            <Route path='stringtheory' element={<StringTheory/>}/>
          </Route>

           <Route path='*' element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

