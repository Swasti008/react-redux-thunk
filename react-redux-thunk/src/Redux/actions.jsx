const SUCCESS ='SUCCESS';
const ERROR = 'ERROR';

export const ShowData=(data)=>{
    return {
        type:SUCCESS,
        payload:data,
   }
}
export  const ShowError=(error)=>{
    return {
        type:ERROR,
        payload:error,
    }
}