import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initState = {
  meals: [],
  mealsIsLoading: false,
  getMealsError: false,
  oneMeal: {},
  oneMealLoading: false,
  getOneMealError: false,
  filterCuisine: "",
  filterCategory: "",
  mealsNames: [],
};

export const getMeals = createAsyncThunk(
  "meal/getMeals",
  async (query, { rejectWithValue }) => {
    try {
      let url = "";
      if (query.type === "paggination") {
        url = `https://foody--api.herokuapp.com/meals?${query.data}`;
      } else if (query.type === "filter") {
        url = `https://foody--api.herokuapp.com/meals?${query.data.cuisine}&${query.data.category}`;
      } else if (query.type === "search") {
        url = `https://foody--api.herokuapp.com/meals/search/${query.data}`;

        const res = await fetch(url);
        const data = await res.json();
        return { meals: data };
      }
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOneMeal = createAsyncThunk(
  "meal/getOneMeal",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://foody--api.herokuapp.com/meals/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getMealsNames = createAsyncThunk(
  "meal/getMealsNames",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://foody--api.herokuapp.com/meals/find/name"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const mealSlice = createSlice({
  name: "meal",
  initialState: initState,
  reducers: {
    getFilterCuisine(state, action) {
      state.filterCuisine = action.payload;
    },
    getFilterCategory(state, action) {
      state.filterCategory = action.payload;
    },
  },
  extraReducers: {
    [getMeals.pending]: (state, action) => {
      state.mealsIsLoading = true;
      state.getMealsError = false;
    },
    [getMeals.fulfilled]: (state, action) => {
      state.meals = action.payload;
      state.mealsIsLoading = false;
      state.getMealsError = false;
    },
    [getMeals.rejected]: (state, action) => {
      state.mealsIsLoading = false;
      state.getMealsError = true;
    },

    [getOneMeal.pending]: (state, action) => {
      state.oneMealLoading = true;
      state.getOneMealError = false;
    },
    [getOneMeal.fulfilled]: (state, action) => {
      state.oneMeal = action.payload;
      state.oneMealLoading = false;
      state.getOneMealError = false;
    },
    [getOneMeal.rejected]: (state, action) => {
      state.oneMealLoading = false;
      state.getOneMealError = true;
    },

    [getMealsNames.fulfilled]: (state, action) => {
      state.mealsNames = action.payload;
    },
  },
});

export default mealSlice.reducer;
export const { getFilterCuisine, getFilterCategory } = mealSlice.actions;
