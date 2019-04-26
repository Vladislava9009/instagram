import React, { Component} from 'react';
import styles from './CommentItem.module.css';


interface IProps{
    text:string;
}

export class CommentItem extends Component<IProps>{
    render(){
        const {text}=this.props
        return(
            <div className={styles.comment}>
                <p>{text}</p>
                
            </div>
        )
    }
}


