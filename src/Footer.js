
const Footer = ({ number }) => {
    return (
        <footer>
            <p>{number} List {number === 1 ? "Item" : "Items"}</p>
        </footer>
    )
}

export default Footer