import { useEffect } from 'react'
import Dog from '../Dog/Dog'
import './DogsRenderer.css'
import { connect } from 'react-redux'
import { getDogs } from '../../redux/actions'
import LoadingCheems from '../../Images/LoadingCheems.png'

// DogsRenderer nos permitirá mapear la lista de perros en nuestro almacenamiento global de redux con ayuda de nuestro componente Dog
function DogsRenderer ( props ) {

    
    // Cada vez que se renderice, va a mandar a traer a los perros al back
    useEffect(()=>{
        if( props.get === true ){
            props.getDogs()  
        }
    },[])

    
    
    
    return(<div>
       

        
        
        <div className='dogs'>

            <div className='errornetwork'>

            {/* Si hay un error, lo muestra  */}
            { props.error !== null ? ['NETWORK ERROR :(', <img src='https://images7.memedroid.com/images/UPLOADED919/6193ba1d3c578.jpeg' /> ] : null}
            </div>

            {/* Mapeo de Dogs en redux */}
            { 
            props?.dogs?.length > 0 ? props?.dogs[0]?.map( dog => <Dog 
                name = { dog.name } 
                image = { dog.image } 
                temperament = { dog.temperament }
                weight = { dog.weight }
                fav = { props.favourites.includes( dog.name ) }
                id = { dog.id}
                
                        // Slice nos permite mostrar una cantidad de perros en pantalla de acuerdo a un limite superior e inferior
                ></Dog>).slice(props.page.lim_i, props.page.lim_s) : (  props?.error=== null  ? <img className='loadingcheems' src={LoadingCheems}></img> : null)
            }


        </div>



    </div>)
}

const mapStateToProps = ( state ) => {
    return {
        dogs: state.displayedDogs,
        allDogs: state.dogs,
        // page: state.page,
        favourites: state.favourites,
        error: state.error

    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        getDogs: ( ) => dispatch( getDogs() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsRenderer)