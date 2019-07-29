import {initialState} from "./initislState";
import {ADD_PRODUCT, LESS_ONE_PRODUCT, PLUS_ONE_PRODUCT} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        products: state.products.concat(action.payload)
      }
    }
    case PLUS_ONE_PRODUCT: {
      return {
        ...state,
        products: state.products.map((product, index) => action.payload === index ?
          {...product, count: product.count + 1}
          : product
        )
      }
    }
    case LESS_ONE_PRODUCT: {
      return {
        ...state,
        products: state.products.map((product, index) => action.payload === index ?
          {...product, count: product.count - 1}
          : product
        )
      }
    }
    default: {
      return state;
    }
  }
}