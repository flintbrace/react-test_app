
const SearchItem = ({searchItem, setSearchItem}) => {
  return (
    <form className="SearchItem" onSubmit={(e)=>e.preventDefault()}>
        <input 
        type="text"
        placeholder="Search Item..."
        onChange={(e)=>setSearchItem(e.target.value)}/>
    </form>
  )
}

export default SearchItem