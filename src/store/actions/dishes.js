import axiosTeahouse from "../../axios-teahouse";
import {DISHES_FAILURE, DISHES_SUCCESS} from "./actionTypes";

export const dishesSuccess = dishes => ({type: DISHES_SUCCESS, dishes});

export const dishesFailure = error => ({type: DISHES_FAILURE, error});

export const getDishes = () => {
    return async dispatch => {
        try {
            let response =  await axiosTeahouse.get('/dishes.json');
            dispatch(dishesSuccess(response.data));
        } catch (e) {
            dispatch(dishesFailure(e));
        }
    }
};