import React,{ Component } from 'react';
import styles from './PostPage.module.css';
import { PostItem } from '../../components/PostsComponent/PostItem';
import { CommentItem } from '../../components/CommentComponent/CommentItem';


const ACCES_TOKEN='10639700024.ea27c77.666afe3f441941ff8815d538ec75069a';
const URL='https://api.instagram.com/v1/users/self/media/recent/?access_token='

async function getPost(){
    
        let response= await fetch(`${URL}+${ACCES_TOKEN}+&count=9`);
        let data = await response.json()
        console.log(data.data)
        return (data.data)
    
}
interface IState{
    postsArr:Array<{ user: {username:string},
                        images: {low_resolution:{url:string}},
                        likes:{count:number},
                        caption:{text:string}
                    }>
}

export class Post extends Component{
    state:IState = {
        postsArr: [],
      }

    componentDidMount(){
       getPost().then(result => this.setState({ postsArr: result }));
    }

    render(){
        return(
            <div className={styles.post}>
                <div className={styles.content}>
                    <PostItem userName='Влада' url="https://scontent.cdninstagram.com/vp/ea158f1e07e48c5cfe68c45eaca12ed1/5D3A890B/t51.2885-15/e35/p320x320/56459642_450397259028981_4681921818870562930_n.jpg?_nc_ht=scontent.cdninstagram.com" likes={55} text=''/>
                    <button>Back to Feed</button>
                    </div>
                <div className={styles.comment}><CommentItem userName='FFF'text='fff'/></div>
            </div>
        )
    }
}


