import meals from '../model/mockMeals';

class Meals {

    static getMeals(req, res) {
        return res.status(200).json({
            message: 'Meals, retrieved successfully',
            success: true,
            meals: meals
        });
    }

    static addMeal(req, res) {

        const {name,price,image} = req.body;

        // ensure all the fields are field, if not throw a 404 'Not found error'
        if (!name || !price || !image)
        {
            return res.status(404).json({
                message: 'Invalid parameters',
                status: 'error'
            });
        }

        meals.push({ id: meals[meals.length - 1].id +1, name, price, image});

        return res.status(201).json({
           message: 'Meal successfully added',
           meals: meals
        });

    }

    static updateMeal(req, res) {

        const {mealid} = req.params;

         const {id, name, price, image} = req.body;

            // forEach enables access of every element of the array(or keys of the obj)
            meals.forEach((meal) => {

                // on an element,check to see if the mealId of a key, matches the req.params key
                if (parseInt(mealid, 10) === parseInt(id, 10))
                {

                    meal.name = name || meal.name;
                    meal.price = price || meal.price;
                    meal.image = image || meal.image;
                    /*console.log(JSON.stringify(id));
                    console.log(JSON.stringify(name));
                    console.log(JSON.stringify(req.body.price));
                    console.log(JSON.stringify(req.body.image));*/

                    return res.status(202).json({
                        message: 'Meal successfully modifed',
                        meals: meals
                    });
                }
        });

    }
}

export default Meals;