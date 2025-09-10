import NavBar from "./Navigation/NavBar";
import { Outlet } from "react-router";
import Toggle from "./Toggle";


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
        <footer className="mt-10" >
          <p>&copy; 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;