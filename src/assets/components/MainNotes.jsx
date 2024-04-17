import {React, useState,useEffect} from 'react'
import { SquarePlus, Trash2, Check} from 'lucide-react';
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
    <div className='w-[100%] h-[86vh]'>
      <div layout className='flex px-4 py-3' >
        <div className='todo-wrapper w-1/2 flex flex-col justify-between'>
          <div className="input-field rounded-xl w-full">
            <input type="text" value={newTitle} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder='Title'
            defaultValue={"title"}
            className='title bg-slate-100 p-2 w-full focus:outline-none rounded-t-lg text-slate-700 font-semibold'
            tabIndex='1'
            />
            <div className='h-[1px] bg-slate-300'></div>
            <div className=''></div>
            <textarea type="text" value={newDesc} 
            onChange={(e) => setDesc(e.target.value)}
            placeholder='Description'
            className='title shadow-lg bg-slate-100 p-2 w-full focus:outline-none rounded-b-lg text-slate-500'
            tabIndex='2'  />     
          </div>

          <div className=" mt-2 button-field flex items-center justify-end ">
            <p className='text-slate-400 text-sm mr-2'>Add to list</p>
            <button 
            className='btn text-green-400'
            onClick={handleAddItem}><Check className='btn'/></button>
          </div>
        </div>
    </div>

      <div className='todo-wrapper'>
        <div className="h-[2px] bg-slate-300"></div>
        <div layout className="todo-list grid grid-cols-3">
          {allTodos.length===0 ? "time to add some notes !!" : ""}
          {allTodos.map((item, index) => {
            return (
              <div className=" flex justify-between shadow-lg todo-list-item bg-slate-300 rounded-2xl m-1 p-3" key={index} >
                <div className="content">
                  <h3 className='text-slate-800 font-semibold text-sm'>{item.title}</h3>
                  <p  className='text-slate-600 text-xs'>{item.desc}</p>
                </div>
                <button className='delete-btn text-red-400' onClick={() => deleteItem()}><Trash2/></button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
