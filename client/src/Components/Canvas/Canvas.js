import './Canvas.css'
import Nav from '../Nav/Nav'

//Canvas es un componente que nos servirá para marcar una zona limite de renderizado 
function Canvas( props ) {
    return (<div className='homerender'>

        


            
        <div className="canvas">

            {/* Agregamos la NavBar */}
            <Nav></Nav>

            <div className="canvas-content">
                {/* Renderizamos el contenido pasado en props */}
                {props?.content}
            </div>
        
        </div>
    
    </div>)
}
export default Canvas