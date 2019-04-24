import React, { Component} from 'react';
import { async } from 'q';

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
                <p>{userName}</p>
                <img src={url} alt=""/>
                <p>{likes}</p>
                <p>{text}</p>
                <hr/>
            </div>
        )
    }
}


