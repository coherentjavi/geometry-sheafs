import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/Navigation/NavBar.tsx';
import Toggle from './components/Toggle.tsx';
import './index.css';
import App from './App.tsx';
import Cech from './routes/cohomology/cech.tsx';
import Dolbeult from './routes/cohomology/dolbeult.tsx';
import Footer from './components/Footer.tsx';
import Etale from './routes/cohomology/etale.tsx';
import Relativity from './routes/physics/relativity.tsx';
import Qft from './routes/physics/qft.tsx';
import StringTheory from './routes/physics/stringtheory.tsx';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Error: Failed to find the DOM root element.');
}

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/geometry-sheafs/' element={<App />} />
          <Route path='/geometry-sheafs/cech' element={<Cech />} />
          <Route path='/geometry-sheafs/dolbeult' element={<Dolbeult/>} />
          <Route path='/geometry-sheafs/etale' element={<Etale/>} />
          <Route path='/geometry-sheafs/relativity' element={<Relativity/>}/>
          <Route path='/geometry-sheafs/qft' element={<Qft/>}/>
          <Route path='/geometry-sheafs/stringtheory' element={<StringTheory/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

function Layout() {
  return (
    <div className='flex flex-col justify-between'>
      <div className='flex justify-evenly'>
        <NavBar />
        <div className='absolute top-10 right-10'>
          <Toggle />
        </div>
      </div>
      <main>
        <Outlet />
      </main>
      <div className='absolute bottom-5 right-42/100'>
        <Footer />
      </div>
    </div>
  );
}
