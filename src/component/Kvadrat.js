import React, { useEffect, useRef, useState } from 'react'

export default function Kvadrat() {
	const ref = useRef()
	const [kvadrat, setKvadrat] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setKvadrat(!kvadrat)
		}, 500)
		kvadrat
			? (ref.current.style.background = 'red')
			: (ref.current.style.background = 'green')
	})
	return (
		<div
			ref={ref}
			style={{
				width: '200px',
				height: '200px',
				border: '1px solid black',
			}}
		></div>
	)
}
