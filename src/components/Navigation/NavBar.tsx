import { NavLink } from 'react-router';
import { useState } from 'react';
import { CohomologyDropDown, PhysicsDropDown } from './DropDownMenus';





function NavBar() {
  const [openSubMenu1, setOpen1] = useState(false);
  const [openSubMenu2, setOpen2] = useState(false);

  return (
    <div className='flex justify-evenly items-center text-white bg-gray-800 marging'>
      <nav>
        <ul className='flex space-x-2.5'>
          <li className='p-5 hover:bg-dropbg hover:text-black'>
            <NavLink to='/geometry-sheafs/'>Home</NavLink>
          </li>
          <div className='relative' onMouseLeave={()=> setOpen1(false)}>
            <li className='p-5' onMouseEnter={()=> setOpen1(true)}>
              <NavLink to='/geometry-sheafs/Cech'>Cohomology</NavLink>
            </li>
          {openSubMenu1 ? <CohomologyDropDown /> : <></>}
          </div>
          <div className='relative'  onMouseLeave={()=> setOpen2(false)}>
            <li className='p-5' onMouseEnter={()=> setOpen2(true)}>
              <NavLink to='/geometry-sheafs/physics'>Mathematical Physics</NavLink>
            </li>
          {openSubMenu2 ? <PhysicsDropDown /> : <></>}
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
