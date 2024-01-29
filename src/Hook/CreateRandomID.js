export const createRandomId = (array = []) => {
    let id = '';
    for(let i=0; i<3; i++){
        let randomNumber = Math.round(Math.random() * 4);
        id += randomNumber;
    }

    for(let i=0; i<array.length; i++){
        if(array[i].id === id){
            return createRandomId(array);
        }
    }
    return id;
}