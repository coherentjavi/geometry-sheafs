import { NavLink } from 'react-router';
import type { DropMenuItem } from './types';



const physicsMenuData: DropMenuItem[] = [
  {link:'/geometry-sheafs/relativity', page: 'Relativity' },
  {link:'/geometry-sheafs/qft', page: 'QFT' },
  {link:'/geometry-sheafs/stringtheory', page:'Calabi-Yau Manifolds & String Theory'} 
];


const cohomologyMenuData: DropMenuItem[] = [
  {link: '/geometry-sheafs/cech', page: 'Čech'},
  {link: '/geometry-sheafs/dolbeult', page: 'Dolbeult'}, 
  {link: '/geometry-sheafs/dolbeult', page: 'Étale'}

];


function DropDownItem({menuItem}: {menuItem: DropMenuItem}){
    return(
        <div className='hover:bg-dropbg hover:text-white transition-colors duration-200'>
            <NavLink to = {menuItem.link}> {menuItem.page} </NavLink>
        </div>
    );
}


function DropDownMenu({menuData}:{menuData:DropMenuItem[]}){
    /*const dropMenu = menuItems.map((item)=>{
        <DropDownItem menuItem={item} />

    });*/

    return(
      <div className='flex flex-col absolute w-full m-1/2'>
        <ul className='flex flex-col gap-3 text-black bg-secondary rounded-xl'>
          {menuData.map((item)=>(
            <DropDownItem menuItem={item} />))}
        </ul>
      </div>
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
