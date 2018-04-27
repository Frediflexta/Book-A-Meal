import express from 'express';
import Meals from '../controller/mealsControl';

// create the instance of a route used for routing our app
const router = express.Router();

// GET/meals; Routes to retrieve all meals
router.get('/', Meals.getMeals);

// POST/meal: route to add meals
router.post('/', Meals.addMeal);

export default router;