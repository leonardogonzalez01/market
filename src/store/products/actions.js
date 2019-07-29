import {ADD_PRODUCT, LESS_ONE_PRODUCT, PLUS_ONE_PRODUCT} from "./const";

export const addProductAction = product =>
  dispatch => dispatch({type: ADD_PRODUCT, payload: product});

export const plusOneProductAction = id =>
  dispatch => dispatch({type: PLUS_ONE_PRODUCT, payload: id});

export const lessOneProductAction = id =>
  dispatch => dispatch({type: LESS_ONE_PRODUCT, payload: id});