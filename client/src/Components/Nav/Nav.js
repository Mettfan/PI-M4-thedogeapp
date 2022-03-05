import { NavLink } from "react-router-dom";
import './Nav.css'
import DogLogoNav from '../../Images/Panecito.png'
import SearchLogo from '../../Images/SearchLogo.png'
import AjustesLogo from '../../Images/AjustesLogo.png'
import TheDogeAppNav from '../../Images/TheDogeAppNav.png'
import { useState } from 'react'
import SearchBar from "../Tools/SearchBar/SearchBar";

function Nav(){
    let [ state, setState ] = useState({
        searchBarisVisible: false
    })
    let toogleSearchBar = ( ) => {
        // console.log(state.searchBarisVisible)
        setState({...state, searchBarisVisible: !state.searchBarisVisible})

    }

    return(<div>
        <div className="nav-container">

        
            <div className="nav">

                <div className="leftside">
                    <img className="panecito" src={DogLogoNav} alt=' '></img>
                    <img className="thedogeappnav" src={TheDogeAppNav} alt=' '></img>

                </div>
                    

                <div className="rightside"> 
                
                <img className="searchlogo" src={SearchLogo} onClick={ ( ) => toogleSearchBar()} alt=' '></img>
                    <NavLink id="homelink" className={'navlink'} to='/home' >Home</NavLink>

                    <NavLink id="createnewlink" className={'navlink'} to='/create' >Create New</NavLink>


                    <img className="ajusteslogo" src={AjustesLogo} alt=' '></img>

                {/* <NavLink id="exitlink" className={'navlink'} to='/' style={({isActive}) => ({
                    color: isActive?'black':'white',
                    backgroundColor: isActive?' rgb(216, 212, 212) ': "black"

                })}>X</NavLink>     */}

                </div>

            </div>
        </div>

        {state.searchBarisVisible?<div className="searchbarvisible" ><SearchBar></SearchBar> </div>:null}
            
    </div>)
}
export default Nav