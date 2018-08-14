import isomorphicFetch from 'isomorphic-fetch'

export const loadIntro = (fetch = isomorphicFetch) => {
	return (dispatch) => {

		return new Promise((resolve, reject) => {

			dispatch(loadingIntro())

			return fetch("https://jsonplaceholder.typicode.com/posts/1")//Arrow functions and implicit return used below
				.then(response => response.json()) //response.json() fully reads the response stream and then return a promise with data.
				.then((data)=>{
					//setTimeout(()=>{
						dispatch(updateStoreWithIntro(data.title))
					return resolve()
					//},3000)
				})
				.catch((error)=>{
					dispatch(errorLoadingInto(error))
					return reject()
				})

		})

	}
}

function loadingIntro(){
	return {
		type:"INTRO_LOADING"
	}
}

function updateStoreWithIntro(data){
	return {
		type:"INTRO_LOADED",
		payload: data
	}
}

function errorLoadingInto(error){
	return {
		type:"INTRO_LOAD_ERROR",
		payload: error
	}
}