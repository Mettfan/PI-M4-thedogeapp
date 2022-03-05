import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import './Dog.css'
function Dog ( props ){
    let nav = useNavigate()
    let temperament = props?.temperament?.split(', ')
    let imperialweight = props?.weight?.imperial?.split(' - ')
    let metricweight = props?.weight?.metric?.split( ' - ')
    let imperialheight = props?.height?.imperial?.split(' - ')
    let metricheight = props?.height?.metric?.split( ' - ')


    let HandleRedirectDog = ( ) => {
        nav( `../dogs/${props.name}` )
    }

    return (<div>
        <div className={ props.fav === true ? 'dogbackground-fav'  : 'dogbackground'}>

            {/* Nombre del perro en props.name */}
            <div className='dogname'>
                <Link className='linkdogname' to={'/dogs/'+props?.name}>{ props?.name }</Link>
            
            </div>

            <div className='dog'>

                {/* Redirigimos a los detalles del perro al clickear la imagen */}
                <img onClick={ ( ) => HandleRedirectDog() } className='imgdog' src={ props?.image?.url } alt=''></img>
                
            </div>
            


            <div className='dogalldetail'>

                <div className='dogshortdetail'>


                    {/* Mapeamos cada uno de los atributos */}


                        {/* Temperamento */}
                    <div id='temperament'>
                    {temperament?.map( attribute => {
                        return (<div className='attribute' key={attribute} >
                            {attribute}
                        </div>)
                    } )}
                    </div>

                        {/* Peso en Sistema Inglés */}
                    <div  id='imperialweight'>
                        <div className='lb'>
                        {'Lb'} 
                        </div>

                        {imperialweight?.map( weight => {
                            return ( <div className='weight-description' key={weight} >
                                {weight}
                            </div>)
                        } )}
                    </div>
                    

                    {/* Peso en Sistema Metrico */}
                    <div  id='metricweight'>
                        <div className='kg'>
                            {'Kg'}
                        </div>
                        {metricweight?.map( weight => {
                            return ( <div className='weight-description' key={weight}>
                                {weight}
                            </div>)
                        } )}




                
                    </div>

                    {/* Iconos del peso */}
                    <div className='cheems'>
                        
                        <img className='icon-cheemschiquito' src="https://cdn131.picsart.com/328254786060211.png" alt=' '></img>
                        <img className='icon-cheemsgrandote' src='https://plantillasdememes.com/img/plantillas/perro-fortachon-musculoso-perro-sentado01590647770.png' alt=' '></img>
                        
                    </div>

                    {/* Aqui termina dogshortdetail */}
    
                </div>
                
                {/* Aqui comienza Extended Details y solo se renderiza si su opcion es pasada como 'true' */}
                {props.extendeddetails === true ?(<div className='dogextendeddetails'>
                    
                    {/* <div className=''><div> */}
                    
                    {'imperial: '+imperialheight}
                    {'metric: '+metricheight}
                    {'lifespan: '+props?.life_span}

                    

                </div>) : null }


            </div>
            

        </div>
    </div>)
}

export default Dog