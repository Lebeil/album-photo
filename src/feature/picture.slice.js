import {createSlice} from "@reduxjs/toolkit";

export const pictureSlice = createSlice({
    name: "pictures",
    initialState: {
        pictures: null,
    },
    reducers: {
        setPicturesData: (state, { payload } ) => {
            state.pictures = payload;
        },
        addPicture: (state, {payload}) => {
            /*classic method*/
            /*state.pictures = [...state.pictures, payload]*/
            state.pictures.push(payload)
        }
    },
});

export const { setPicturesData, addPicture } = pictureSlice.actions;
export default pictureSlice.reducer;