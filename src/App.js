import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const listItems = [
    "Hit the gym",
    "Pay bills",
    "Meet George",
    "Buy eggs",
    "Read a book",
    "Organize office",
  ];

  {/** PART 2: Add listItems into state*/}
  const [items, setItems] = useState(listItems);

  const clickAddHandler = (item) => {
    console.log('Hey you clicked!!!', item);
    setItems([...items, item]);
  };

  const clickDeleteHandler = (idx) => {
    items.splice(idx, 1);
    setItems([...items]);
  };

  return (
    <>
      {/** PART 2: Pass clickHandler to the Header */}
      <Header title="My Notes" clickAddHandler={clickAddHandler}/>
      <List items={items} clickDeleteHandler={clickDeleteHandler} />
    </>
  );
}

export default App;
