import {React, useState,useEffect} from 'react'
import { SquarePlus, Trash2 } from 'lucide-react';
import Popup from './Popup';
import {motion} from 'framer-motion'

export default function MainNotes() {
  const [allTodos,setTodos] = useState([]);
  const [newTitle, setTitle] = useState("");
  const [newDesc, setDesc] = useState("");
  // const 

  // btutton click 
  const handleAddItem = ()=>{
    if(!newTitle){
      alert("Type something dude...")
      return
    }
    let newItem = {
      title:newTitle,
      desc:newDesc,
    }
    let updatedListArr = [...allTodos];
    updatedListArr.push(newItem);
    setTodos(updatedListArr.reverse());
    localStorage.setItem('todolist',JSON.stringify(updatedListArr));
  }
  const handleDelItem = ()=>{
    let updatedListArr = [...allTodos];
    updatedListArr = [];
    localStorage.setItem('todolist',JSON.stringify(updatedListArr));
    setTodos(updatedListArr);
  }
  const togglebtn = () =>{
    let togglelist = document.querySelector(".todo-list");
    togglelist.classList.toggle("expand-toggle");
    let togglebtn = document.querySelector("#collapse")
    togglebtn.classList.toggle("rotate-btn")

  }
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
    <div className='flex'>
      <motion.div layout className='flex flex-col w-1/2' >
        <motion.div className='todo-wrapper '>
          <motion.div className="input-field flex flex-col shadow-xl rounded-xl p-3">
            <motion.input type="text" value={newTitle} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder='Title'
            className='title rounded-sm py-1 px-2 bg-transparent text-slate-600 font-bold focus:outline-none'
            tabIndex='1'
            />
            <div className='h-[1px] bg-slate-400 my-2'></div>
            <motion.textarea type="text" value={newDesc} 
            onChange={(e) => setDesc(e.target.value)}
            placeholder='Description'
            className='title h-80 rounded-sm py-1 px-2 bg-transparent font-normal text-slate-500 focus:outline-none '
            tabIndex='2'  />     
          </motion.div>

          <div className="button-field flex p-2">
            <button 
            className='btn text-slate-400 font-bold m-4'
            onClick={handleAddItem}><SquarePlus className='btn'/></button>
          </div>
        </motion.div>
    </motion.div>

    <motion.div layout className='w-1/2' >
      <motion.div className='todo-wrapper'>
        <div className="h-[1px] mb-9 bg-gray-300 "></div>
        <motion.div layout className="todo-list ">
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
    </div>
  )
}
