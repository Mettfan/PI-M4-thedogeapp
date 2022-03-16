import { useParams } from "react-router"
import { connect } from 'react-redux'
import Canvas from '../Canvas/Canvas'
import './DogDetail.css'
import { useEffect } from "react"
import { getDogDetail } from "../../redux/actions"
import LoadingCheems from '../../Images/LoadingCheems.png'

//El componente DogDetail será renderizado al visitar el url con el id del Dog que se quiere mostrar
function DogDetail( props ) {

    //Definimos 'params' que es lo que nos ayudará a obtener el id en el url
    let params = useParams()

    //Cada vez que se muestre el componente, va a cargar en redux el Dog con el id en los parametros de la url
    useEffect(() =>{

        props.getDogDetail(params.id)
        
    }, [])

    //Guardamos en dog el objeto traido desde redux
    let dog = props.dogDetail[0]

    //Le damos formato y estructura a nuestro componente dentro de DogShowed, que es el componente donde se leerán los datos de nuestro objeto
    let DogShowed = ( ) => {
        return (<div>

            {/* Dog Name */}
            <div className="namebg">
                <div className="detailname"> { dog?.name }</div>
            </div>
            <div className="dogdetailextended">

            {/* Dog Image */}
            <img className="imagedetailextended" src={ dog?.image?.url }></img>

            {/* Dog Details */}
            <div className="dogextended-description">

                {/* Dog Temperament */}
                <div className="temperamentatts">
                    { dog?.temperament?.split(', ')?.map( att => {
                        return (<div className="temperament-element">
                            {att}
                        </div>)
                    } ) }
                </div>
                
                {/* Dog Imperial Atts */}
                <div className="imperialatts">
                    <img className="unity-img-eng" src="https://icons.iconarchive.com/icons/wikipedia/flags/1024/GB-United-Kingdom-Flag-icon.png"></img>
                    
                    <div className="unityMeasure-imp">Lb</div>

                    
                    
                    <div className="numbercontainer">
                        {dog?.weight?.imperial?.split().map( att => {
                            return (<div className="imperial-weight">
                                {att}
                            </div> )
                        })}
                    </div>


                    <div className="unityMeasure-imp">In</div>
                    <div className="numbercontainer">
                        {dog?.height?.imperial?.split().map( att => {
                            return (<div className="imperial-height">
                                {att}
                            </div> )
                        })}
                    </div>

                </div>

                {/* Dog Metric Atts */}
                <div className="metricatts">
                    <img className="unity-img-esp" src="https://icons.iconarchive.com/icons/custom-icon-design/flat-europe-flag/256/Spain-icon.png"></img>
                    <div className="unityMeasure-met">Kg</div>

                    <div className="numbercontainer">
                        {dog?.weight?.metric?.split().map( att => {
                            return (<div className="metric-weight">
                                
                                {att}
                                
                                </div>)
                        })}
                    </div>

                    <div className="unityMeasure-met">Cm</div>
                    <div className="numbercontainer">
                        {dog?.height?.metric?.split().map( att => {
                            return (<div className="imperial-height">
                                {att}
                            </div> )
                        })}
                    </div>
                
                </div>

                


            </div>
                {/* Dog Life Span */}
                <div className="lifespandetail">
                    {dog?.life_span}
                </div>

            </div>
            {/* Aqui termina DogShowed */}
                    </div>)
                }


                //Renderizamos nuestro DogShowed dentro de Canvas
                return (
                <div>
                    
                    
                    <Canvas content = {<div className="dogdetailcanvas-content">
                            <div>
                                {dog?.image!== undefined?<DogShowed></DogShowed>:<img className='loadingcheems' src={LoadingCheems}></img>}
                            </div>
                        </div>}></Canvas>
                </div>
                )
}

const mapStateToProps = ( state ) => {
    return {
        dogs: state.dogs,
        favourites: state.favourites,
        dogDetail: state.dogDetail
    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        getDogDetail: ( id ) => dispatch( getDogDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogDetail)