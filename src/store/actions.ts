import { SET_CURRENT_POST } from './constsns';

const ACCES_TOKEN='10639700024.ea27c77.666afe3f441941ff8815d538ec75069a';
const URL_COMMENT=`https://api.instagram.com/v1/media/`
const URL='https://api.instagram.com/v1/users/self/media/recent/?access_token='

export async function getComments(id:string){
    
        let response= await fetch(`${URL_COMMENT}${id}/comments?access_token=${ACCES_TOKEN}`);
        let data = await response.json()
        return (data.data)
    
}

export const setPost= (postData:object)=>{
    return {
        type: SET_CURRENT_POST,
        payload: { postData },
    }
}



export async function getPost(){
    
        let response= await fetch(`${URL}+${ACCES_TOKEN}+&count=20`);
        let data = await response.json()
        return (data.data)
    
}