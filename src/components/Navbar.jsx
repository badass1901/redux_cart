import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  BsFillCartCheckFill,
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import { darkMode, lightMode } from "../features/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart);
  const currentTheme =  useSelector((state) => state.theme.text);
  const handleTheme = () => {
    if(currentTheme == 'light'){
      dispatch(darkMode("dark"))
    } else{
      dispatch(lightMode("light"))
    }
    
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 dark:bg-gray-700 dark:text-white bg-gray-200">
      <span className="logo font-bold text-2xl">REDUX STORE</span>
      <div className="flex items-center justify-evenly lg:w-1/4 w-1/2 dark:text-white">
        <Link
          className="dark:bg-gray-900 bg-gray-300 lg:w-[100px] w-full mx-1 text-center py-2 rounded-md"
          to="/"
        >
          Home
        </Link>
        <Link
          className="dark:bg-gray-900 bg-gray-300 lg:w-[100px] flex items-center justify-evenly w-full mx-1 text-center py-2 rounded-md"
          to="/cart"
        >
          <BsFillCartCheckFill size="25px" />
          {items.length}
        </Link>
        <button
          onClick={handleTheme}
          className="dark:bg-gray-900 bg-gray-300  flex text-center items-center p-3 rounded-full justify-center"
        >
          {
            (currentTheme !== "light") 
            ? <BsFillSunFill size='1.2em' />
            : <BsFillMoonFill size='1.2em' />
          }
          
          
        </button>
      </div>
    </div>
  );
};

export default Navbar;
