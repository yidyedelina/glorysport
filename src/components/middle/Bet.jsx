import React from 'react'
import Button from './Button'
export default function Bet() {
  return (
	<div className="container dark:bg-gray-800 py-1 px-2">
		<div className="flex justify-between pb-2 border-b-2 border-yellow-500 rounded-lg">
			<div>
				<h3 className="dark:text-white text-md font-semiBold">League Name</h3>
				<h4 className='dark:text-white text-sm font-bold'>opp1 vs opp2</h4>
			</div>
			<button className="text-white bg-yellow-500 py-1 px-2 hidden">-</button>

		</div>
		<h1 className="text-sm text-white font-semiBold from-stone-50 to-slate-400">1x2</h1>
		<Button odd={1} oddValue={9.06}></Button>
	</div>
  )
}
