import {React, useState,useEffect} from 'react'
import { SquarePlus, Trash2 } from 'lucide-react';
import Popup from './Popup';
import {motion} from 'framer-motion'

export default function MainNotes() {
  const [allTodos,setTodos] = useState([]);
  const [newTitle, setTitle] = useState("");
  const [newDesc, setDesc] = useState("");
  const [list, setList] = useState(false)
  const [wantToDelete, SetWantToDelete] = useState(false)

  const deleteItem = (index) => {
    let updatedListArr = [...allTodos];
    updatedListArr.splice(index, 1);
    localStorage.setItem('todolist',JSON.stringify(updatedListArr));
    setTodos(updatedListArr);
  }

  useEffect(()=>{
    let savedList = JSON.parse(localStorage.getItem("todolist"));
    if(savedList){
      setTodos(savedList); 
    }
  },[])
  return (
    <motion.div layout className='container rounded-2xl inner-shadow' >
      <motion.div className='todo-wrapper p-4'>
        <div className="h-[1px] mb-9 bg-gray-300 "></div>
        <motion.div layout className="todo-list grid grid-cols-2 overflow-hidden">
          {allTodos.map((item, index) => {
            return (
              <motion.div className="todo-list-item flex items-center m-2 pl-2 justify-between border-l-[3px] shadow-md rounded p-2 border-red-300 h-20" key={index} >
                <motion.div className="content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </motion.div>
                <motion.button whileHover={{scale:"1.1"}} transition={{duration:0.7,ease:[0.5,0,0.24,1]}} className='delete-btn' onClick={() => deleteItem()}><Trash2/></motion.button>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
