import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfItems: JSON.parse(localStorage.getItem('meals')) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    added: (state, action) => {
      // console.log(action.payload)
      // console.log(state.numOfItems)

      let countNum = 1;

      if (state.numOfItems.length == 0) {
        // console.log(...state.numOfItems)
        // state.numOfItems.push(action.payload)
        state.numOfItems.push({ quantity: countNum, meal: action.payload });
        localStorage.setItem('meals', JSON.stringify(state.numOfItems));
        // console.log(state.numOfItems)
      } else {
        // console.log(state.numOfItems, "ELssseee")

        let duplicatedItems = state.numOfItems.filter(
          (item) => item.meal._id === action.payload._id
        );
        // let otherItems = state.numOfItems.filter(item => item._id !== action.payload._id)

        // console.log(duplicatedItems, " ------- ", otherItems)
        // console.log(duplicatedItems)

        if (duplicatedItems.length == 0) {
          // state.numOfItems.push(action.payload)
          state.numOfItems.push({ quantity: countNum, meal: action.payload });
          localStorage.setItem('meals', JSON.stringify(state.numOfItems))

        } else {
          // console.log(duplicatedItems)
          state.numOfItems.map((item) => {
            if (item.meal._id == duplicatedItems[0].meal._id) {
              item.quantity++;
              // console.log(item)
              return item;
            }
          });
          localStorage.setItem('meals', JSON.stringify(state.numOfItems))

        }
      }
    },
    removed: (state, action) => {
      state.numOfItems = state.numOfItems.filter((item) => {
        if (item.quantity > 1 && item.meal._id === action.payload) {
          item.quantity--;
          return item;
        } else {
          return item.meal._id !== action.payload;
        }
      });
      localStorage.setItem('meals', JSON.stringify(state.numOfItems))

      // console.log(state.numOfItems)
    },
  },
});

//Export Actions & reducer
export default cartSlice.reducer;
export const { added, removed } = cartSlice.actions;
