import { useState } from "react"
import './CreateDog.css'
import Canvas from "../Canvas/Canvas"
import { handleDognameSubmit, handleDogheightSubmit, handleDogweightSubmit, handleDoglifespanSubmit } from './Validations.js'
function CreateDog ( props ){

    let Form = ( ) => {
        let [state, setState] = useState({
            dogname: '',
            dogheightmax: '',
            dogheightmin: '',
            dogweightmax: '',
            dogweightmin: '',
            doglifespan: '',
            heightunity: 'Cm',
            weightunity: 'Kg'


        })

        let handleOnChange = ( e ) => {
            setState({...state, [e.target.name]: e.target.value })
            // console.log(state[e.target.name] )
        }
        
        let toogleHeightUnity = ( ) => {
            setState({...state, heightunity: state.heightunity === 'Cm'?'In':'Cm'})
        }
        let toogleWeightUnity = ( ) => {
            setState({...state, weightunity: state.weightunity === 'Kg'?'Lb':'Kg'})
        }

        let handleOnSubmit = ( e ) => {
            e.preventDefault()
            let dogname = state.dogname
            let dogheightmax = state.dogheightmax
            let dogheightmin = state.dogheightmin
            let dogweightmax = state.dogweightmax
            let dogweightmin = state.dogweightmin
            let doglifespan = state.doglifespan
            let heightunity = state.heightunity
            let weightunity = state.weightunity
            
            let checks = [
                handleDognameSubmit(dogname),
                handleDogheightSubmit(dogheightmin,dogheightmax),
                handleDogweightSubmit(dogweightmin, dogweightmax),
                handleDoglifespanSubmit(doglifespan)

            ]
            if(!checks.includes(-1)){
                console.log('Subido!')

            }
            else{
                console.log('Revisar Informacion')
            }
            // handleDognameSubmit(dogname) === -1 ? console.log('Name Error'):console.log('Name PASSED')
            // handleDogheightSubmit(dogheightmin,dogheightmax) === -1 ? console.log('Height Error'):console.log('Height PASSED')
            // handleDogweightSubmit(dogweightmin, dogweightmax) === -1 ? console.log('Weight Error'):console.log('Weight PASSED')
            // handleDoglifespanSubmit(doglifespan) === -1 ? console.log('Lifespan Error'):console.log('Lifespan PASSED') 

            // console.log(checks)



            // console.log('Submited name: ' + dogname )
            // console.log('Submited heightmax: ' + dogheightmax + ' ' + heightunity )
            // console.log('Submited heightmin: ' + dogheightmin +  ' ' + heightunity )
            // console.log('Submited weightmax: ' + dogweightmax + ' ' + weightunity)
            // console.log('Submited weightmin: ' + dogweightmin + ' ' + weightunity )
            // console.log('Submited lifespan: ' + doglifespan )
            
        }




        return (<div className="formbg">


            <form onSubmit={ (e) => handleOnSubmit(e) }>
                 <div> CREATE A NEW DOG! </div>
                 <div className="dognameinput">
                    <label name = 'dogname' > Name</label>
                    <input type='text' name="dogname" placeholder="Dog Name..." onChange={ (e) => handleOnChange(e) }></input>
                     
                 </div>
                    <label name = 'dogheight' > Height</label>
                 <div className="dogheightinput">
                    <input className="height-input" type='number' name="dogheightmin" placeholder="Min" onChange={ (e) => handleOnChange(e) }></input>
                    <input className="height-input" type='number' name="dogheightmax" placeholder="Max" onChange={ (e) => handleOnChange(e) }></input>
                    <button type='button' onClick={() => toogleHeightUnity()}>{ state.heightunity }</button>
                    


                 </div>
                    <label name = 'dogweight' > Weight</label>
                 <div className="dogweightinput">
                    {/* <input type='text' name="dogweight" placeholder="Dog Weight..." onChange={ (e) => handleOnChange(e) }></input> */}
                    <input className="weight-input" type='number' name="dogweightmin" placeholder="Min" onChange={ (e) => handleOnChange(e) }></input>
                    <input className="weight-input" type='number' name="dogweightmax" placeholder="Max" onChange={ (e) => handleOnChange(e) }></input>
                    <button type="button" onClick={() => toogleWeightUnity()}> { state.weightunity } </button>

                 </div>
                    <label name = 'doglifespan' > Life Span</label>
                 <div className="doglifespaninput">
                    <input className="lifespan-input" type='number' name="doglifespan" placeholder="Years" onChange={ (e) => handleOnChange(e) }></input>

                 </div>

                 <button className="buttoncreate" type="submit" >CREATE</button>

                    


                {/* {'Dog Name: '+ state.dogname}
                {'Dog Height: '+ state.dogheight}
                {'Dog Weight: '+ state.dogweight}
                {'Dog Lifespan: '+ state.doglifespan} */}


            </form>

        </div>)
    }

    return (<div>
        <div>
            <Canvas content = {<Form></Form>}></Canvas>
        </div>


    </div>)
}
export default CreateDog