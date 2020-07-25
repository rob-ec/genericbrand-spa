import React from 'react';
import Card from '../hoc/Card';

const About = () => {
    return (
        <div className='card-content'>
            <h4 className='center'>About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget eros et purus sodales gravida. Quisque mollis purus a rhoncus mollis. Vivamus finibus nunc lacus, in volutpat dui dapibus at. Quisque nunc lorem, lacinia id mattis vehicula, egestas vitae quam. Nam ac euismod tellus. Integer volutpat magna auctor libero malesuada, sed gravida neque consequat. Quisque ut purus odio. Nullam pellentesque at nulla et maximus. Integer pretium nunc sit amet efficitur egestas. Ut in sapien sapien. Aenean ornare elit nec enim scelerisque posuere. Curabitur scelerisque posuere fermentum. </p>
            <p> Ut quam eros, fringilla id ornare ac, ullamcorper at leo. Aenean eget neque iaculis, rutrum tellus in, mattis nulla. Curabitur in ultricies nisi. Praesent lobortis tempus egestas. Nam mi justo, viverra in dignissim in, semper et augue. Ut ac orci vel quam vehicula ornare. Sed laoreet ante sit amet mi facilisis, in rhoncus neque ullamcorper. Proin nec lectus turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur felis at arcu condimentum, vitae blandit velit euismod. Phasellus ut pellentesque mauris. Nullam a vehicula est. </p>
        </div>
    )
} 

export default Card(About);