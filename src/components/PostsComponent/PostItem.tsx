import React, { Component} from 'react';
import styles from './Posts.module.css';
import { setPost } from '../../store/actions';
import { connect } from 'react-redux';




interface IProps{
    userName:string;
    url:string;
    likes:number;
    text:string;
    id:string;
    method?:any;
    setPost:any;
}
interface IState{
    post:{
        userName:string,
        url:string,
        likes:number;
        id:string;
    }
    
}


class PostItem extends Component<IProps>{
    state:IState = {
        post:{
            userName:this.props.userName,
            url:this.props.url,
            likes:this.props.likes,
            id:this.props.id
        },
      }

      onClick(){
        this.props.setPost(this.state.post)
    }
  
    render(){
        const {userName,url,likes,text}=this.props
        return(
            <div className={styles.post} onClick={this.onClick.bind(this)} >
                <h5>{userName}</h5>
                <img src={url} alt=""/>              
                <p>Likes-{likes}</p>
                <p>{text}</p>
                <hr/>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => ({
    post: state.post,
  });
  const mapDispatchToProps = {
    setPost,
  };

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);


