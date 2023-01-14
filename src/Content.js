import ItemLists from "./Components/ItemLists";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      <ItemLists
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default Content;
