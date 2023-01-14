
const AddItem = ({ newSchItem, setNewSchItem, handleAddItem }) => {
    return (
        <form className="AddItem" onSubmit={handleAddItem}>
            <input
                type="text"
                value={newSchItem}
                placeholder="Add New Item..."
                onChange={(e) => { setNewSchItem(e.target.value) }}
            />
            <button>Add Item</button>
        </form>
    )
}

export default AddItem