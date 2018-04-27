import meals from '../model/mockMeals';

// create a class object of meals
class Meals {
    static getMeals(req, res) {
        return res.status(200).json({
            message: 'Meals, retrieved successfully',
            success: true,
            meals: meals
        });
    }
}

export default Meals;