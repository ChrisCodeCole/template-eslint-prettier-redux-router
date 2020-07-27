import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css'

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/users'>Users</Link>
						</li>
					</ul>
				</header>
				<Switch>
					<Route path='/about'>
						<div>About</div>
					</Route>
					<Route path='/users'>
						<div>Users</div>
					</Route>
					<Route path='/'>
						<div>Root</div>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
