import './Home.css'
import Canvas from '../Canvas/Canvas'
import DogsRenderer from '../DogsRenderer/DogsRenderer'
// import CustomButton from '../Tools/CustomButton/CustomButton'
import { pageUp, pageDown } from '../../redux/actions'
import { connect } from 'react-redux'
import Flecha from '../../Images/Flecha.png'

function Home( props ) {
    let changePage = (direction) => {
        switch (direction){
            case 'Up': 
                // console.log('Up')
                // console.log(props.page)
                props.pageUp()
                document.documentElement.scrollTop = 0
                
                break;
                
            case 'Down':
                // console.log('Down')
                // console.log(props.page)
                props.pageDown()
                document.documentElement.scrollTop = 0
                break;
            default: 
                console.log('None')
        }
    }
    return (<div>

        

        <Canvas content = {<DogsRenderer get = {false}  ></DogsRenderer>}></Canvas>
        {/* <div id="canvas">

            <div id="canvas-content">
            Home
            </div>
        
        </div> */}
        <button className='flechabgbtn' id='rightarrow' onClick={()=> changePage('Up')}>
        

        <img  className='flecha' src={Flecha} alt=' '></img>
        

      

        </button>


        
        <button className='flechabgbtn' id='leftarrow' onClick={()=> changePage('Down') }>



        <img  className='flecha' src={Flecha} alt=' '></img>

            

       
        </button>
      
        
    
    </div>)
}

const mapStateToProps = ( state ) => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        pageUp: ( ) => dispatch(pageUp(0,8)),
        pageDown: ( ) => dispatch(pageDown(0,8))
    }

}


export default connect( mapStateToProps,mapDispatchToProps )(Home)