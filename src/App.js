/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPosts as getPostsAction, deletePost as deletePostAction } from './redux/modules/posts';
import { Post } from './components/Post';
import CreatePost from './components/createPost';

function App({ posts, getPosts, deletePost }) {

  useEffect(() => {
    getPosts();
    console.log(getPosts());
  }, []);

  return (
    <div className='App'>
      <CreatePost />
      {posts.length ? posts.map(item => (
        <Post deletePost={deletePost} id={item.id} key={item.id} title={item.title} body={item.body} />
      )) : <h1>Posts not found</h1>}
    </div>
  );
}

export default connect(
  ({ posts }) => ({ posts: posts.posts }),
  {
    getPosts: getPostsAction,
    deletePost: deletePostAction
  }
)(App);
