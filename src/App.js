import { useState, useEffect } from 'react'
import NavBar from './components/NavBar.js'
import Container from './components/Container.js'
import './styles.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [initialScreen, setInitialScreen] = useState([
    {
      id: 0,
      title: 'the blogs got lost',
      body: [
        `Hi, welcome to my website! If you're seeing this, it means the blogs are on their way and should be here shortly!`,
        `Have a great day 😁`
      ],
      date: 'March 15, 2022',
      section: 'home'
    }
  ])
	const [home, setHome] = useState(null)
	const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const baseUrl = 'https://dry-bayou-39878.herokuapp.com/api/articles'
  
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
				{loading
        ? <Container articles={initialScreen} />
        :
          <Switch>
					<Route exact path="/">
						{home && <Container articles={home} />}
					</Route>
					<Route path="/blog">
						{blog && <Container articles={blog} />}
					</Route>
				</Switch>}
			</Router>
		</>
	)
}

export default App
