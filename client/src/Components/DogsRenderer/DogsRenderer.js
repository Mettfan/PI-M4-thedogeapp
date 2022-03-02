import { useEffect } from 'react'
import Dog from '../Dog/Dog'
import './DogsRenderer.css'
import { connect } from 'react-redux'
import { getDogs } from '../../redux/actions'
// import  CustomButton  from '../Tools/CustomButton/CustomButton'

function DogsRenderer ( props ) {

    

    useEffect(()=>{
        if( props.get === true ){
            props.getDogs()

        }
        
    },[])

    let changePage = (direction) => {
        switch (direction){
            case 'Up': 
                console.log('Up')
                break;
                
            case 'Down':
                console.log('Down')
                break
            default: 
                console.log('None')
        }
    }
    
    
    return(<div>
       

        
        
        <div className='dogs'>
            { props.error !== null ? 'NETWORK ERROR :(' : null}
       
        { 
        props?.dogs[0]?.map( dog => <Dog 
            name = { dog.name } 
            image = { dog.image } 
            temperament = { dog.temperament }
            weight = { dog.weight }
            fav = { props.favourites.includes( dog.name ) }
            key = { dog.name }
            
            ></Dog>).slice(props.page.lim_i, props.page.lim_s)
        }

        {/* Button Up */}
        


        

        </div>



    </div>)
}

const mapStateToProps = ( state ) => {
    return {
        dogs: state.dogs,
        page: state.page,
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