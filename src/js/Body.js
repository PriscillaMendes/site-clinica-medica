import React from 'react'

import Home from './Home.js';
export default class Body extends React.Component {
    render() {
        return (
            <div className="mt-4">
                {<Home />
                }
            </div>

        );
    }
}