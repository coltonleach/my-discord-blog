import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import MainWindow from './MainWindow'
import '../styles/container.css'

function Container({ articles }) {
	const [activeChannel, setActiveChannel] = useState({
		activeObject: articles[0],
		objects: articles,
	})

	useEffect(() => {
		setActiveChannel({
			...activeChannel,
			activeObject: articles[0],
			objects: articles,
		})
	}, [articles])

	const handleClick = (index) => {
		setActiveChannel({
			...activeChannel,
			activeObject: activeChannel.objects[index],
		})
	}

	const toggleActiveChannel = (index) => {
		if (activeChannel.objects[index] === activeChannel.activeObject) {
			return 'channel channel-active'
		} else {
			return 'channel'
		}
	}

	let messageBody = activeChannel.activeObject.body
	let messageTimestamp = activeChannel.activeObject.date
    let messageTitle = activeChannel.activeObject.title

	return (
		<div className="container">
			<div className="sidebar">
				<h3 className="chat-title">{articles[0].section}</h3>
				<div className="channel-wrapper">
					{articles.map((article, index) => (
						<p
							key={articles[index].id}
							onClick={() => {
								handleClick(index)
							}}
							className={toggleActiveChannel(index)}
						>
							{article.title.replace(/\s/g, '-')}
						</p>
					))}
				</div>
			</div>

            <MainWindow messageTitle={messageTitle} messageBody={messageBody} messageTimestamp={messageTimestamp}/>
			<Footer />
		</div>
	)
}

export default Container
