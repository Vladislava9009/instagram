import React, { Component} from 'react';


interface IProps{
    userName:string;
    url:string;
    likes:number;
    text:string;
}

export class PostItem extends Component<IProps>{
    render(){
        const {userName,url,likes,text}=this.props
        return(
            <div>
                <h5>{userName}</h5>
                <img src={url} alt=""/>
                <p>Likes-{likes}</p>
                <p>{text}</p>
                <hr/>
            </div>
        )
    }
}


