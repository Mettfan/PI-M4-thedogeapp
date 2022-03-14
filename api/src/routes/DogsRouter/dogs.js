const { default: axios } = require('axios')
const { Router } = require('express')
const { Dog } = require('../../db.js')

let router = Router()

router.get( '/' , ( req, res ) => {

    axios.get( 'https://api.thedogapi.com/v1/breeds' ).then( response => {   
        
        let apiDoglist = response.data.map( dog => {
            
            return {
                id: dog.id,
                name: dog.name,
                image: dog.image,
                temperament: dog.temperament,
                weight: dog.weight
            }
        })

        Dog.findAll().then( (databaseDoglist) => {

            let fullDoglist = databaseDoglist.concat(apiDoglist)
            console.log(fullDoglist)


            if( req.query.name !== undefined ){
            
                fullDoglist = fullDoglist.filter( dog => {
                    return dog.name.includes(req.query.name) 
                })
                if (fullDoglist === undefined){
                   return res.status(200).send({message: 'No se encontró el perro'})
                }
    
            }

            return res.status(200).send(fullDoglist)
        } )


        
        
        // console.log(apiDoglist)
        // console.log(req.query.name)
        // res.status(200).send(apiDoglist)



        // let filteredDoglist = doglist.find( dog => dog.id === Number('30') )
        // console.log(filteredDoglist)

    })

} )

router.get( '/:id' ,  ( req, res ) => {

    
    
    try{
        axios.get( 'https://api.thedogapi.com/v1/breeds' ).then( response => {
        
        Dog.findAll().then( databaseDoglist => {
            let doglist = response.data.concat(databaseDoglist)
            
            let filteredDoglist = doglist.find( dog => dog.id === Number(req.params.id) )
            let result;
            console.log(filteredDoglist)
    
            if(filteredDoglist === undefined){
                result = { message: 'no hay perrito:(' }
                
            }
            else {
                result = [filteredDoglist].map( dog => {
                    return { 
                        name: dog.name, 
                        image: dog.image, 
                        temperament: dog.temperament, 
                        height: dog.height, 
                        weight: dog.weight, 
                        life_span: dog.life_span
                    }
                })
            }
            res.status(200).send(result)
        })




        })



    }
    catch(error){

        console.log(error)

    }

    

} )

let id = 300
router.post( '/' , ( req, res ) => {
    let postedDog = {...req.body, temperament: req.body.temperament.join(', '), id: ++id}
    
    Dog.create(postedDog)

    
    res.status(201).send(postedDog)
})




module.exports = router