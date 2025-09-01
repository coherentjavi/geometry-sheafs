import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar.tsx';
import Toggle from './components/Toggle.tsx';
import './index.css';
import App from './App.tsx';
import Cech from './routes/cohomology/cech.tsx';
import Dolbeult from './routes/cohomology/dolbeult.tsx';
import Footer from './components/Footer.tsx';

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
          <Route path='/geometry-sheafs/Cech' element={<Cech />} />
          <Route path='/geometry-sheafs/Dolbeult' element={<Dolbeult />} />
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
        <div className='flex items-end'>
          <Toggle />
        </div>
      </div>
      <main>
        <Outlet />
      </main>
      <div className='items-end'>
        <Footer />
      </div>
    </div>
  );
}
