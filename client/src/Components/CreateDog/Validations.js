import axios from "axios";

//Creamos una funcion por cada validacion de campo que creamos
export const handleDognameSubmit = async ( dogname ) => {
    //Usamos una regex para verificar que solo contenga letras
    let regex = /^[a-zA-Z]+$/;

    //
    if(!regex.test(dogname)){
        //Recordemos que nuestra flag será -1 para arrojar errores en nuestra funcion
        return -1
    }else{

        //Ahora verificaremos que no exista en la base de datos pero esto también nos servirá para retrasar la creación y permitir ver cuando el perro es agregado despues de ser redireccionado
        await axios.get('http://localhost:3001/dogs').then( response => {
            let doglist = response.data
            let result = doglist.find( dog => {
                                return dog.name === dogname
                            })
            if(result){

                return -1

            }
            else{
                return dogname
            }
        })

        
        
    }
}
export function handleDogheightSubmit( dogheightmin, dogheightmax){

    if (dogheightmin >= dogheightmax || dogheightmin <= 0 || dogheightmax <= 0){
        return -1
    }
    else{
        return [dogheightmin, dogheightmax]

    }
}
export function handleDogweightSubmit(dogweightmin, dogweightmax){
    if (dogweightmin >= dogweightmax || dogweightmin <= 0 || dogweightmax <= 0 ){
        return -1
    }
    else{
        return [dogweightmin, dogweightmax]

    }
}
export function handleDoglifespanSubmit(doglifespan){
    if(doglifespan <= 0 || doglifespan > 27 ){
        return -1
    }
    else{
        return doglifespan
    }
}