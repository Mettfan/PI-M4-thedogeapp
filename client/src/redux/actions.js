import axios from "axios"

export const GET_DOGS = 'GET_DOGS'
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL'
export const ADD_DOG = 'ADD_DOG'
export const PAGE_UP = 'PAGE_UP'
export const PAGE_DOWN = 'PAGE_DOWN'
export const ERROR = 'ERROR'
export const SHOW_FILTERED_DOGS = 'SHOW_FILTERED_DOGS'
export const TOOGLE_SOUND = 'TOOGLE_SOUND'
export const getDogs = ( ) =>  async dispatch =>{

        // console.log('GOTDOGS')
        axios.get('http://localhost:3001/dogs').then( response => {
            dispatch({
                type: GET_DOGS,
                payload: response.data
            })
        },

        (error) => {
            // console.log(  error )
            dispatch({
                type: ERROR,
                payload:  error.error
   
   
            })
       }
        
        )
    
        
}

export const getDogDetail = ( id ) => async ( dispatch ) => {
    axios.get('http://localhost:3001/dogs/'+id).then( response => {

        dispatch( {

            type: GET_DOG_DETAIL,
            payload: response.data

        } )

    })

}

export  const addDog =  ( name, height, weight, lifespec  ) =>{
    return {
        type: ADD_DOG,
        payload:{ name, height, weight, lifespec}
    }
    
}

export const pageUp = ( offset ) => {
    return {
        type: PAGE_UP,
        payload: offset
    }
}
export const pageDown = ( offset ) => {
    return {
        type: PAGE_DOWN,
        payload: offset
    }
}

export const showFilteredDogs = ( dogs ) => {
    return {
        type: SHOW_FILTERED_DOGS,
        payload: dogs
    }
}

export const toogleSound = ( soundState ) => {
    return {
        type: TOOGLE_SOUND,
        payload: soundState
    }
}