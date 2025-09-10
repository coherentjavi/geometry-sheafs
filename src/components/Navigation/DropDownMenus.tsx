import { NavLink } from 'react-router';
import type { DropMenuItem } from './types';

//paths for dropdownmenus
const geometry = '/geometry-sheafs/geometry';
const cohomology = '/geometry-sheafs/cohomology';
//const algebraicGeometry = '/geometry-sheafs/algebraicGeometry'; commenting out for now
const mathPhysics = '/geometry-sheafs/mathematicalPhysics';
const algebraicNT = '/geometry-sheafs/algebraicNumberTheory';





//dropdown menu data (links and paths)
const geometryData: DropMenuItem[] = [
  {link: `${geometry}/sheafs`, page: 'Sheaf Theory'},
  {link: `${geometry}/manifolds`, page: 'Manifolds'},
  {link: `${geometry}/schemes`, page: 'Schemes'}
 
];



const antData: DropMenuItem[] = [
{link: `${algebraicNT}/padicHodgeTheory`, page: 'P-adic Hodge Theory'},
{link: `${algebraicNT}/classFieldTheory`, page: 'Class Field Theory'},
];


const physicsMenuData: DropMenuItem[] = [
  {link: `${mathPhysics}/relativity`, page: 'Relativity' },
  {link: `${mathPhysics}/qft`, page: 'QFT' },
  {link: `${mathPhysics}/stringTheory`, page:'Calabi-Yau Manifolds & String Theory'} 
];


const cohomologyMenuData: DropMenuItem[] = [
  {link: `${cohomology}/derham`, page:'de Rham'},
  {link: `${cohomology}/cech`, page: 'Čech'},
  {link: `${cohomology}/dolbeult`, page: 'Dolbeult'}, 
  {link: `${cohomology}/etale`, page: 'Étale'}

];





//definittions for dropdown menu and dropdown item components

function DropDownItem({menuItem}: {menuItem: DropMenuItem}){
    return(
        <div className='hover:bg-dropbg hover:text-white transition-colors duration-200 cursor-pointer'>
            <NavLink to = {menuItem.link}> {menuItem.page} </NavLink>
        </div>
    );
}


function DropDownMenu({menuData}:{menuData:DropMenuItem[]}){
  

    return(
      <div className='flex flex-col absolute w-full m-1/2'>
        <ul className='flex flex-col gap-3 text-black bg-secondary'>
          {menuData.map((item)=>(
            <DropDownItem menuItem={item} />))}
        </ul>
      </div>
    );



}

export function GeoDropDown(){
  return(
    <DropDownMenu menuData={geometryData}/>
  );
}


export function AntDropDown(){
  return (
    <DropDownMenu menuData={antData}/>
  );
}

export function CohomologyDropDown() {
  return (
    <DropDownMenu menuData={cohomologyMenuData}/>
  );
}

export function PhysicsDropDown(){
    return(
      <DropDownMenu menuData={physicsMenuData}/>
    );
}
