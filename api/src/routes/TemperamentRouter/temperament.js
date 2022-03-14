const { default: axios } = require('axios')
let { Router } = require('express')
let router = Router()
const { Temperament } = require('../../db.js')

// var id = 0;
router.get( '/', ( req, res ) => {
    
    axios.get( 'https://api.thedogapi.com/v1/breeds' ).then( ( response ) => {
        let temperaments = new Set()
        let setTemperaments = () =>  response.data.forEach( dog => {
            dog?.temperament?.split(', ')?.forEach( temperament => {
                temperaments.add(temperament)
            } )
        })
        setTemperaments()
        let temperamentList = Array.from(temperaments)

        temperamentList = temperamentList.map( temperament => {
            return { 
                name: temperament,
                // id: ++id
            }
        })
        return temperamentList

        
    }).then( async ( temperamentList ) => {
        let temperaments = await Temperament.findAll()
        console.log(temperaments)
        Temperament.bulkCreate(temperamentList).then( ( response ) => {
            res.status(200).send(response)
        }).catch( error => {
            Temperament.findAll().then( response => {
                
                res.status(200).send(response)
            })
        })
        // temperamentList.forEach( temperament => {
        //     console.log( temperament )
        //     Temperament.create( temperament )
            
            
        // })
        
        



    })


})

module.exports = router