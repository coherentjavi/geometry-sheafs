import { NavLink } from 'react-router';
import { useState } from 'react';
import { GoTriangleDown } from "react-icons/go";
//import { GoTriangleRight } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { CohomologyDropDown, PhysicsDropDown, AntDropDown, GeoDropDown} from './DropDownMenus';





function NavBar() {


  const [openGeo, setOpenGeo] = useState(false);
  const [openCohomology, setOpenCohomology] = useState(false);
  const [openPhysics, setOpenPhysics ] = useState(false);
  const [openANT, setOpenANT] = useState(false);
  /**/

  return (

    <div className='w-full flex justify-evenly items-center text-white bg-gray-800 mb-20'>
      <nav>
        <ul className='hidden xl:flex 2xl:flex lg:flex items-center gap-10'>

          <li className='p-5 hover:bg-dropbg hover:text-white cursor-pointer rounded-2xl'>
            <NavLink to='/geometry-sheafs/'>Home</NavLink>
          </li>

          <div className='relative hover:bg-gray-700 hover:rounded-2xl'  onMouseLeave={()=> setOpenGeo(false)}>
             <li className='flex gap-0.5 p-5' onMouseEnter={()=> setOpenGeo(true)}>
                Geometry & Sheaf Theory
                <GoTriangleDown/>
            </li>
            {openGeo ? <GeoDropDown /> : <></>}
          </div>

          <div className='relative hover:bg-gray-700 hover:rounded-2xl'  onMouseLeave={()=> setOpenANT(false)}>
            <li className='flex gap-0.5 p-5' onMouseEnter={()=> setOpenANT(true)}>
                Algebraic Number Theory
                <GoTriangleDown/>
            </li>
          {openANT ? <AntDropDown /> : <></>}
          </div>

          <div className='relative hover:bg-gray-700 hover:rounded-2xl' onMouseLeave={()=> setOpenCohomology(false)}>
            <li className='flex gap-0.5 p-5' onMouseEnter={()=> setOpenCohomology(true)}>
                Cohomology <GoTriangleDown/>
            </li>
          {openCohomology ? <CohomologyDropDown /> : <></>}
          </div>

          <div className='relative hover:bg-gray-700 hover:rounded-2xl'  onMouseLeave={()=> setOpenPhysics(false)}>
            <li className='flex gap-0.5 p-5' onMouseEnter={()=> setOpenPhysics(true)}>
                Mathematical Physics <GoTriangleDown/>
            </li>
          {openPhysics ? <PhysicsDropDown /> : <></>}
          </div>
        </ul>
        <a className='hidden'>< GiHamburgerMenu /></a>
      </nav>
    </div>
  );
}

export default NavBar;
