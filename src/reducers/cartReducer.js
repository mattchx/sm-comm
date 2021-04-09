import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cartActions';

export const initialState = {
items: [],
totalItems: 0
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
        console.log(state)
      return { ...state, items:[...state.items, action.payload] };
    case REMOVE_FROM_CART:
      return { posts: action.payload, loading: false, hasErrors: false };
    default:
      return state;
  }
}