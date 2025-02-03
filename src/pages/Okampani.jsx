import React from 'react'
import { Link } from 'react-router-dom'

const Okampani = () => {
  return (
     <>
           <div className='container mx-auto p-6 min-h-screen rounded-lg'>
          <Link to={"/"}>Главная</Link> /{" "}
          <Link to={"/o-kompanii"} className="text-stone-500">
          О компании
          </Link>
        </div>
        sdcscsd
     </>
  )
}

export default Okampani