import React from 'react';

class MyComponent extends React.Component {
    // In a class component, you don't need to declare by let or const, react do it for you !
    // Object declare key:value
    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()  // Stop the website from reloading
        /*
        preventDefault() method cancels the event if it is cancelable, 
        meaning that the default action that belongs to the event will not occur. 
        For example, this can be useful when: Clicking on a "Submit" button, 
        prevent it from submitting a form. Clicking on a link,
        prevent the link from following the URL.
        */

        console.log("Submit form: ", this.state)
        alert(`Submit ${this.state} success!`)
    }


    render() {
        console.log(">>> Call render: ", this.state)    // This will be log everytime the handleOnChangeName is called since it automaticly call re-render
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br /><br />
                    <input
                        type="button"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default MyComponent;