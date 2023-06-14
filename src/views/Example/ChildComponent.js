import React from 'react';

class ChildComponent extends React.Component {
    // In a class component, you don't need to declare by let or const, react do it for you !
    // Object declare key:value
    state = {
        firstName: '',
        lastName: '',
        showJob: false
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

    handleOnShowHide = () => {
        this.setState({
            showJob: !this.state.showJob // Inverse state
        })
    }

    handleOnClickDel = (job) => {
        alert(`Click me! ${job.id} - ${job.title} - ${job.salary}`)
        console.log(`Click me! ${job.id} - ${job.title} - ${job.salary}`)
        this.props.delJob(job)
    }

    render() {
        // console.log(">>> Call render: ", this.state)    // This will be log everytime the handleOnChangeName is called since it automaticly call re-render
        console.log(">>> Check props: ", this.props)       // Check data from the father pass to the child component
        // let name = this.props.name; // Long 
        // let age = this.props.age;   //Long

        // key:value
        let { name, age, address, arrJobs } = this.props; //Shorten   // Destructuring assignment (Object destructing)
        let a = '';

        let { showJob } = this.state;
        let check = showJob === true ? 'showJobs = true' : 'showJobs = false'       // Shorten condition
        console.log(">>> Check conditional: ", check)
        // return (
        //     <>
        //         {showJob === false &&
        //             <div>
        //                 <button onClick={() => this.handleOnShowHide()}>Show</button>
        //             </div>
        //         }
        //         {showJob === true &&                 // Shorten condition, return div after &&, must only return 1 div (fragment)
        //             <>
        //                 <div className='job-lists'>
        //                     {
        //                         a = arrJobs.map((item, index) => { // Every div should have id in order to specified which div to modified later on
        //                             return (<div key={item.id}>
        //                                 {item.title} - {item.salary}
        //                             </div>)
        //                         })
        //                     }
        //                     {console.log(">>> Check mapp array: ", a)}
        //                 </div>
        //                 <div><button onClick={() => this.handleOnShowHide()}>Hide</button></div>
        //             </>
        //         }
        //     </>
        // )
        return (
            <>
                {showJob === false ?        // Use shorten condition
                    <div>
                        <button onClick={() => this.handleOnShowHide()}>Show</button>
                    </div>
                    :       // Use : to indicate which value to take for true and false
                    <>
                        <div className='job-lists'>
                            {
                                a = arrJobs.map((item, index) => { // Every div should have id in order to specified which div to modified later on
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></><span onClick={() => this.handleOnClickDel(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                            {console.log(">>> Check mapp array: ", a)}
                        </div>
                        <div><button onClick={() => this.handleOnShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}


// const ChildComponent = (props) => {  // Function component (no need to use this. keyword)   // Only use when there is only props to handle or there are hooks  
//     console.log(">>> Check child props: ", props)   // To use just like class component and get props from 
//     // MyComponent, the props need to be pass in the args of the arrow function
//     // return (<div>Hello arrow function</div>)
//     let { name, age, address, arrJobs } = props; //Shorten   // Destructuring assignment (Object destructing) // No need to use this.
//     let a = '';
//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     a = arrJobs.map((item, index) => { // Every div should have id in order to specified which div to modified later on
//                         if (+item.salary >= 500) {
//                             return (<div key={item.id}>
//                                 {item.title} - {item.salary}$
//                             </div>)
//                         }
//                     })
//                 }
//                 {console.log(">>> Check mapp array: ", a)}
//             </div>
//         </>
//     )   // Function component cannot use state, if you want to update, the parent component must re-render and pass to the child as props,
//     // Class component handle with it own state
// }

export default ChildComponent;