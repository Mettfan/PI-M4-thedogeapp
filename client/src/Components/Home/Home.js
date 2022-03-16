import './Home.css'
import { useEffect, useState } from 'react'
import Canvas from '../Canvas/Canvas'
import DogsRenderer from '../DogsRenderer/DogsRenderer'
// import CustomButton from '../Tools/CustomButton/CustomButton'
import { pageUp, pageDown, getDogs } from '../../redux/actions'
import { connect } from 'react-redux'
import Flecha from '../../Images/Flecha.png'


//Crearemos nuestro componente Home
function Home( props ) {

    //Cada vez que sea iniciado se obtendrá la información de la base de datos 
    useEffect(( )=> {
        props.getDogs()
        // console.log(props.dogs)
        // console.log('DOGSGOT');
    }, [])

    let [ state, setState ] = useState({
        page: {
            lim_i: 0,
            lim_s: 8,
            dogsxview: 8
        }
    })

    
    //Definimos las funciones que conectarán nuestros botones de cambio de Página con la accion creada en redux
    let changePage = (direction) => {

        let page = state.page
        let dogsxview = state.page.dogsxview

        //De acuerdo al parametro, ejecutaremos una funcion u otra para cambiar página
        switch (direction){
            case 'Up': 

                // Antes de cambiar la página debemos observar que las siguientes 8 paginas paginas existan 

                // console.log('Up')
                // console.log(props.page)
                // props.pageUp(0)
                setState({...state, page: { ...page, lim_i: page.lim_i + dogsxview , lim_s: page.lim_s + dogsxview }})

                //Esto nos permite regresar al top de la página una vez cambiada 
                document.documentElement.scrollTop = 0
                
                break;
                
            case 'Down':
                // console.log('Down')
                // console.log(props.page)
                // props.pageDown(0)

                setState({...state, page: { ...page, lim_i: page.lim_i - dogsxview, lim_s: page.lim_s - dogsxview }})
                document.documentElement.scrollTop = 0

                break;

            default: 
                console.log('None')
        }
    }
    return (<div>

        
        {/* El Canvas es un componente que nosotros creamos para poder crear un lienzo que correspponda al contenido que queremos renderizar  */}
        <Canvas content = {<DogsRenderer get = {false} page = {{lim_i: state.page.lim_i, lim_s: state.page.lim_s}}  ></DogsRenderer>}></Canvas>
        

        {/* Boton para subir pagina */}
        {(state.page.lim_s < props.dogs[0]?.length-1) ? <button className='flechabgbtn' id='rightarrow' onClick={()=> changePage('Up')}> <img  className='flecha' src={Flecha} alt=' '></img></button> : null }
        
        
        {/* Boton para bajar pagina */}
        {state.page.lim_i > 0 ? <button className='flechabgbtn' id='leftarrow' onClick={()=> changePage('Down') }><img  className='flecha' src={Flecha} alt=' '></img></button> : null }
        
      
        
    
    </div>)
}

const mapStateToProps = ( state ) => {
    return {
        page: state.page,
        dogs: state.dogs
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        pageUp: ( ) => dispatch(pageUp(0,8)),
        pageDown: ( ) => dispatch(pageDown(0,8)),
        getDogs: ( ) => dispatch(getDogs())
    }

}


export default connect( mapStateToProps,mapDispatchToProps )(Home)