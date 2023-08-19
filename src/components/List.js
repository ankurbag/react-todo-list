import ListItem from "./ListItem";
const List = (props) => {
  
  return (
    <ul id="myUL">
      {/**TODO : List over all the list items from the props */}
      {props.items.map((item, idx) => (
        <ListItem
          key={idx}
          item={item}
          idx={idx}
          deleteItem={() => props.clickDeleteHandler(idx)}
        />
      ))}
    </ul>
  );
};

export default List;
