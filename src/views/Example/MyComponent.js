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


    // Since this.state is an object you can call access it attr by either 
    // state.name or state['name']

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

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
            </>
        )
    }
}

export default MyComponent;