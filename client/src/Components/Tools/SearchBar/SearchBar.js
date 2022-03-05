import { connect } from "react-redux"
import { useState } from "react"
import { showFilteredDogs } from "../../../redux/actions"

function SearchBar ( props ){
    let [state, setState] = useState({
        filteredDogs: [ ],
        filter: 'Name',
        userInput: '',
        unity: 'Kg'
    })

    let dogs = props.dogs[0]


    let handleSearch = ( e ) =>{
        e.preventDefault()
        // document.getElementById('filters').value
        let filtername = state.filter
        filterBy(filtername, 'd')
        // setState(props.displayedDogs)
        // props.showFilteredDogs(state.filteredDogs)
        console.log(state.filteredDogs)

    } 


    let handleInputOnChange = ( e ) => {
        setState({
            ...state, 
            filter: e.target.value ,
            unity: e.target.value === 'Height'?'Cm':'Kg'

        })
        
    }

    let handleUserInputOnChange = ( e ) => {
        // let filtername = state.filter        
        // filterBy(filtername, 'd')
        setState ({...state, userInput: e.target.value})
        console.log(state.userInput)
        // let filtername = state.filter
        // filterBy(filtername, 'd')
    }

    let toogleUnity = ( e ) => {
        if(e.target.name === 'switch-unity'){

            let unityToogled = ( ) =>  {
                switch (state.unity) {
                    case 'Kg':
                        return 'Lb'
                    case 'Lb':
                        return 'Kg'
                    case 'In':
                        return 'Cm'
                    case 'Cm':
                        return 'In'
                    default: return state.unity
                }
            }
            
            setState({...state, unity: unityToogled()})
        }
    }
    let filterBy = ( filtername, order = 'd' ) => {

        console.log('Filtering...')
        
        console.log(dogs)
        console.log(filtername?.toLowerCase())
        var resultDogs;


        let userInput = state.userInput

        if( state.filter === 'Name' || state.filter === 'Temperament'){
            userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1, -1).toLowerCase()

            
            console.log(userInput)
            // Filtering Names And Temperament
            resultDogs = dogs?.filter( ( dog ) => String(dog[filtername?.toLowerCase()])?.includes(userInput)  )
            // setState({...state, filteredDogs: resultDogs} )



            function compare (a, b) {
                if (a.name.charAt[0]>b.name.charAt[0]) return 1;
                if (b.name.charAt[0]>a.name.charAt[0]) return -1;

                return 0;
                
            }
            if( order === 'd' ){
                resultDogs = resultDogs?.sort( compare )
                console.log('sorted descending')
                console.log(resultDogs)

            
            }
            else{
                resultDogs = resultDogs?.sort( compare*-1 )
                console.log('sorted ascending')

            }

        }
        else{

            // Filtering Weight And Height
            resultDogs = dogs?.filter( ( dog ) => {
                let actualUnityType = ( ) => {
                    switch ( state.unity ){
                        case 'Kg':
                            return 'metric'
                        case 'Lb':
                            return 'imperial'
                        case 'In':
                            return 'imperial'
                        case 'Cm':
                            return 'metric'
                        default: return state.unity
                    }
                }
    
               let [li, ls] = dog[filtername?.toLowerCase()][actualUnityType()]?.split(' - ')
                console.log( (Number(userInput) >= li && Number(userInput) <= ls))
               return (Number(userInput) >= li && Number(userInput) <= ls)
    
    
            } )
            // setState({...state, filteredDogs: resultDogs})
        }


        


        setState({...state, filteredDogs: resultDogs})



        
        props.showFilteredDogs(resultDogs)
        console.log('Filtered SUCCESSFULLY By: '+ filtername)
        console.log('RESULT: ->  '+ resultDogs?.map( dog => dog?.name))
        

    }


    return (<div>
        <form onSubmit={ ( e ) => handleSearch(e) } >
        <select name="filters" id="filters" onChange={(e) => handleInputOnChange(e) }>
            <option value='Search' disabled={true} className='placeholder'> Filter By... </option>
            <option value='Name' > Name </option>
            <option value='Temperament'> Temperament </option>
            <option value='Weight'> Weight </option>
            <option value='Height'> Height </option>
        </select>
        
        <input type={state.filter === 'Name' || state.filter === 'Temperament'?'text':'number'} placeholder={'Dog ' + state.filter  } onChange = {( e ) => handleUserInputOnChange(e)}></input>
        {state.filter === 'Weight' || state.filter === 'Height' ? <button type="button" name="switch-unity" onClick={ ( e ) => toogleUnity( e ) }>{state.unity}</button>:null  }
        <button type="submit">Search</button>

        </form>

    </div>)
}

let mapStateToProps = ( state ) => {
    return {
        dogs: state.dogs,
        displayedDogs: state.displayedDogs
    }
}
let mapDispatchToProps = ( dispatch ) => {
    return {
        showFilteredDogs: ( dogs ) => dispatch( showFilteredDogs(dogs) )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)