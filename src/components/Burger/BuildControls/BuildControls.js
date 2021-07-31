import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
        {label: 'Salad' , type: 'salad'},
        {label: 'Bacon' , type: 'bacon'},
        {label: 'Cheese' , type: 'cheese'},
        {label: 'Meat' , type: 'meat'},
    ]

export default function BuildControls(props) {

    return (
        <div className = {classes.BuildControls}>
            <p>Current Price: {props.price.toFixed(2)}</p>
            {controls.map(cntrl => (
                <BuildControl 
                key = {cntrl.label} 
                label = {cntrl.label}
                added = {() => props.ingredientAdded(cntrl.type)}
                removed = {() => props.ingredientRemoved(cntrl.type)}
                disabled = {props.disabled[cntrl.type]}
               />
            ))}
            <button 
                className = {classes.OrderButton}
                disabled = {!props.purchaseAble}
                onClick = {props.ordered}>
                Order Now!</button>
        </div>
    )
}
