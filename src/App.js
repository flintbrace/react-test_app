import Header from "./Header";
import AddItem from "./Components/AddItem";
import SearchItem from "./Components/SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import Form from "./Components/Form";

function App() {
  const [schItems, setSchItems] = useState(
    JSON.parse(localStorage.getItem("schItems")) || []
  );

  localStorage.setItem("schItems", JSON.stringify(schItems));

  const [newSchItem, setNewSchItem] = useState("");
  const [searchItem, setSearchItem] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    const id = schItems.length ? schItems[schItems.length - 1].id + 1 : 1;
    const myNewSchItem = { id, title: newSchItem, checked: false };
    setSchItems([...schItems, myNewSchItem]);
    localStorage.setItem("schItems", JSON.stringify(schItems));
    setNewSchItem("");
  };

  const handleCheck = (id) => {
    const newList = schItems.map((item) => {
      return id === item.id ? { ...item, checked: !item.checked } : item;
    });
    setSchItems(newList);
    localStorage.setItem("schItems", JSON.stringify(newList));
  };

  const handleDelete = (id) => {
    const newList = schItems.filter((item) => id !== item.id);
    setSchItems(newList);
    localStorage.setItem("schItems", JSON.stringify(newList));
  };

  return (
    <div className="app">
      <Header title="School List" />
      <AddItem
        newSchItem={newSchItem}
        setNewSchItem={setNewSchItem}
        handleAddItem={handleAddItem}
      />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <Form />
      <Content
        items={schItems.filter((tt) =>
          tt.title.toLowerCase().includes(searchItem.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer number={schItems.length} />
    </div>
  );
}

export default App;
