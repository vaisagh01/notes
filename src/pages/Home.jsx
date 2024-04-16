import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { SquarePlus, ChevronLeft, LoaderCircle } from 'lucide-react';
import MainNotes from '../assets/components/MainNotes';
import Notes from '..//assets/components/Notes'
import { useActionData } from 'react-router-dom';
import { RiMenu4Line } from "react-icons/ri";

const variants = {
  open:{
    height:500,
    width:500,
  },
  closed:{
    height:0
  }
}
const menuVariant = {
  open:{
    height: 54,
    width:350
  },
  closed:{
    width:0
  }
}

const notesVariant = {
  open:{
    height:500,
    width:700,
  },
  closed:{
    height:0
  }
}


export default function Home() {
  const [isActive, setIsActive] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openNotes, setOpenNotes] = useState(false)

  return (
    <motion.div className='m-0 p-7 box-border font-cfont items-center bg-red-200 gap-4'>
      <motion.div className='rounded-2xl  w-[80vw] bg-slate-200 shadow-xl p-8 font-cfont font-bold '>
        <div className='flex items-center justify-between mb-8 gap-9'>
          <motion.p onClick={()=>setIsActive(!isActive)} whileHover={{y:"-2px"}} style={isActive ? {fontSize:'40px', transition:'0.5s', color:'darkGray'} : {fontSize:'60px', transition:'0.5s', color:'gray'}} >
              notes.
          </motion.p>

          <motion.div onClick={()=>setOpenMenu(!openMenu)}  className='flex'>
            <motion.div variants={menuVariant} initial='closed' animate={openMenu ? 'open' : 'closed'} className='border-r-8 bg-slate-200 rounded-l-2xl p-3 pr-8 border-slate-300 mr-4 flex items-center' transition={{duration:0.7,ease:[0.5,0,0.24,1]}}><ChevronLeft /></motion.div>
            <LoaderCircle className='text-5xl text-slate-600 cursor-pointer'/>
          </motion.div>
        </div>
        <motion.div className='rounded-2xl bg-blue-200 p-1 items-center flex' variants={variants} initial='closed' animate={isActive? 'open' : 'closed'} transition={{duration:0.7,ease:[0.5,0,0.24,1]}}>{isActive? <MainNotes /> : null}</motion.div>
      </motion.div>
  </motion.div>
  )
}
