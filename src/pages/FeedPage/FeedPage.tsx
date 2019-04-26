import React,{ Component } from 'react';
import styles from './FeedPage.module.css';
import  PostItem  from '../../components/PostsComponent/PostItem';
import { Link } from 'react-router-dom';





const ACCES_TOKEN='10639700024.ea27c77.666afe3f441941ff8815d538ec75069a';
const URL='https://api.instagram.com/v1/users/self/media/recent/?access_token='

async function getPost(){
    
        let response= await fetch(`${URL}+${ACCES_TOKEN}+&count=9`);
        let data = await response.json()
        return (data.data)
    
}
interface IState{
    postsArr:Array<{ user: {username:string},
                        images: {low_resolution:{url:string}},
                        likes:{count:number},
                        caption:{text:string,id:number},
                    }>
}
interface IProps{
    setPost:any
   }

export class Feeds extends Component<IProps>{
    state:IState = {
        postsArr: [],
      }
    onClick(){
        console.log(this.props)
       
    }

    componentDidMount(){
       getPost().then(result => this.setState({ postsArr: result }));
    }

    render(){
       
        return(
            <div className={styles.feed}>
                { this.state.postsArr.map(post=>(
               
               <Link to="/post" key={post.caption.id}>
                 <PostItem key={post.caption.id}
                            userName={post.user.username}
                            url={post.images.low_resolution.url}
                            likes={post.likes.count}
                            text={post.caption.text}
                            method={this.onClick}
                           />
               </Link>
               
                ))}    
            </div>
        )
    }
}



