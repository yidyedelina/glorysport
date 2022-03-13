import React from 'react'

export default function List({name})
{
	return (
		<li>
			<a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white cursor-pointer hover:text-yellow-500 hover:translate-y-1">{name}</a>
		</li>
	)
}
