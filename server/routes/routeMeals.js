import express from 'express';
import Meals from '../controller/mealsControl';

// create the instance of a route used for routing our app
const router = express.Router();

// GET/meals; Routes to retrieve all meals
router.get('/api/v1/getmeals', Meals.getMeals);

// POST/meal: route to add meals
router.post('/api/v1/addmeal', Meals.addMeal);

// PUT/meals/meal:id: Updates a meals, uses :id as a search param
router.put('/api/v1/updateMeal/:mealid', Meals.updateMeal);

export default router;
