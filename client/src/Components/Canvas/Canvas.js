import './Canvas.css'
import Nav from '../Nav/Nav'
function Canvas( props ) {
    return (<div className='homerender'>

        


            
        <div className="canvas">
        <Nav></Nav>

            <div className="canvas-content">
            {props?.content}
            </div>
        
        </div>
    
    </div>)
}
export default Canvas