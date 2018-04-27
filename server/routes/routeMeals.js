import express from 'express';
import Meals from '../controller/mealsControl';

// create the instance of a route used for routing our app
const router = express.Router();

// GET/meals; Routes to meals
router.get('/', Meals.getMeals);

export default router;