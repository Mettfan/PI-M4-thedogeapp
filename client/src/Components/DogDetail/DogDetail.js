import { useParams } from "react-router"

import { connect } from 'react-redux'
import Canvas from '../Canvas/Canvas'
import './DogDetail.css'
import { useEffect } from "react"
import { getDogDetail } from "../../redux/actions"
// import  DogsRenderer  from '../DogsRenderer/DogsRenderer.js'
function DogDetail( props ) {
    let params = useParams()
    useEffect(() =>{

        props.getDogDetail(params.id)
        
    }, [])
    let dog = props.dogDetail[0]
    let DogShowed = ( ) => {
        return (<div>
            <div className="namebg">
                <div className="detailname"> { dog?.name }</div>
            </div>
            <div className="dogdetailextended">


            <img className="imagedetailextended" src={ dog?.image?.url }></img>


            <div className="dogextended-description">

                <div className="temperamentatts">

                    { dog?.temperament?.split(', ')?.map( att => {
                        return (<div className="temperament-element">
                            {att}
                        </div>)
                    } ) }
                </div>
                

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

                <div className="lifespandetail">
                    {dog?.life_span}
                </div>




            </div>


                    </div>)
                }
                return (
                <div>
                    
                    
                    <Canvas content = {<div className="dogdetailcanvas-content">
                            <div>
                                <DogShowed></DogShowed>
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