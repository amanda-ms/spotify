import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home'
import './index.css'
import { Sidebar } from './components/common'

ReactDOM.render(
	<React.StrictMode>
		<Sidebar />
		<Home />
	</React.StrictMode>,
	document.getElementById('root')
)
