import { useState } from "react";
import "./App.css";

function App() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [DueDate, setDueDate] = useState("");

  return (
    <div className="Container">
      <h4>Input Form</h4>
      <form className="Form-Container">
        <label labelFor="Title">Title</label>
        <input type="text" id="Title" required></input>
        <label labelFor="Description">Description</label>
        <input type="text" id="Description" required></input>
        <label labelFor="DueDate">Due Date</label>
        <input type="date" id="DueDate" required></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
