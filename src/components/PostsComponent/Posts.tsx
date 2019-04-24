import React,{ Component } from 'react';
import styles from './Posts.module.css';
import { PostItem } from './PostItem';
import { async } from 'q';

const ACCES_TOKEN='10639700024.ea27c77.666afe3f441941ff8815d538ec75069a';
const URL='https://api.instagram.com/v1/users/self/media/recent/?access_token='

async function getPost(){
    
        let response= await fetch(`${URL}+${ACCES_TOKEN}`);
        let data = await response.json()
        console.log(data)
        return (data.data)
    
}





export class Posts extends Component{
    componentDidMount(){
       getPost().then(res=>console.log(res.id))
    }

    render(){
        // const {appointents}=this.props.appointents;
        // // console.log(appointents)
        // let appointmentItem;
        // posts=  this.data.map(appointent=>(
        //     <VisitItem key={appointent.index} appointent={appointent}/>
        // ))
        // }
        return(
            <div className={styles.feed}>
                 <PostItem userName='vladislava_9009' 
                            url="https://scontent.cdninstagram.com/vp/ea158f1e07e48c5cfe68c45eaca12ed1/5D3A890B/t51.2885-15/e35/p320x320/56459642_450397259028981_4681921818870562930_n.jpg?_nc_ht=scontent.cdninstagram.com"
                            likes={123}
                            text='gchgc'/>
                    
                   
            </div>
        )
    }
}


