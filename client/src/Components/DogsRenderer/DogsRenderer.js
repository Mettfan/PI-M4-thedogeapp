import { useEffect } from 'react'
import Dog from '../Dog/Dog'
import './DogsRenderer.css'
import { connect } from 'react-redux'
import { getDogs } from '../../redux/actions'
import LoadingCheems from '../../Images/LoadingCheems.png'
// import  CustomButton  from '../Tools/CustomButton/CustomButton'

function DogsRenderer ( props ) {

    

    useEffect(()=>{
        if( props.get === true ){
            props.getDogs()

            
        }
        
        
        
    },[])

    
    
    
    return(<div>
       

        {/*        
        
                if(  existe   ){
                    return 'algo'
                }
                else{

                    return 'nada'

                }

                existe ? 'algo' : 'nada'
        
        
        
        */}
        
        <div className='dogs'>

            <div className='errornetwork'>

            { props.error !== null ? ['NETWORK ERROR :(', <img src='https://images7.memedroid.com/images/UPLOADED919/6193ba1d3c578.jpeg' /> ] : null}
            </div>
       
        { 
        props?.dogs?.length > 0 ? props?.dogs[0]?.map( dog => <Dog 
            name = { dog.name } 
            image = { dog.image } 
            temperament = { dog.temperament }
            weight = { dog.weight }
            fav = { props.favourites.includes( dog.name ) }
            id = { dog.id}
            
            
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