import express from 'express';
import meals from '../model/mockMeals';

// create the instance of a route used for routing our app
const router = express.Router();

// GET/meals; Routes to meals
router.get('/', (req, res) => {
   res.json({
      response: 'You made a GET request',
      success: 'true',
      message: 'todos retrieved successfully',
      meals: meals
   });
});

export default router;