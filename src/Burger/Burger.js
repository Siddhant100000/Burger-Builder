import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // const ingredientsTransformedToConsole = Object.keys(props.ingredients)
    // .map(igKey => {
    //     console.log("igKey value on each attribute  " + igKey);
    //     return [...Array(props.ingredients[igKey])]
    // });
    // The first map takes in every ingredient and assigns a blank array to each ingredient
    // based on the number of ingredients added

    let ingredientsTransformed = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
        .map((_,i) =>{
            // console.log("[2ndMap] igKey " + igKey + "   i " + i);
            return <BurgerIngredient key = {igKey + i} type ={igKey}/>
        });
    })
    .reduce((arr,element) => {
        return arr.concat(element);
    }, []);

    if(ingredientsTransformed.length === 0){
        ingredientsTransformed = <p>Please start adding Ingredients</p>
    }
    //The second map takes the empty arrays lenght `i` and then uses that i to create each burger component

    // const ObjectKeys = Object.keys(props.ingredients);
    // console.log("Object.Keys method " + ObjectKeys);


    // console.log(ingredientsTransformedToConsole);

    return(
        <div className = {classes.Burger} >
            <BurgerIngredient type = "bread-top" />
                {ingredientsTransformed}
            <BurgerIngredient type = "bread-bottom" />
        </div>
    );
};

export default burger;