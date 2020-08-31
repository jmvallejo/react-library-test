import React from 'react'
import './SampleComponent.less'

const SampleComponent = ({ name }) => (
	<div className="sampleComponent">
		<span>
			Hello <span className="name">{name}</span>, this is a sample component exported using parcel!
		</span>
	</div>
)

export default SampleComponent
