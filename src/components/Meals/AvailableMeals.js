import Card from '../UI/Card';
import classes from './AvailableMeals';
import MealItem from './MealItem/MealItem';


const AvailableMeals = () => {
    fetch()

    const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
        id={meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price} 
      />
      ));
 
    return (
    <section className={classes.meals}>
        <Card>
           <ul>{mealsList}</ul>
        </Card>
    </section>
    );
};




export default AvailableMeals;