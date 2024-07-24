import { useEffect, useState } from 'react';
import Button from './components/button/Button';
import { FoodType } from './assets/types';
import { createMenu } from './services/createMenu';

import css from './App.module.css';

const App = () => {
  const [food, setFood] = useState<FoodType[] | null>(null);

  useEffect(() => {
    setFood(createMenu());
  }, []);

  const handlerButtonMenu = () => {
    setFood(createMenu());
  }

  return (
    <div className={css.App}>
      <div className={css.container}>
        <div className={css.wrraper}>

          <h1 className={css.title}>Menu for week</h1>

          <main className={css.main}>

            <ul className={css.listDays}>
              {!!food && food.map((item) => 
                <li className={css.itemDays} key={item.day}>

                  <p className={css.day}>{item.day}</p>

                  <div className={css.menu}>

                    <p className={css.category}>Dishes</p>
                    <ul className={css.listFood}>
                      {item.dishes.map((item, index) => 
                        <li className={css.itemFood} key={index}>
                          {item}
                        </li>
                      )}
                    </ul>

                    <p className={css.category}>Drinks</p>
                    <ul className={css.listFood}>
                      {item.drinks.map((item, index) => 
                        <li className={css.itemFood} key={index}>
                          {item}
                        </li>
                      )}
                    </ul>

                    <p className={css.category}>Dessert</p>
                    <ul className={css.listFood}>
                      {item.dessert.map((item, index) => 
                        <li className={css.itemFood} key={index}>
                          {item}
                        </li>
                      )}
                    </ul>

                  </div>

                </li>
              )}
            </ul>

          </main>

          <Button styles={css.button} onClick={handlerButtonMenu} text="refresh menu"/>

        </div>
      </div>
    </div>
  );
}

export default App;
