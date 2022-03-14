import { useEffect, useState } from "react"
import './CreateDog.css'
import Canvas from "../Canvas/Canvas"
import { handleDognameSubmit, handleDogheightSubmit, handleDogweightSubmit, handleDoglifespanSubmit } from './Validations.js'
import axios from "axios"


//Create Dog nos funcionará como la pagina donde se renderiza el formulario de creacion 
function CreateDog ( props ){

    

    //Crearemos un componente llamado Form que situaremos en la pagina Create Dog
    let Form = ( ) => {

        //Definimos el estado del Form
        let [state, setState] = useState({

            //Una variable por cada atributo leido
            dogname: '',
            dogheightmax: '',
            dogheightmin: '',
            dogweightmax: '',
            dogweightmin: '',
            doglifespan: '',
            heightunity: 'Cm',
            weightunity: 'Kg',
            temperament: [],
            temperaments: []



        })

        useEffect(  () => { 
             axios.get('http://localhost:3001/temperament').then(  response => {
                setState( {...state, temperament: response.data} )
                console.log(state.temperament)
                
            })
         }, [])
    

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
        let handleTemperamentOnChange = (e) => {
            let dogTemperamentlist = new Set(state.temperaments) 
            dogTemperamentlist.add(e.target.value)
            dogTemperamentlist = Array.from( dogTemperamentlist )
            console.log('CHANGE')
            setState({...state, temperaments: dogTemperamentlist})
            // setState({
            //     ...state,
            //     temperament: state.temperament.push(e.target.value)
            // })
            console.log(dogTemperamentlist)
            console.log(state.temperaments)

        }
        let deleteTemperament = (e) => {
            let dogTemperamentlist = state.temperaments
            dogTemperamentlist.pop()

            setState({...state, temperaments: dogTemperamentlist})
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
            let temperaments = state.temperaments
            
            let checks = [
                handleDognameSubmit(dogname),
                handleDogheightSubmit(dogheightmin,dogheightmax),
                handleDogweightSubmit(dogweightmin, dogweightmax),
                handleDoglifespanSubmit(doglifespan),
                

            ]
            if(!checks.includes(-1)){
                let height_measure =  heightunity === 'In' ? 'imperial': 'metric'
                let weight_measure =  weightunity === 'Lb' ? 'imperial': 'metric'
                
                let formattedPost = { 
                    name: dogname, 
                    height: { 
                        [height_measure]:`${dogheightmin} - ${dogheightmax}` 
                    },
                    weight: { 
                        [weight_measure]:`${dogweightmin} - ${dogweightmax}` 
                    },
                    life_span: doglifespan,
                    temperament: temperaments
                }

                axios.post('http://localhost:3001/dogs', formattedPost )
                console.log('Subido!')
                console.log(formattedPost)


            }
            else{
                console.log('Revisar Informacion')
            }
            handleDognameSubmit(dogname) === -1 ? console.log('Name Error'):console.log('Name PASSED')
            handleDogheightSubmit(dogheightmin,dogheightmax) === -1 ? console.log('Height Error'):console.log('Height PASSED')
            handleDogweightSubmit(dogweightmin, dogweightmax) === -1 ? console.log('Weight Error'):console.log('Weight PASSED')
            handleDoglifespanSubmit(doglifespan) === -1 ? console.log('Lifespan Error'):console.log('Lifespan PASSED') 

            console.log(checks)



            // console.log('Submited name: ' + dogname )
            // console.log('Submited heightmax: ' + dogheightmax + ' ' + heightunity )
            // console.log('Submited heightmin: ' + dogheightmin +  ' ' + heightunity )
            // console.log('Submited weightmax: ' + dogweightmax + ' ' + weightunity)
            // console.log('Submited weightmin: ' + dogweightmin + ' ' + weightunity )
            // console.log('Submited lifespan: ' + doglifespan )
            
        }




        return (<div className="formbg">
            {console.log(state.temperament)}

            <form onSubmit={ (e) => handleOnSubmit(e) }>

                 <div> CREATE A NEW DOG! </div>

                 {/* Name Input */}
                 <div className="dognameinput">
                    <label name = 'dogname' > Name</label>
                    <input type='text' name="dogname" placeholder="Dog Name..." onChange={ (e) => handleOnChange(e) }></input> 
                 </div>

                 {/* Height Input */}
                    <label name = 'dogheight' > Height</label>
                        <div className="dogheightinput">
                            <input className="height-input" type='number' name="dogheightmin" placeholder="Min" onChange={ (e) => handleOnChange(e) }></input>
                            <input className="height-input" type='number' name="dogheightmax" placeholder="Max" onChange={ (e) => handleOnChange(e) }></input>
                            <button type='button' onClick={() => toogleHeightUnity()}>{ state.heightunity }</button>
                        </div>
                    

                {/* Weight Input */}
                    <label name = 'dogweight' > Weight</label>
                        <div className="dogweightinput">
                            <input className="weight-input" type='number' name="dogweightmin" placeholder="Min" onChange={ (e) => handleOnChange(e) }></input>
                            <input className="weight-input" type='number' name="dogweightmax" placeholder="Max" onChange={ (e) => handleOnChange(e) }></input>
                            <button type="button" onClick={() => toogleWeightUnity()}> { state.weightunity } </button>
                        </div>

                {/* Lifespan Input */}
                    <label name = 'doglifespan' > Life Span</label>
                        <div className="doglifespaninput">
                            <input className="lifespan-input" type='number' name="doglifespan" placeholder="Years" onChange={ (e) => handleOnChange(e) }></input>
                        </div>

                {/* Button Create */}
                    <button className="buttoncreate" type="submit" >CREATE</button>


                {/* Temperament Input */}
                    <select name = 'temperament' id = 'temperament-input'onChange={ (e) => handleTemperamentOnChange(e)}>
                        {state?.temperament?.length > 0 ?state.temperament.map( (temperament) => {

                            return (
                                <option value={temperament?.name} >{temperament?.name}</option> 

                            )
                        
                        } ) : null}
                    </select>
                    

            </form>
            {state.temperaments?.map( temperament => {
                return (<div name= {temperament} onClick={ (e) => deleteTemperament(e)}>{temperament}</div>)
            })}

        </div>)
    }


    //Se renderiza el Canvas conteniendo a nuestro Form ( Recordemos que canvas es un componente que nosotros creamos)
    return (<div>
        <div>
            <Canvas content = {<Form></Form>}></Canvas>
        </div>
        


    </div>)
}
export default CreateDog