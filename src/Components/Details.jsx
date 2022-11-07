import React from 'react'
import {BsEmojiSmile} from 'react-icons/bs'
import {BsEmojiLaughing} from 'react-icons/bs'
import {TfiMoney} from 'react-icons/tfi'
import {BsEmojiWink} from 'react-icons/bs'


function Details() {
  return (
    <div>
      <div className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 ">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 flex-col mt-6">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
				<BsEmojiSmile size={60} color="black"/>
			</div>
			<div className="flex flex-col justify-center align-middle">
			<p className="text-2xl leading-none text-[#2FCB75] text-center font-bold">Incorporamos el sector de venta de productos para el cuidado de piletas, tanto del hogar como para instituciones. Así también asesoramiento para el cuidado de ambas
				</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 flex-col mt-6">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
				<BsEmojiLaughing size={60} color="black"/>
			</div>
			<div className="flex flex-col justify-center align-middle">
			<p className="text-2xl leading-none text-[#2FCB75] text-center font-bold">Distribuimos productos sueltos para limpieza ya sean jabones líquidos suavizantes lavandina y mas.
				</p>
			</div>
			
		</div>

		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 flex-col mt-6">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
				<BsEmojiWink size={60} color="black"/>
			</div>
			<div className="flex flex-col justify-center align-middle">
			<p className="text-2xl leading-none text-[#2FCB75] text-center font-bold">Cuidamos el agua, trabajamos con la empresa Aguas, distribuidora de Nataclor, Maytronics y astra pool.
				</p>
			</div>
			
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 flex-col mt-6">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
				<TfiMoney size={60} color="black"/>
			</div>
			<div className="flex flex-col justify-center align-middle">
			<p className="text-2xl leading-none text-[#2FCB75] text-center font-bold">Manejamos estándares de alta calidad y mantenemos los precios competitivos.
				</p>
			</div>
		</div>
		</div>
	</div>
</div>
  )
}

export default Details