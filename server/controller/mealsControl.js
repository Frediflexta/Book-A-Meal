import meals from '../model/mockMeals';

class Meals {
  static getMeals(req, res) {
    return res.status(200).json({
      message: 'Meals, retrieved successfully',
      success: true,
      meals,
    });
  }

  static addMeal(req, res) {
    const { name, price, image } = req.body;

    // ensure all the fields are field, if not throw a 404 'Not found error'
    if (!name || !price || !image) {
      return res.status(404).json({
        message: 'Invalid parameters',
        status: 'error',
      });
    }

    meals.push({
      id: meals[meals.length - 1].id + 1, name, price, image,
    });

    return res.status(201).json({
      message: 'Meal successfully added',
      meals,
    });
  }

  static updateMeal(req, res) {
    const { mealid } = req.params;

    const {
      name, price, image
    } = req.body;

    const meal = meals.find(index => { return index.id === Number(mealid.id) } );

    const updatedMeal = { ...meals.meal, ...req.body };
    meals.splice( mealid, 1, updatedMeal );

    return res.status(200).json({
      message: 'Meal successfully modifed',
      meals,
    });
  }

}

export default Meals;