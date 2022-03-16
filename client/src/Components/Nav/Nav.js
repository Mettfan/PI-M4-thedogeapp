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

function Nav(){
    let [ state, setState ] = useState({
        searchBarisVisible: false,
        optionsisVisible: false
    })
    let toogleSearchBar = ( ) => {
        // console.log(state.searchBarisVisible)
        setState({...state, searchBarisVisible: !state.searchBarisVisible})

    }
    let toogleOptions = ( ) => {
        console.log('OPTIONS TOOGLED')
        setState({...state, optionsisVisible: !state.optionsisVisible})
        console.log(state.optionsisVisible)
    }
    let nav = useNavigate()

    return(<div>
        <div className="nav-container">

        
            <div className="nav">

                <div className="leftside">
                    <img className="panecito" src={DogLogoNav} alt=' '></img>
                    <img className="thedogeappnav" src={TheDogeAppNav} alt=' ' onClick={ ( ) => nav('../')}></img>

                </div>
                    

                <div className="rightside"> 
                
                <img className="searchlogo" src={SearchLogo} onClick={ ( ) => toogleSearchBar()} alt=' '></img>
                    <NavLink id="homelink" className={'navlink'} to='/home' >Home</NavLink>

                    <NavLink id="createnewlink" className={'navlink'} to='/create' >Create New</NavLink>


                    <img className="ajusteslogo" src={AjustesLogo} alt=' ' onClick={( ) => toogleOptions( )}></img>

                {/* <NavLink id="exitlink" className={'navlink'} to='/' style={({isActive}) => ({
                    color: isActive?'black':'white',
                    backgroundColor: isActive?' rgb(216, 212, 212) ': "black"

                })}>X</NavLink>     */}

                </div>

            </div>
        </div>

        {state.searchBarisVisible?<div className="searchbarvisible" ><SearchBar></SearchBar> </div>:null}
        
        {state.optionsisVisible? <div className="optionsvisible"> <Options></Options> </div>:null}
    </div>)
}
export default Nav