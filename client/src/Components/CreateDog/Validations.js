export function handleDognameSubmit( dogname ){
    let regex = /^[a-zA-Z]+$/;
    if(!regex.test(dogname)){
        return -1
    }else{
        
        return dogname
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