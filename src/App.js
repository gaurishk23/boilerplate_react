import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component{
    render(){
        return(
            <div>
                <h2>React.js Boilerplate</h2>
                <p>Using Webpack 4</p>
            </div>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));