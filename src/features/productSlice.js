import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
// Normal method

    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
// New Method for Redux Thunk 
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending,(state)=>{
          state.status = STATUSES.LOADING;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
          state.data = action.payload;
          state.status = STATUSES.IDLE;
        })
        .addCase(fetchProducts.rejected,(state)=>{
          state.status = STATUSES.ERROR;
        })
    }

});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Redux Thunk new Method

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});


// Redux Thunk oldMethod

// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//         const res = await fetch("https://fakestoreapi.com/products");
//         const data = await res.json();
//         dispatch(setProducts(data));
//         dispatch(setStatus(STATUSES.IDLE));

//     } catch (err) {
//       console.log("ERROR", err);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
