import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    addtowishlist(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      let localStore = JSON.parse(localStorage.getItem("product") || "[]");
      localStore = localStore.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("product", JSON.stringify(localStore));

      return state.filter((item) => item.id !== action.payload);
    },
    removefromcart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add, remove, removefromcart, addtowishlist } = cartSlice.actions;
export default cartSlice.reducer;
