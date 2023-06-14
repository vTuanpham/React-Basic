import React from 'react'

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
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

        if (!this.state.title || !this.state.salary) {
            alert("Missing required field!")
            return
        }
        console.log("Submit form: ", this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        alert(`Submit job ${this.state.title} success!`)
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="Jname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitle(event)}
                />
                <br />
                <label htmlFor="Sname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br /><br />
                <input
                    type="button"
                    value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }
}

export default AddComponent;