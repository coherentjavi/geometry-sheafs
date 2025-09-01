import { IoMdMoon } from 'react-icons/io';
import { MdSunny } from 'react-icons/md';

function Toggle() {
  return (
    <div className=' '>
      <div className='bg-gray-100 p-2 rounded-2xl'>
        <button className='rounded-2xl hover:bg-gray-300 p-2'>
          <IoMdMoon />
        </button>
        <button className='rounded-2xl hover:bg-gray-300 p-2'>
          <MdSunny />
        </button>
      </div>
    </div>
  );
}

export default Toggle;
