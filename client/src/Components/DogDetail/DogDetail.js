import { useParams } from "react-router"

import { connect } from 'react-redux'
import Canvas from '../Canvas/Canvas'
import './DogDetail.css'
import { useEffect } from "react"
import { getDogDetail } from "../../redux/actions"
function DogDetail( props ) {
    let params = useParams()
    useEffect(() =>{

        props.getDogDetail(params.id)
        
    }, [])
    let dog = props.dogDetail[0]

    return (
    <div>
        
        {console.log(props.dogDetail)}
        <Canvas ></Canvas>

        <div className="dogdetailextended">

            <div className="namedetail">
                { dog?.name }
            </div>

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
                    <div>Lb</div>
                    {dog?.weight?.imperial?.split(' - ').map( att => {
                        return (<div className="imperial-weight">
                            {att}
                        </div> )
                    })}

                    <div>In</div>
                    {dog?.height?.imperial?.split(' - ').map( att => {
                        return (<div className="imperial-height">
                            {att}
                        </div> )
                    })}

                </div>


                <div className="metricatts">
                    <div>Kg</div>
                    {dog?.weight?.metric?.split(' - ').map( att => {
                        return (<div className="metric-weight">
                            
                            {att}
                            
                            </div>)
                    })}
                    <div>Cm</div>
                    {dog?.height?.metric?.split(' - ').map( att => {
                        return (<div className="imperial-height">
                            {att}
                        </div> )
                    })}
                
                </div>

                


            </div>

                <div className="lifespandetail">
                    {dog?.life_span}
                </div>




        </div>

        
        




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