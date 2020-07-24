import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../logo.svg';

class Home extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data.slice(0, 10)
                });
            });
    }

    render() {

        const { posts } = this.state;
        const postList = (posts.length) ? (
            posts.map(post => {
                return (
                    <article className='post card' key={post.id}>
                    <img src={logo} alt='Brand Logo' />
                        <div className='card-content'>
                            <Link to={'./'+post.id}><span className='card-title red-text'>{post.title}</span></Link>
                            <p>{post.body}</p>
                        </div>
                    </article>
                )
            })
        ) : (
                <div className='center'> No Posts Yet.</div>
            );

        return (
            <div className='home container'>
                <h4 className='center'>Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home;