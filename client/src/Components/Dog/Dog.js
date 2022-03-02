import { useNavigate } from 'react-router'
import './Dog.css'
function Dog ( props ){
    let temperament = props?.temperament?.split(', ')
    let nav = useNavigate()
    let imperialweight = props?.weight?.imperial


    let HandleRedirectDog = ( ) => {
        nav( `../dogs/${props.name}` )
    }

    return (<div>
        <div className={ props.fav === true ? 'dogbackground-fav'  : 'dogbackground'}>

        
            <div className='dogname'>
            { props?.name }
            </div>

            <div className='dog'>


                <img onClick={ ( ) => HandleRedirectDog() } className='imgdog' src={ props?.image?.url } alt=''></img>
                
            </div>

            <div className='dogshortdetail'>


                    {/* {console.log(typeof temperament)} */}

                    <div className='temperament'>
                    {temperament?.map( attribute => {
                        return (<div className='attribute' key={attribute} >
                            {attribute}
                        </div>)
                    } )}
                    </div>

                    <div  className='imperialweight'> 
                    {imperialweight} 
                    </div>

                    <div  className='metricweight'>
                    {props?.weight?.metric}
                    </div>


                </div>

        </div>
    </div>)
}

export default Dog