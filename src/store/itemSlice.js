import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items.js";

const itemSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitilItems(state, action) {
      return store;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice;
