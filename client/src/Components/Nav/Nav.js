import { NavLink } from "react-router-dom";
import './Nav.css'
import DogLogoNav from '../../Images/Panecito.png'
import SearchLogo from '../../Images/SearchLogo.png'
import AjustesLogo from '../../Images/AjustesLogo.png'
import TheDogeAppNav from '../../Images/TheDogeAppNav.png'
import { useState } from 'react'
import SearchBar from "../Tools/SearchBar/SearchBar";
import { useNavigate } from 'react-router'
import Options from "../Tools/Options/Options";

// Nav nos permitirá tener control de redirección en la mayoría de rutas y contendrá nuestro botón de búsqueda
function Nav(){

    // Creamos un par de flags para mostrar y quitar los menus
    let [ state, setState ] = useState({
        searchBarisVisible: false,
        optionsisVisible: false
    })

    //toogleSearchBar cambiará el estado visible de la barra de búsqueda
    let toogleSearchBar = ( ) => {
        // console.log(state.searchBarisVisible)
        setState({...state, searchBarisVisible: !state.searchBarisVisible})
    }

    //toogleOptions cambiará el estado visible de la barra de opciones
    let toogleOptions = ( ) => {
        // console.log('OPTIONS TOOGLED')
        setState({...state, optionsisVisible: !state.optionsisVisible})
        // console.log(state.optionsisVisible)
    }

    //Nos ayudará a dirigirnos a la Landing Page
    let nav = useNavigate()

    return(<div>
        <div className="nav-container">

        
            <div className="nav">

                {/* Header con Logo que redirige a Landing Page  */}
                <div className="leftside">
                    <img className="panecito" src={DogLogoNav} alt=' '></img>
                    <img className="thedogeappnav" src={TheDogeAppNav} alt=' ' onClick={ ( ) => nav('../')}></img>

                </div>
                    

                <div className="rightside"> 
                
                    {/* Search Button */}
                    <img className="searchlogo" src={SearchLogo} onClick={ ( ) => toogleSearchBar()} alt=' '></img>

                    {/* Home */}
                    <NavLink id="homelink" className={'navlink'} to='/home' >Home</NavLink>

                    {/* Create */}
                    <NavLink id="createnewlink" className={'navlink'} to='/create' >Create New</NavLink>

                    {/* Options Button */}
                    <img className="ajusteslogo" src={AjustesLogo} alt=' ' onClick={( ) => toogleOptions( )}></img>

                

                </div>

            </div>
        </div>

        {/* Los menus se muestran si su flag es true */}
        {state.searchBarisVisible?<div className="searchbarvisible" ><SearchBar></SearchBar> </div>:null}
        
        {state.optionsisVisible? <div className="optionsvisible"> <Options></Options> </div>:null}
    </div>)
}
export default Nav