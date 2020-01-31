import {DISHES_FAILURE, DISHES_SUCCESS} from "../actions/actionTypes";

const initialState = {
    error: null,
    dishes : [],
};

const dishesReducer = (state = initialState, action) => {
  switch (action.type) {
      case DISHES_SUCCESS:
          const dishes = Object.keys(action.dishes).map(dish => ({...action.dishes[dish], id: dish}));
          return {...state, dishes};
      case DISHES_FAILURE:
          return {
              ...state,
              error: action.error
          };
      default:
          return state;
  }
};

export default dishesReducer;