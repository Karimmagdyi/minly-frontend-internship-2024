import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from "@mui/material/Checkbox";
import { COMPLETED, UNCOMPLETED } from '../todos/Todos';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ListItems( {items,setTodo,handleEdit,handleCheckboxChange,remove,edit,editing,editChange,filter}) {



    
  return <>
  {items?.filter((item)=>{
    console.log(filter);
    if(filter===COMPLETED){
        return item.completed===true
    }
    else if( filter===UNCOMPLETED){
        return item.completed===false
    }
    else{
        return true}
  }).map((item) => (
        <div className='item-container' key={item.id}>

          {item.edit?<>
           <input
           value={editing}
           onChange={editChange}
           type="text"
           
           />
           <button onClick={()=>edit(item.id)}>Edit</button>
           
          </>:<>
          <div className='left-side'>
            <Checkbox
            checked={item.completed}
              onChange={() => handleCheckboxChange(item.id)}
              {...label}
              defaultChecked
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />

            <h3 className='h3-style'>{item.text} </h3>
          </div>
          <div className='buttons'>
            <button className='edit-button' onClick={()=>handleEdit(item.id)}>edit</button>
            <button className='delete-button' onClick={() => remove(item.id)}>delete</button>
          </div>
          </>}
        </div>
      ))}
  
  
  </>
}
