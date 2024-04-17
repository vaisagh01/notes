import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { SquarePlus, ChevronLeft, LoaderCircle } from 'lucide-react';
import MainNotes from '../assets/components/MainNotes';
import Notes from '..//assets/components/Notes'
import { useActionData } from 'react-router-dom';
import { RiMenu4Line } from "react-icons/ri";

export default function Home() {

  return (
      <div className='bg-slate-200 m-2 p-3 rounded-3xl'>
        <div className='flex w-full justify-between'>
            <p className='text-slate-400 text-3xl font-medium ml-5'>notes</p>
        </div>
        <div className=' w-full'><MainNotes /></div>
      </div>
  )
}
