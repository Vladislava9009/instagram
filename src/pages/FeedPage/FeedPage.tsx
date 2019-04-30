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
    if (!localStorage.token) {
      window.location.replace(
        'https://www.instagram.com/oauth/authorize/?client_id=aa2fc54b1cdf4310bca1be064b3c5e50&redirect_uri=http://localhost:3000/&response_type=token'
      );
      const ACCESS_TOKEN = window.location.hash
        .substring(1)
        .substr(window.location.hash.substring(1).indexOf('access_token='))
        .split('&')[0]
        .split('=')[1];
      localStorage.setItem('token', ACCESS_TOKEN);
    }

    return (
      <div className={styles.feed}>
        {this.state.postsArr.map(post => (
          <Link
            to="/post"
            key={
              post.caption === null
                ? new Date().getTime().toString()
                : post.caption.id
            }
          >
            <PostItem
              key={
                post.caption === null
                  ? new Date().getTime().toString()
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
