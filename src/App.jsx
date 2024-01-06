import './App.scss'
import Layout from './layout'
import Home from './components/home'
import { useEffect } from 'react'
import { useNavigate  ,Outlet} from 'react-router-dom'
function App() {
	const nav = useNavigate()
	useEffect(() => {
		console.log(window.location.pathname);
		if (window.location.pathname  == "/") {
			nav("/home")
		}
	} , [])
	return (
		<>
			<Layout />
			<Outlet></Outlet>

		</>
	)
}

export default App
