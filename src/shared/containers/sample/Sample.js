import React from 'react'
import { connect } from 'react-redux'
import * as sampleActions from '../../actions/sampleActions'
import Body from '../../components/sample/Body'

export class Sample extends React.Component{
	constructor(props){
		super(props)
	}


	componentDidMount(){
		if(!this.props.introFromStore && this.props.dispatch) // to skip dispatch events on unit test component rendering
			//Home.requestInitialdata({dispatch:this.props.dispatch})
			this.props.dispatch(sampleActions.loadIntro())
	}


	static requestInitialdata(params){
		return	Promise.all([params.dispatch(sampleActions.loadIntro())])
	}



	render(){
		return(
					<div>
						<Body introProp={this.props.introFromStore} isIntroLoading={this.props.isIntroLoading} introPropError={this.props.introPropError}/>
					</div>
		)
	}
}

const storeProps = (store) => ({
	introFromStore: store.sample.introFromStore,
	isIntroLoading: store.sample.isIntroLoading,
	introPropError: store.sample.introPropError
})

export default connect(storeProps)(Sample)