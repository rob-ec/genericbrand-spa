import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';
import logo from '../logo.svg';

class Home extends Component {

    render() {
        console.log(this.props);
        const { posts } = this.props;
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps)(Home);