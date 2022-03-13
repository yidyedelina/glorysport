import React from 'react'
import Bets from './Bets'
import Ads from './Ads'
import NavigationBar from './NavigationBar'
export default function Middle() {
  return (
	<div className="w-1/2 mx-auto">
		<Ads></Ads>
		<NavigationBar/>
		<Bets></Bets>
	</div>
  )
}
