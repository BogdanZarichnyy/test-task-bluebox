import { FoodType } from '../assets/types';
import food from '../assets/food';

const dateOfWeek: Date[] = [];

const year = 2024;
const month = 6; // July
for (let date = 1; date <= 7; date++) dateOfWeek.push(new Date(year, month, date)); // 7 days of week
// console.log(dateOfWeek);

const days: string[] = [];

const formatterOfDays = new Intl.DateTimeFormat("en-US", { weekday: "long" });
for (const date of dateOfWeek) {
  days.push(formatterOfDays.format(date));
}
// console.log(days);

const letMeEat = (menu: string[]): string[] => {
  const possibleAmountOfFood = 3;
  const amountOfFood = Math.ceil(Math.random() * possibleAmountOfFood);
  // console.log(amountOfFood);

  const result: string[] = [];

  while (result.length !== amountOfFood) {
    const chooseFood = Math.floor(Math.random() * menu.length);    
    result.push(menu[chooseFood]);  
    // menu = menu.filter((item, _, array) => array.indexOf(item) !== chooseFood);  
    menu = menu.filter((item) => item !== menu[chooseFood]); // deleted choosen food
  }

  return result;
}

export const createMenu = (): FoodType[] => {
  const arrayfood: FoodType[] = [];

  for (const day of days) {
    arrayfood.push({
      day,
      dishes: letMeEat(food.dishes),
      drinks: letMeEat(food.drinks),
      dessert: letMeEat(food.dessert)
    });
  }

//   console.log(arrayfood);

  return arrayfood;
}

