import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    // In a class component, you don't need to declare by let or const, react do it for you !
    // Object declare key:value
    state = {
        arrJobs: [
            { id: 'SE160561', title: 'Head ML', salary: '500' },
            { id: 'SE160562', title: 'Head DA', salary: '400' },
            { id: 'SE160563', title: 'Head QA', salary: '390' }

        ]
    }

    addNewJob = (job) => {
        console.log("Check job from parent: ", job)
        this.setState({
            // [] means init an array ... means copy all elements and add it to the list,
            // job at the end mean append the job we want to add at the end
            arrJobs: [...this.state.arrJobs, job] // Spread syntax, [...arr] is just like arr.slice()
        })
        // let currentJobs = this.state.arrJobs
        // currentJobs.push(job)          // Js syntax
        // this.setState({
        //     arrJobs: currentJobs
        // })
    }

    delJob = (job) => {
        console.log("Check job from parent: ", job)
        // this.setState({
        //     // [] means init an array ... means copy all elements and add it to the list,
        //     // job at the end mean append the job we want to add at the end
        //     arrJobs: [...this.state.arrJobs] // Spread syntax, [...arr] is just like arr.slice()

        // })
        // let currentJobs = this.state.arrJobs
        // currentJobs.pop(job.id)          // Js syntax
        // this.setState({
        //     arrJobs: currentJobs
        // })
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id) // Filter job that don't match the job id to removed
        this.setState({
            arrJobs: currentJobs
        })
    }

    render() {
        console.log(">>> Call render: ", this.state)    // This will be log everytime the handleOnChangeName is called since it automaticly call re-render
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    delJob={this.delJob}
                />


            </>
        )
    }
}

export default MyComponent;