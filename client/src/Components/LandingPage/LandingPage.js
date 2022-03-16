// import { Link } from 'react-router-dom'
import TheDogeApp from '../../Images/TheDogeApp.png'
import './LandingPage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// LandindPage se renderiza en nuestra ruta base '/' 
function LandingPage(props){

    // Creamos un estado con flags para poder realizar un par de animaciones 
    let [ state, setState ] = useState({
        btnIsVisible: props.btnIsVisible,
        toggleBtn: (isVisible) => setState({...state, btnIsVisible: !state.btnIsVisible}),
        isfading: false
    })

    //Creamos una funcion que manejara el click en nuestro boton START y nos permitirá animarlo
    function handleClick(e){
        state.toggleBtn(state.btnIsVisible)
        setState({...state, isfading: true})
    }

    // Estas funciones nos permitirán ser dirigidos a la ruta '/home'
    let nav = useNavigate()
    function HandleRedirect(){
        setTimeout(()=>{
            nav('../home')

        },1000)
    }

    return (<div> 
        
        <div className='home'>

        {/* Imagen Logo */}
        <img src= { TheDogeApp } className={state.isfading?'shiba':'shibagain'} alt=' '></img>
        
        {/* Boton Start */}
        {   state.btnIsVisible ? <button  onClick={(e)=> handleClick(e)} id= 'iniciar' to='/home' >  START </button>: null }
        {state.isfading ? HandleRedirect(): console.log('not is fading') }
        </div> 
        
        </div>
        )
}
export default LandingPage