import React,{ Component } from 'react';
import styles from './PostPage.module.css';
import  PostItem  from '../../components/PostsComponent/PostItem';
import { CommentItem } from '../../components/CommentComponent/CommentItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ACCES_TOKEN='10639700024.ea27c77.666afe3f441941ff8815d538ec75069a';
const URL='https://api.instagram.com/v1/media/2015939834031738006_10639700024/comments?access_token='

async function getPost(){
    
        let response= await fetch(`${URL}+${ACCES_TOKEN}`);
        let data = await response.json()
        console.log(data.data)
        return (data.data)
    
}

getPost()

interface IProps{
    post:{
        userName:string;
        url:string;
        likes:number;
    }
   }
interface IState{
    commentArr:Array<{ text:string
                }>
}

class Post extends Component<IProps>{
    state:IState = {
        commentArr: [],
      }
   
    onClick(){
        console.log(this)
    }

    componentDidMount(){
        getPost().then(result => this.setState({ commentArr: result }));
     }

    render(){
         
        let commentItem;

        if(this.state.commentArr===null|| this.state.commentArr.length===0){
            commentItem= <CommentItem text='Комментариев нет'/>
        }else{
            commentItem= this.state.commentArr.map(comment=>(
            <CommentItem text={comment.text}/>
        ))
        }
        return(
            <div className={styles.post}>
                <div className={styles.content}>
                    <PostItem  userName={this.props.post.userName}
                                url={this.props.post.url}
                                likes={this.props.post.likes}
                                text=''
                                
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

export default connect(mapStateToProps, null)(Post);

