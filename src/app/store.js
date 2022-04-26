import {configureStore} from "@reduxjs/toolkit";
import picturesReducer from "../feature/picture.slice";

export default configureStore({
    reducer: {
        pictures: picturesReducer,
    },
});