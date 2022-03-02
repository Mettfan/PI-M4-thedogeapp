import axios from "axios"

export const GET_DOGS = 'GET_DOGS'
export const ADD_DOG = 'ADD_DOG'
export const PAGE_UP = 'PAGE_UP'
export const PAGE_DOWN = 'PAGE_DOWN'
export const ERROR = 'ERROR'
export const getDogs = ( ) =>  async dispatch =>{

        // console.log('GOTDOGS')
        axios.get('https://api.thedogapi.com/v1/breeds').then( response => {
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

export  const addDog =  ( name, height, weight, lifespec  ) =>{
    return {
        type: ADD_DOG,
        payload:{ name, height, weight, lifespec}
    }
    
}

export const pageUp = ( li, ls ) => {
    return {
        type: PAGE_UP,
        payload: {lim_i: li , lim_s: ls}
    }
}
export const pageDown = ( li, ls ) => {
    return {
        type: PAGE_DOWN,
        payload: {lim_i: li , lim_s: ls}
    }
}