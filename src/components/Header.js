import { useState } from "react";

const Header = (props) => {
  {
    /** PART 1 : Add Click event*/
  }
  const addItem = () => {
    props.clickAddHandler(note);
  }

  {
    /** PART 2 : Store the input Text in state*/
  }
  const [note, setNote] = useState('');  

  return (
    <header className="header">
      <h2 style={{ margin: "5px" }}>{props.title}</h2>
      <input type="text" id="myInput" placeholder="Title..." onChange={(evt) => {setNote(evt.target.value)}}/>
      <span className="addBtn" onClick={addItem}>Add</span>
    </header>
  );
};

export default Header;
