import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {text: 'light'},
    reducers: {
        darkMode(state,action){
            state.text = action.payload;
        },
        lightMode(state,action){
            state.text = action.payload;
        }
    }
});
export const {darkMode,lightMode} = themeSlice.actions;
export default themeSlice.reducer;