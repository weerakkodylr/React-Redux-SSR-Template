import React from 'react'

export default class Body extends React.Component{
	constructor(){
		super()
	}

	render(){

		let introLoadingText = ""

		if(this.props.isIntroLoading){
			introLoadingText = "Loading..."		
		} else if(this.props.introPropError){
			introLoadingText = "Error Loading Data..."
			console.log(this.props.introPropError)
		}

		return(
			<React.Fragment>
				<br/><br/><br/>
				<h1 style={{fontSize:'36px', color:'#ff0000'}}>Sample Content</h1>
				<span>{introLoadingText}</span>
				<h2 style={{fontSize:'26px', color:'#ffffff', backgroundColor:'#ff0000', padding:'3px'}}>{this.props.introProp}</h2>
				<br/><br/><br/>
			</React.Fragment>
		)
	}
}