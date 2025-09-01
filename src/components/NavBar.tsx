import { NavLink } from 'react-router';
import { useState } from 'react';

function DropDownMenu() {
  return (
    <div className='flex flex-col dropDown'>
      <ul className='flex flex-col gap-2 text-black bg-amber-100'>
        <NavLink to='#'>Čech </NavLink>
        <NavLink to='#'>Dolbeult</NavLink>
        <NavLink to='#'>Étale</NavLink>
      </ul>
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleDropMenu = () => {
    setOpen(!open);
  };

  return (
    <div className=' flex justify-evenly items-center text-white bg-gray-800 marging'>
      <nav>
        <ul className='flex'>
          <li className='p-5'>
            <NavLink to='/geometry-sheafs/'>Home</NavLink>
          </li>

          <li className='p-5' onMouseEnter={handleDropMenu}>
            <NavLink to='/geometry-sheafs/Cech'>Cohomology</NavLink>
          </li>
          {open ? <DropDownMenu /> : <></>}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
