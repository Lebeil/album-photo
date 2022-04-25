import {createSlice} from "@reduxjs/toolkit";

export const pictureSlice = createSlice({
    name: "pictures",
    initialState: {
        pictures: null,
    },
    reducers: {
        setPicturesData: (state, action) => {
            state.picture = action.payload;
        },
    },
});

export const { setPicturesData } = pictureSlice.actions;
export default pictureSlice.reducer;