function List(props){

const itemList = props.item
const category = props.category
// const highcalFruits = itemList.filter(fruit => fruit.calories>=100)
// const lowcalFruits = itemList.filter(fruit => fruit.calories<=100)

const listItems = itemList.map( fruit => <li key={fruit.id}> {fruit.name}: {fruit.calories} </li> )

return(<>
    <h3>{category}</h3>
    <ol>{listItems}</ol>

</>);


}

export default List