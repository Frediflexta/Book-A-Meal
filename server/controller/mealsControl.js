import meals from '../model/mockMeals';

// create a class object of meals
class Meals {

    // this gets all meals from mock db
    static getMeals (req, res) {
        return res.status(200).json({
            message: 'Meals, retrieved successfully',
            success: true,
            meals: meals
        });
    }

    // this adds a meal to the mock db.
    static addMeal (req, res) {

        // the keys are appended to req, so as to get input from the user
        const meal = {
            id: meals[meals.length - 1].id + 1,
            name: req.body.name ,
            price: req.body.price,
            image: req.body.image,
        };

        // and pushes onto the array of meal objects
        meals.push(meal);
        return res.status(201).json({
           message: 'Meal successfully added',
           meals: meals
        });

        // ensure all the fields are field, if not throw a 404 'Not found error'
    }
}

export default Meals;
