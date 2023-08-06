import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //mutating state
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // state = [] //we are not mutating the state, just changing the state locally not the original state is getting changed we are just adding the reference therfore IMMER will not work here & no change will happen
      // console.log(current(state)); //redux doesn't allow us to see the array properly so we use the current to properly see the value from redux
      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
