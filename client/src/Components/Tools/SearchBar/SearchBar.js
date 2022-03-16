import { connect } from "react-redux"
import { useState } from "react"
import { showFilteredDogs } from "../../../redux/actions"
import './SearchBar.css'

function SearchBar ( props ){

    //La barra de busqueda contiene lo siguiente:

    // Definimos un estado que contenga un objeto con los siguientes elementos: { filteredDogs, filter, userInput, unity }
    let [state, setState] = useState({

        //filteredDogs contiene un array donde se guardaran los objetos 'Dog' que cumplan con el criterio de búsqueda
        filteredDogs: [ ],

        //filter contiene la propiedad del objeto dogs a partir de la cual se aplicará el filtro 
        filter: 'Name',

        //userInput guarda el string que es tipeado
        userInput: '',

        //unity guarda la unidad de medida en el sitema requerido por el usuario ( imperial o metric )
        unity: 'Kg',

        //orderType contiene el tipo de orden ( ascendente o descendente en una letra 'a' o 'd' )
        orderType: 'd',

        //orderBy contiene el criterio por el cual se ordenara ( peso o nombre 'p' o 'n' )
        orderBy: 'w'

    }) ///////// AQUI ACABA LA DEFINICION DEL ESTADO ////////////////////////// 


    //Definimos una variable 'dogs' donde guardaremos la lista de los perros ( El índice [0] es incluido ya que la lista props.dogs contiene la lista con los objetos de cada dog )
    let dogs = props.dogs[0]


    //Definimos la funcion que nos ayudará a detectar cada vez que el usuario presione enter o Search una vez ingresado el criterio de búsqueda ( equivalente a handleSubmit(e) )
    let handleSearch = ( e ) =>{

        //pim pam
        e.preventDefault()
        
        // Definimos filtername dentro de handleSearch donde guardaremos el nombre del filtro seteado por el usuario 
        let filtername = state.filter

        //Pasamos el nombre del filtro a una función que nos ayudará a filtrar el array de Dogs guardando el nevo array filtrado en la variable que definimos dentro del estado ( state.filteredDogs )
        //El segundo parametro es el orden en el cual mostraremos dicha informacion ( 'd': Descendente, 'a': Ascendente  )
        //Y el tercer parametro es ordenar por w: Peso, n: Nombre
        //Esta función la definiremos más adelante
        filterBy(filtername, 'a', 'w')

        
        //Mostramos en consola la lista ordenada
        console.log(state.filteredDogs)

    } /////////AQUI TERMINA HANDLE SEARCH////////////////


    //Creamos la función que cambiará el estado de acuerdo a los valores del filtro y tipo de unidad seteado por el usuario
    let handleInputOnChange = ( e ) => {

        setState({
            ...state, 

            //Guardamos la información que nos manda el usuario 
            filter: e.target.value ,

            //Matcheamos la unidad con su nombre de acuerdo al estado 
            unity: e.target.value === 'Height'?'Cm':'Kg'

        })
        
    } /////////AQUI TERMINA HANDLE INPUT ON CHANGE///////////////



    //Definimos una funcion que nos permitira cambiar el estado de userInput que creamos dentro de nuetro estado
    //La usaremos para observar qué es lo que el usuario escribe en el campo de búsqueda
    let handleUserInputOnChange = ( e ) => {
        
        //pim pam
        setState ({...state, userInput: e.target.value})
        console.log(state.userInput)
        
    } ////////AQUI TERMINA HANDLE USER INPUT ON CHANGE /////////


    //Esta funcion nos ayudara a switchear entre unidades de acuerdo a la unidad actual y su sistema ( imperial, metric )
    let toogleUnity = ( e ) => {
        if(e.target.name === 'switch-unity'){
            
            //Basicamente usamos la 'fuerza bruta', simplemente si el estado actual es 'x' lo cambiamos a su contraparte en el sistema opuesto
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
            
            //Y la pasamos dentro el objeto para que el estado sea seteado
            setState({...state, unity: unityToogled()})
        }
    } ///////AQUI TERMINA TOOGLE UNITY//////////


    //Definimos la funcion que utilizamos anteriormente para ordenar el listado global de 'dogs'
    //Recordemos los 3 parámetros: ( nombre del filtro, orden 'a' o 'd', orderBy 'w', o 'n'  )
    let filterBy = ( filtername, order = 'a', orderBy = 'n' ) => {

        console.log('Filtering...')
        
    
        console.log(dogs)
        console.log(filtername?.toLowerCase())

        //En resultDogs vamos a almacenar el listado pasado por todos los filtros
        var resultDogs;
        // En unityType guardamos el sistema en que se guardan las medidas
        var unityType;

        //Guardamos el criterio de busqueda del usuario en una variable para facilitar la redaccion
        let userInput = state.userInput


        //Observamos lo que el usuario seteo en el filtro
        if( state.filter === 'Name' || state.filter === 'Temperament'){
            

            
            console.log(userInput)

            // Filtering Names And Temperament:
            //Usaremos como puntero en un objeto la variable filter que guarda un string
            let filter = filtername?.toLowerCase()

            //Guardamos en resultDogs lo que nos arroja el metodo filter dela lista de 'dogs'
            resultDogs = dogs?.filter( ( dog ) => dog[filter]?.includes(userInput)  )
            // setState({...state, filteredDogs: resultDogs} )



            

        }
        else{

            // Filtering Weight And Height:

            //En este caso resultDogs contiene la lista filtrada de dogs a partir de su peso y altura y toma como referencia el limite superior e inferior en el rango de su valor
            resultDogs = dogs?.filter( ( dog ) => {

                //Esta funcion sirve para matchear un sistema de medicion a una unidad y poder acceder a su valor en el objeto contenido en 'dogs' más adelante
                var actualUnityType = ( ) => {
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
                
               //Guardamos el limite superior e inferior en sus respectivas variables 
               //Recordemos que el formato contenido en dogs de Weight y Height viene separado dos numeros por la cadena ' - ', así que split() nos sirve
               //Poniendo en palabras la siguiente linea de codigo: ' Posicionate en la key del nombre del filtro. Posteriormente lee el valor contenido en la key 'sistema de medicion' ( imperial, metric )
               try{
                   let [li, ls] = dog[filtername?.toLowerCase()][actualUnityType()]?.split(' - ')
                   unityType = actualUnityType()
                
    
                   console.log( (Number(userInput) >= li && Number(userInput) <= ls))
                   //Si el criterio de búsqueda se encuentra en los rangos dados por el perro, lo retornamos para guardarlo
                   return (Number(userInput) >= li && Number(userInput) <= ls)

               }
               catch ( e ){

                console.log('Error Handleado con Exito!')

               }
               
    
    
            } )
            // setState({...state, filteredDogs: resultDogs})
        }


        //Una vez pasados los filtros principales, pasamos a los ordenamientos
        //Para esto tendremos 2 funciones que facilmente se podrian fusionar en una sola: 
        let orderingFunction = ( type, attr ) => {

            let orderedData;
            
            

            switch (attr){

                case 'n':
                    orderedData = resultDogs.sort(( a, b ) => {
                        return type === 'a' ? (a.name > b.name ? 1 : -1 ) : (a.name > b.name ? -1 : 1)
                    })
                    return  orderedData

                case 'w':
                    orderedData = resultDogs.sort( ( a, b ) => {
                        return type === 'a' ? (Number(a.weight['metric']?.split(' - ')[0]) > Number(b.weight['metric']?.split(' - ')[0]) ? 1 : -1) : (Number(a.weight['metric']?.split(' - ')[0]) > Number(b.weight['metric']?.split(' - ')[0]) ? -1 : 1)
                    } )
                    return orderedData 
                default: return orderedData
            }

        }

        resultDogs = orderingFunction(state.orderType, state.orderBy)
        //Guardamos en state.filteredDogs los perros despues de haber pasado por todas las funciones de filtrado
        setState({...state, filteredDogs: resultDogs})



        //Pim pam
        props.showFilteredDogs(resultDogs)
        console.log('Filtered SUCCESSFULLY By: '+ filtername)
        console.log('RESULT: ->  '+ resultDogs?.map( dog => dog?.name))
        

    } ////// AQUI TERMINA FILTERBY //////

    //Creamos funciones para toglear los tipos de ordenamiento
    let toogleOrderType = ( ) => {
        setState( {
            ...state, 
            orderType: state.orderType === 'a' ? 'd' : 'a'
        })
    }
    let toogleOrderBy = ( ) => {
        setState( {
            ...state, 
            orderBy: state.orderBy === 'n' ? 'w' : 'n'
        })
    }

    return (<div>

        
            
        {/* Form Create Dog */}
        <form className="create-form" onSubmit={ ( e ) => handleSearch(e) } >
            <div>

                {/* Filter List */}
                <select name="filters" id="filters" onChange={(e) => handleInputOnChange(e) }>
                    <option value='Search' disabled={true} className='placeholder'> Filter By... </option>
                    <option value='Name' > Name </option>
                    <option value='Temperament'> Temperament </option>
                    <option value='Weight'> Weight </option>
                    <option value='Height'> Height </option>
                </select>

                {/* Boton que Cambia las unidades de acuerdo a su sistema y atributo (Kg, Lb, In, Cm) */}
                {state.filter === 'Weight' || state.filter === 'Height' ? <button type="button" name="switch-unity" onClick={ ( e ) => toogleUnity( e ) }>{state.unity}</button>:null  }
                
                {/* Text Input para el nombre y el Temoeramento */}
                <input type={state.filter === 'Name' || state.filter === 'Temperament'?'text':'number'} placeholder={'Dog ' + state.filter  } onChange = {( e ) => handleUserInputOnChange(e)}></input>
            </div>
            <div>
                
                {/* Toogle Order Type Button */}
                <button type="button" className="orderTypebtn" onClick={ () => toogleOrderType() }> { <img className='arrow-img' src={state.orderType === 'a'?'https://icons.iconarchive.com/icons/icons8/ios7/256/Arrows-Up-icon.png':'https://icons.iconarchive.com/icons/icons8/ios7/256/Arrows-Down-icon.png' }></img>}</button>

                {/* Toogle Order By Button */}
                <button type="button" className="orderBybtn" onClick={ () => toogleOrderBy() }>{state.orderBy === 'w'?<img className="orderby-img" src={'https://icons.iconarchive.com/icons/icons8/ios7/256/Science-Weight-icon.png'}></img>: <div className="orderby-txt">Az</div> }</button>
            
            </div>    

            {/* Search Button */}
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