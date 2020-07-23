import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <div className='container'>
                <h4 className='center'>Home</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate risus sapien, a imperdiet ante consectetur in. Nam tristique at justo vel dignissim. Sed tortor diam, faucibus fringilla lobortis vitae, egestas et massa. Nulla consequat eros eget hendrerit commodo. Integer volutpat faucibus mi ut rhoncus. Donec ultrices quis ante ut auctor. Mauris efficitur leo magna, ut faucibus libero ultrices a. Praesent dictum mauris ut ipsum tempor efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ut faucibus urna.
                </p>
            </div>
        )
    }
}

export default Home;