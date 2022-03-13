import React from 'react'
import List from '../navbar/List'

export default function NavigationBar() {
  return (
	<div class="container bg-yellow-500 w-auto px-2 py-3 rounded-t-lg shadow-xl">
		<ul className="flex justify-around">
			<List name="Soccer"></List>
			<List name="Basket Ball"></List>
			<List name="Rugby"></List>
			<List name="Tennis"></List>
		</ul>
	</div>
  )
}
