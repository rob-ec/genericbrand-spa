import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        post: null
    };

    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => {
                this.setState({ post: response.data });
            });
    }

    render() {
        const post = this.state.post ? (
            <article className='post'>
                <h4 className='center'>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </article>
        ) : (
                <div className='center'>Loading...</div>
            );

        return (
            <article className='container'>
                { post }
            </article>
        );
    }
}

export default Post;