
import { GET_DOGS, PAGE_UP, PAGE_DOWN, ERROR, SHOW_FILTERED_DOGS, GET_DOG_DETAIL, TOOGLE_SOUND }  from "./actions"
const initialState = {
    dogs: [ ],
    dogDetail: {},
    page: {
        lim_i: 0,
        lim_s: 8,
        dogsxview: 8
    },
    favourites: [ ],
    displayedDogs: [ ],
    soundPlay: true,
    
    error: null

    // Test Dog: {name: 'Panfilo', image: {url: 'https://images7.memedroid.com/images/UPLOADED919/6193ba1d3c578.jpeg'}}
}
function reducer( state = initialState, action ){
    switch (action.type){
        case GET_DOGS: 
            return { ...state, dogs: [action.payload], displayedDogs: [action.payload] }
        
        case GET_DOG_DETAIL:
            return { ...state, dogDetail: action.payload}

        case PAGE_UP:
            return { ...state, 
                // [state.page.lim_i]: (state.page.lim_s + state.page.dogsxview) > state.dogs.length ? (state.page.lim_i + state.page.dogsxview) : state.page.lim_i ,
                // [state.page.lim_s]: (state.page.lim_s + state.page.dogsxview) > state.dogs.length ? (state.page.lim_s + state.page.dogsxview) : state.dogs.length ,
                page: {
                    ...state.page, 
                    lim_i: state.page.lim_i + 8 - action.payload, 
                    lim_s: state.page.lim_s + 8 + action.payload },
                
            
            }
        case PAGE_DOWN:
            return { ...state, 
                // [state.page.lim_i]: (state.page.lim_s + state.page.dogsxview) > state.dogs.length ? (state.page.lim_i + state.page.dogsxview) : state.page.lim_i ,
                // [state.page.lim_s]: (state.page.lim_s + state.page.dogsxview) > state.dogs.length ? (state.page.lim_s + state.page.dogsxview) : state.dogs.length ,
                page: {
                    ...state.page, 
                    lim_i: state.page.lim_i - 8, 
                    lim_s: state.page.lim_s - 8  },    
            }
        case ERROR: 
            return { ...state, error: action.payload }

        case SHOW_FILTERED_DOGS:
            return { ...state, displayedDogs: [action.payload] }
        case TOOGLE_SOUND:
            return { ...state, soundPlay: !state.soundPlay}
        default: 
            return { ...state }
        
    }
}
export default reducer