import { Link } from 'react-router-dom'
import TheDogeApp from '../../Images/TheDogeApp.png'
import './LandingPage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function LandingPage(props){
    let [ state, setState ] = useState({
        btnIsVisible: props.btnIsVisible,
        toggleBtn: (isVisible) => setState({...state, btnIsVisible: !state.btnIsVisible}),
        isfading: false
        
    })
    function handleClick(e){
        state.toggleBtn(state.btnIsVisible)
        setState({...state, isfading: true})
        

        
        
    }
    let nav = useNavigate()
    function HandleRedirect(){


        setTimeout(()=>{
            nav('../home')

        },1000)
    }
    return (<div> 
        
        <div className='home'>

        {console.log(window.location.href)}
        <img src= { TheDogeApp } className={state.isfading?'shiba':'shibagain'}></img>
        {/* <button id='iniciar'> INICIAR </button> */}
        {   state.btnIsVisible ? <button  onClick={(e)=> handleClick(e)} id= 'iniciar' to='/home' >  START </button>: null }
        {state.isfading ? HandleRedirect(): console.log('not is fading') }
        </div> 
        
        </div>
        )
}
export default LandingPage