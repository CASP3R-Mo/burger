import React from 'react';
import classes from './burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'
const burger = () => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient  type="bread-top"/>
            <BurgerIngredient  type="meat"/>
            <BurgerIngredient  type="cheese"/>
            <BurgerIngredient  type="bread-bottom"/>
        </div>
    )
}
export default burger;