import ListItem from "./ListItem"

const ItemLists = ({ items, handleCheck, handleDelete}) => {
    return (
        <ul>
            <ListItem
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}/>
        </ul>
    )
}

export default ItemLists