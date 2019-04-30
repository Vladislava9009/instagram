import React, { Component } from 'react';
import styles from './FeedPage.module.css';
import PostItem from '../../components/PostsComponent/PostItem';
import { Link } from 'react-router-dom';
import { getPost } from '../../store/actions';

interface IState {
  postsArr: Array<{
    user: { username: string };
    images: { low_resolution: { url: string } };
    likes: { count: number };
    caption: { text: string; id: number };
    id: string;
  }>;
}
interface IProps {
  setPost: void;
}

export class Feeds extends Component<IProps> {
  state: IState = {
    postsArr: []
  };
  onClick() {}

  componentDidMount() {
    getPost().then(result => this.setState({ postsArr: result }));
  }

  render() {
    return (
      <div className={styles.feed}>
        {this.state.postsArr.map(post => (
          <Link
            to="/post"
            key={
              post.caption === null
                ? '2015939834031738006_10639700024'
                : post.caption.id
            }
          >
            <PostItem
              key={
                post.caption === null
                  ? '2015939834031738006_10639700024'
                  : post.caption.id
              }
              userName={post.user.username}
              url={post.images.low_resolution.url}
              likes={post.likes.count}
              text={post.caption === null ? '' : post.caption.text}
              method={this.onClick}
              id={post.id}
            />
          </Link>
        ))}
      </div>
    );
  }
}
