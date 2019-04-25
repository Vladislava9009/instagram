import React, { Component} from 'react';
import styles from './CommentItem.module.css';


interface IProps{
    userName:string;
    text:string;
}

export class CommentItem extends Component<IProps>{
    render(){
        const {userName,text}=this.props
        return(
            <div className={styles.comment}>
                <p>{userName}{text}</p>
                
            </div>
        )
    }
}


