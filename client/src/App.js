import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Quote from './Pages/Quote'
import Register from './Pages/Register'

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
                <Route path="/login"  element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/quote" element={<Quote/>} />
                </Routes>
			</Router>
		</div>
	)
}

export default App