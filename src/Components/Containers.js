import React from 'react'
import { Container, Icon, Checkbox } from 'semantic-ui-react'
import './Container.css'

function Containers() {
	return (
		<div className='container'>
			<Container textAlign='left' >
				<h3>title</h3>
				<Icon color='red' name='trash alternate' className='iconTrash' />
				<Checkbox label='Done' className='box'/>
				<p>
					description
					</p>
			</Container>
		</div>
	)
}

export default Containers
