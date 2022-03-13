import React from 'react'
import Logo from '../../static/logo.svg'
import List from './List';
const TopNav = () => {
  return (
	<nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
		<div className='container flex flex-wrap justify-between items-center mx-auto'>
			<a href="#" className="flex items-center">
				<img src={Logo} className="mr-3  h-6 sm:h-10" alt="glorysportlogo"></img>
			</a>
			<div className="hidden w-full md:block md:w-auto">
				<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
					<List name="Home"/>
					<List name="Live"/>
					<List name="Check Ticket"/>
					<List name="Rules" />

				</ul>
				

			</div>
			<div>
					<a className="py-2 px-4 bg-yellow-500 outline-none border-none font-medium text-white text-sm rounded-md shadow-md cursor-pointer hover:bg-yellow-600">Account</a>
				</div>
		</div>
	</nav>
  )
}

export default TopNav;
