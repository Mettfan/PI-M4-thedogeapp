import './Options.css'
import { useState } from 'react'
import { connect } from 'react-redux'
import { toogleSound } from '../../../redux/actions'

//Options contiene opciones globales y rutas extra 
//Nota: Para el PI solo contiene toogleSound
const Options = (props) => {

    //Creamos un estado donde almacenemos el url de la imagen del sonido de acuerdo al estado global de redux
    let [state, setState] = useState({
        imgUrl: props.soundPlay?'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/256/sound-icon.png':'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/256/sound-off-icon.png'
    })

    //Funcion que nos permite setear el estado donde se almacena la url del estado del sonido actual
    let toogleSound = (  ) => {
        console.log('tooglesound')
        setState({
            ...state, imgUrl: state.imgUrl === 'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/256/sound-off-icon.png' ? 'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/256/sound-icon.png' : 'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/256/sound-off-icon.png'
        })
        // Tambien se cambia el estado global 
        props.toogleSound()
    }


    return (<div>
        {/* {console.log('SOUNDPLAY: ' +props.soundPlay)} */}
        
            {/* Renderizamos la imagen con src del estado que creamos y controlamos */}
            <img onClick={ ( ) => toogleSound() } className="button-selector" src={state.imgUrl}></img>
        

    </div>)
}
let mapStateToProps = ( state ) => {
    return {
        soundPlay: state.soundPlay
    }
}
let mapDispatchToProps = ( dispatch ) => {
    return {
        toogleSound: ( ) => dispatch( toogleSound(true) )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Options) 