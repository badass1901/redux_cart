import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/cartSlice";
import { useEffect } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  const items =useSelector((state) => state.cart);
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(items));
  },[items])
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  // if((localStorage.getItem('cart')) == 0){
  //   items = useSelector((state) => state.cart);
  // } else{
  //   items = (localStorage.getItem('cart'))
  // }

  return (
    <div className="flex flex-col items-center text-center mx-10 my-auto">
      <h3 className="text-3xl my-6 font-semibold">Your Cart</h3>
      <div className="text-black w-full px-2">
        {items == 0 ? (
          <h1 className="text-4xl text-center">Your Cart is Empty</h1>
        ) : (
          items.map((product) => (
            <div
              key={product.id}
              className="w-full h-auto my-4 bg-white rounded-md shadow-md flex items-center justify-evenly py-4 px-2"
            >
              <img
                src={product.image}
                className=" min-w-[100px] w-[100px] h-[100px] object-contain object-center"
              />
              <p className="mx-1 font-semibold w-1/2">{product.title.slice(0, 50)}</p>
              <p className="mx-3 text-green-600 font-semibold">
                ${product.price}
              </p>
              <button
                onClick={() => handleRemove(product.id)}
                className="border-none bg-red-500 dark:bg-red-700 font-semibold text-white px-2 py-1 rounded-md"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
