import React from 'react';

const Rainbow = (WrappedComponent) => {

    return (props) => {
        return (
            <div className='container'>
                <div className='card'>
                    <WrappedComponent />
                </div>
            </div>
        );
    };
}

export default Rainbow;