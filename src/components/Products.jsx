import { useEffect } from "react";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import {add} from '../features/cartSlice'
import { fetchProducts } from "../features/productSlice";
import { STATUSES } from "../features/productSlice";

const Products = () => {
  const dispatch = useDispatch()

  const {data:products,status} = useSelector(state=> state.product)
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {

    dispatch(add(product));
    

};


if(status === STATUSES.LOADING){
  return <Loader />
}
if(status === STATUSES.ERROR){
  return <h2>Something went wrong!</h2>
}


  return  (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 w-full">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full h-[400px] flex flex-col items-center justify-evenly border text-black py-4 px-2 overflow-hidden rounded-lg shadow-md bg-white shadow-gray-300 dark:shadow-gray-100"
        >
          <img
            src={product.image}
            className="w-[180px] h-[180px] object-contain object-center"
          />
          <p className="font-semibold my-4 mx-6 text-center">
            {product.title.slice(0, 54)}
          </p>
          <p className="font-bold">${product.price}</p>
          <button onClick={() => handleAdd(product)} className="w-1/2 my-4 border-none py-2 font-semibold bg-yellow-500 dark:bg-black hover:scale-105 dark:text-white transition ease-in-out rounded-full">Add to cart</button>
        </div>
      ))}
    </div>
  ) 
};

export default Products;
