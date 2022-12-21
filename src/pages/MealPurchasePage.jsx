import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import IngredientsComponent from "../components/SingleMealComponents/IngredientsComponent";
import InstructionsComponent from "../components/SingleMealComponents/InstructionsComponent";
import MealHeadderComponent from "../components/SingleMealComponents/MealHeadderComponent";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getOneMeal } from '../features/meal/mealSlice';

function MealPurchasePage() {

  const { id } = useParams();
  const state = useSelector(state => state);
  const meal = state.meal.oneMeal;

  document.title = `Recipe: ${meal.name}`

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneMeal(id));
  }, [])

  return (
    <div>
      <MealHeadderComponent meal={meal}></MealHeadderComponent>
      <IngredientsComponent meal={meal.ingredients}></IngredientsComponent>
      <InstructionsComponent meal={meal.instructions}></InstructionsComponent>
    </div>
  );
}

export default MealPurchasePage;
