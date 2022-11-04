import React from 'react'
import {BsEmojiSmile} from 'react-icons/bs'

function Tittle() {
  return (
    <div>
      <div className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto">
		<div className=" gap-6 my-16 flex">
			
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
				<div className='flex items-center gap-4 flex-col'>
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900"><BsEmojiSmile size={80} color="black"/></div>
				<p className="text-4xl font-bold leading-none sm:text-2xl text-[#2FCB75] ml-3 text-center">Incorporamos el sector de venta de productos para el cuidado de piletas, tanto del hogar como para instituciones.
				</p>
				</div>
			</div>





		</div>
	</div>
</div>
    </div>
  )
}

export default Tittle