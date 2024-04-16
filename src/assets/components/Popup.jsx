import React from 'react'

export default function Popup() {
  return (
    <div className='flex flex-col'>
      <h3>Do you want to delete?</h3>
      <div className='flex'>
        <button>yes</button>
        <button>no</button>
      </div>
    </div>
  )
}
