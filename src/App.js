import { useState, useEffect } from 'react'
import NavBar from './components/NavBar.js'
import Container from './components/Container.js'
import './styles.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	const [home, setHome] = useState(null)
	const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const baseUrl = '/api/articles'
  
  useEffect(()=> {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        setHome(data.filter(article => article.section === 'home'))
        setBlog(data.filter(article => article.section === 'blog'))
        setLoading(false)
      })
  }, [])




	return (
    <>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						{home && <Container articles={home} />}
					</Route>
					<Route path="/blog">
						{blog && <Container articles={blog} />}
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
