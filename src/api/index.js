const url = "https://my-venton-backend.herokuapp.com/";
export const getFilters = async() => {
    try{
    const response = await fetch(`${url}filters`);
    const result = await response.json();
    const {filters} = result.data;

    return filters;
    }
    catch(error){
        throw error;
    }
}

export const queryOwner = async(filter) => {
    try{
    const response = await fetch(`${url}?filter=${filter}`);
    const result = await response.json();
    const {owners} = result.data;
    return owners;
    }
    catch(error){
        throw error;
    }
}