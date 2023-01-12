
const ListItem = ({ items, handleCheck, handleDelete }) => {

    const deco={fontStyle:'italic', color:'gray', marginTop:'5rem',}

    return (
        items.length?
        items.map((item) => {
            return (
                <li key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onClick={() => handleCheck(item.id)} />
                    <label>{item.title}</label>
                    <button
                        onClick={() => handleDelete(item.id)}
                    >Delete</button>
                </li>
            ) 
        }
        ): <p style={deco}>no items found...</p>)
}

export default ListItem