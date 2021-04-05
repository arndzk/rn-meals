import React from 'react';
import { MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
  console.log(favMeals);
  return <MealList dataList={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
