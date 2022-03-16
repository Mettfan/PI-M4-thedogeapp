import { useNavigate } from 'react-router'
import './Dog.css'

//El componente Dog nos permite crear la estructura de un perro con los datos necesarios en la ruta principal ( Home )
function Dog ( props ){

    //Definimos un Hook para navegar hacia DogDetail
    let nav = useNavigate()

    //Guardamos y separamos cada atributo en una lista para cada uno
    let temperament = props?.temperament?.split(', ')
    let imperialweight = props?.weight?.imperial?.split(' - ')
    let metricweight = props?.weight?.metric?.split( ' - ')
    let imperialheight = props?.height?.imperial?.split(' - ')
    let metricheight = props?.height?.metric?.split( ' - ')

    // Definimos la función que nos dirigirá a la pagina de DogDetail
    let HandleRedirectDog = ( ) => {
        if(props.id){
            nav( `../dogs/${props.id}` )
        }
    }


    return (<div>


        <div className={ props.fav === true ? 'dogbackground-fav'  : 'dogbackground'}>

            {/* Dog Name */}
            <div className='dogname'>
                <div className='linkdogname' onClick={() => HandleRedirectDog()}>{ props?.name }</div>
            </div>

            {/* Dog Image */}
            <div className='dog'>
                {/* Redirigimos a los detalles del perro al clickear la imagen */}
                <img onClick={ ( ) => HandleRedirectDog() } className='imgdog' src={ props?.image?.url } alt=''></img>
            </div>
            

            {/* Dog  Details */}
            <div className='dogalldetail'>

                <div className='dogshortdetail'>


                    {/* Mapeamos cada uno de los atributos */}


                        {/* Temperamento */}
                    <div id='temperament'>
                    { temperament?.length > 0 ? temperament?.map( attribute => {
                        return (<div className='attribute'  >
                            {attribute}
                        </div>)
                    } )  : 'Useless Dog' }
                    </div>

                        {/* Peso en Sistema Inglés */}
                    <div  id='imperialweight'>
                        <div className='lb'>
                        {'Lb'} 
                        </div>

                        {imperialweight?.map( weight => {
                            return ( <div className='weight-description'  >
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
                            return ( <div className='weight-description' >
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
                
                


            </div>
            

        </div>
    </div>)
}

export default Dog