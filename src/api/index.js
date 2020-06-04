const url = "https://my-venton-backend.herokuapp.com/";
const filterUrl = "https://ven10.co/assessment/filter.json";
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
   
export const getFilters = async() => {
    try{
       // console.log('here');
    const response = await fetch(proxyUrl + filterUrl);
         //   console.log(response);
    const result = await response.json();
   // console.log(result);
   // const {filters} = result.data;

    return result;
    }
    catch(error){
        throw error;
    }
}
export const getFilterById = async(id)=> {
    try{
        const response = await fetch(proxyUrl + filterUrl);
        const result = await response.json();
      //  console.log(result);
        const filterPayload = result.filter((filter)=>{
            return filter.id == id;
        });
        return filterPayload[0];
    }
    catch(error){
        throw error;
    }
}

export const queryOwner = async(filter) => {
    try{
    const response = await fetch(`${url}`,{
        method:"GET",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify(filter)

    });
    const result = await response.json();
    const {owners} = result.data;
    return owners;
    }
    catch(error){
        throw error;
    }
}