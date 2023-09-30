import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom'
import { BsFillCartCheckFill } from 'react-icons/bs';


const Navbar = () => {
  
  const items = useSelector((state) => state);
 
 
  
  return (
    <div className='flex items-center justify-between px-4 py-2 dark:bg-gray-700 bg-gray-200'>
      <span className='logo font-bold text-2xl'>REDUX STORE</span>
      <div className='flex items-center justify-evenly lg:w-1/4 w-1/2 dark:text-white'>
        <Link className='dark:bg-gray-900 bg-gray-300 lg:w-[100px] w-full mx-1 text-center py-2 rounded-md' to="/">Home</Link>
        <Link className='dark:bg-gray-900 bg-gray-300 lg:w-[100px] w-full mx-1 text-center py-2 rounded-md' to="/cart">Cart</Link>
        <span className='dark:bg-gray-900 bg-gray-300 lg:w-[100px] w-full mx-1 flex items-center justify-evenly rounded-md py-2'><BsFillCartCheckFill size='25px'/>{items.length}</span>
      </div>
    </div>
  )
}

export default Navbar