import React,{ Component } from 'react';
import styles from './PostPage.module.css';
import  PostItem  from '../../components/PostsComponent/PostItem';
import { CommentItem } from '../../components/CommentComponent/CommentItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getComments} from '../../store/actions'



interface IProps{
    post:{
        userName:string;
        url:string;
        likes:number;
        id:string
    }
   }
interface IState{
    commentArr:Array<{ text:string, id:string
                }>
}

class Post extends Component<IProps>{
    state:IState = {
        commentArr: [],
      }
   
    onClick(){
        
    }

    componentDidMount(){
        getComments(this.props.post.id).then(result => this.setState({ commentArr: result }));
     }

    render(){
         
        let commentItem;

        if(this.state.commentArr===null|| this.state.commentArr.length===0){
            commentItem= <CommentItem text='Комментариев нет'/>
        }else{
            commentItem= this.state.commentArr.map(comment=>(
            <CommentItem key={comment.id}text={comment.text}/>
        ))
        }
        return(
            <div className={styles.post}>
                <div className={styles.content}>
                    <PostItem  userName={this.props.post.userName}
                                url={this.props.post.url}
                                likes={this.props.post.likes}
                                text=''
                                id={this.props.post.id}
                               />
                    <Link id={styles.button} to="/">Back to Feed</Link>
                    </div>
                <div className={styles.comment}>
                    {commentItem}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state:any) => ({
    post: state.post,
  });

export default connect(mapStateToProps, {getComments})(Post);

