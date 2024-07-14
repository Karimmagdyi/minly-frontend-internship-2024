import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ListItems from "../listItems/ListItems";

export const COMPLETED='completed'
 export const UNCOMPLETED='uncompleted'
 export const ALL='all'
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function Todos() {

  
  const [items, setItems] = useState([
    { id: 1, text: "Learn React", completed: false, edit: false },
    { id: 2, text: "Learn React Native", completed: false, edit: false },
    { id: 3, text: "Learn Redux", completed: false, edit: false },
  ])
const [filterValue, setFilterValue] = useState(ALL)
  const [done, setDone] = useState([]);
  const [notDone, setNotDone] = useState([]);
  const [todo, setTodo] = useState(items);
  const [inputValue, setInputValue] = useState("");
  const [editing, setEditing] = useState();




  const handleCheckboxChange = (id) => {
    setItems((prevTodo) =>
      prevTodo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    filter();
  };

  function handleEdit(id) {
    setItems((prevTodo) =>
      prevTodo.map((item) =>
        item.id === id ? { ...items, edit: !item.edit } : item
      )
    );
    console.log("todo", todo);
  }

  function filter() {
    const finished = todo.filter((item) => item.completed);
    const notFinished = todo.filter((item) => !item.completed);

    setDone((prevItem) => {
      return [...prevItem, finished];
    });
    setNotDone((prevItem) => {
      return [...prevItem, notFinished];
    });
  }

  function edit(id) {
    setItems((prevTodo) =>
      prevTodo.map((item) =>
        item.id === id ? { ...items, text: editing } : item
      )
    );
  }

  function remove(id) {
    setItems((prevTodo) => {
      return prevTodo.filter((item) => item.id !== id);
    });
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function editChange(event) {
    setEditing(event.target.value);
  }

  function addTodo() {
    let lstId = 0;
    for (let i = 0, length = todo.length; i < length; ++i) {
      lstId = Math.max(lstId, todo[i].id);
    }
    setItems([...todo, { id: lstId + 1, text: inputValue, completed: false }]);
    setInputValue("");
  }

  function completed() {
setFilterValue(COMPLETED)  }

  function getAll() {
    setFilterValue(ALL)
  }

  function uncompleted() {
    setFilterValue(UNCOMPLETED)
  }

  return (
    <>
      <div className="buttons-list">
        <div className="containerr">
          <div className="add-task-input">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              className="add-task"
            />
            <button className="add-task-button" onClick={addTodo}>
              Add Task
            </button>
          </div>
          <div className="box">
            <Box sx={{ minWidth: 90 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">All</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem onClick={completed} value={5}>
                    completed
                  </MenuItem>
                  <MenuItem onClick={uncompleted} value={10}>
                    uncompleted
                  </MenuItem>
                  <MenuItem onClick={getAll} value={20}>
                    All
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>

      <div>
        <ListItems
          items={items}
          filter={filterValue}
          handleEdit={handleEdit}
          editing={editing}
          editChange={editChange}
          handleCheckboxChange={handleCheckboxChange}
          remove={remove}
          edit={edit}
        />
      </div>
    </>
  );
}
