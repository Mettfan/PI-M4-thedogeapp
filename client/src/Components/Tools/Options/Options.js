import './Options.css'
import { useState } from 'react'
import { connect } from 'react-redux'
import { toogleSound } from '../../../redux/actions'
const Options = (props) => {
    let [state, setState] = useState({
        imgUrl: props.soundPlay?'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/256/sound-icon.png':'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/256/sound-off-icon.png'
    })
    let toogleSound = (  ) => {
        console.log('tooglesound')
        setState({
            ...state, imgUrl: state.imgUrl === 'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/256/sound-off-icon.png' ? 'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/256/sound-icon.png' : 'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/256/sound-off-icon.png'
        })
        props.toogleSound()
    }
    return (<div>
        {console.log('SOUNDPLAY: ' +props.soundPlay)}
        
        
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