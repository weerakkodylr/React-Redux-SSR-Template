
const defaultState = {
	introFromStore:undefined,
	isIntroLoaded: undefined,
	isIntroLoading: false,
	isDealsLoaded: false,
	introPropError: undefined,
	//users: undefined
}

const reducer = ( state = defaultState, action ) => {

	switch(action.type){
		case "INTRO_LOADING" : {
			//console.log("DEALS_LOADING")
			state = {...state, isIntroLoading: true }
			break
		}
		case "INTRO_LOADED" : {
			
			state = {...state, isIntroLoading: false, isIntroLoaded: true, introFromStore: action.payload }
			break
		}
		case "INTRO_ERROR" : {
			state = {...state, isIntroLoading: false, isIntroLoaded: false, introPropError: action.payload, introFromStore: undefined }
			break
		}
	}

	//console.log(state)
	return state
}

export default reducer