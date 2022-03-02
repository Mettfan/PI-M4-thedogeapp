import { NavLink } from "react-router-dom";
import './Nav.css'
import DogLogoNav from '../../Images/Panecito.png'
import SearchLogo from '../../Images/SearchLogo.png'
import AjustesLogo from '../../Images/AjustesLogo.png'
import TheDogeAppNav from '../../Images/TheDogeAppNav.png'

function Nav(){

    return(<div>
        <div className="nav-container">

        
            <div className="nav">

                <div className="leftside">
                    <img className="panecito" src={DogLogoNav}></img>
                    <img className="thedogeappnav" src={TheDogeAppNav}></img>

                </div>
                    

                <div className="rightside"> 
                
                <img className="searchlogo" src={SearchLogo}></img>
                    <NavLink id="homelink" className={'navlink'} to='/home' >Home</NavLink>

                    <NavLink id="createnewlink" className={'navlink'} to='/create' >Create New</NavLink>


                    <img className="ajusteslogo" src={AjustesLogo} ></img>

                {/* <NavLink id="exitlink" className={'navlink'} to='/' style={({isActive}) => ({
                    color: isActive?'black':'white',
                    backgroundColor: isActive?' rgb(216, 212, 212) ': "black"

                })}>X</NavLink>     */}

                </div>

            </div>
        </div>
            
    </div>)
}
export default Nav