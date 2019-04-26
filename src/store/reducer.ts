import { SET_CURRENT_POST } from "./constsns";

const initialState = {
    post:{
        userName:'Vlada',
        url:"https://scontent.cdninstagram.com/vp/ea158f1e07e48c5cfe68c45eaca12ed1/5D3A890B/t51.2885-15/e35/p320x320/56459642_450397259028981_4681921818870562930_n.jpg?_nc_ht=scontent.cdninstagram.com",
        likes:20,
        id:'2015939834031738006_10639700024'
    }
};

export function reducer (state = initialState, action:any) {
    switch (action.type) {
        case SET_CURRENT_POST:
            return {
                ...state,
                post: action.payload.postData,
            };
        
        default:
            return state;
    }
}


