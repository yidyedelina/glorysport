import React from 'react'

export default function Button({odd, oddValue}) {
  return (
	<button className='px-2 py-1 bg-gray-600 text-sm rounded-md text-right text-white hover:bg-yellow-600 shadow-lg'>
		{odd} <span className='ml-6'>{oddValue}</span>
	</button>
  )
}
