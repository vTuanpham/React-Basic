import React from 'react';

class MyComponent extends React.Component {
    // In a class component, you don't need to declare by let or const, react do it for you !
    // Object declare key:value
    state = {
        name: 'Tuan',
        git: 'vTuanPham',

    }

    /*
    JSX => return only a block of HTML (only one tag)
    Use <></> if don't want to wrap with div
    Or in older version, use <React.Fragment></React.Fragment>
    Neither <></> or <React.Fragment></React.Fragment> will be included in the DOM tree of HTML
    */


    // All handles must be arrow function as the old declare
    // using function must be bind to the class constructor
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnClick = () => {
        console.log('You hit the button !')
        alert("You click me!")  // This handle doesn't use value from input, only activate or not so don't need to pass in event
    }
    // Note: In the JSX attr of the React Element, the function must also be an arrow function like the handle for it

    // Since this.state is an object you can call access it attr by either 
    // state.name or state['name']
    render() {
        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type='text' onChange={(event) => this.handleOnChangeName(event)} />
                    Hello my component!, My name is {this.state['name']}
                </div>
                <div className='second'>
                    This is my github: {this.state.git} !
                </div>
                <div className='third'>
                    <button onClick={() => this.handleOnClick()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;