import  React from 'react'
import './App.css';
import Header from "./components/Header";



class App extends React.Component {
    // state = {
    //     users: []
    // }
    //
    // componentDidMount() {
    //     fetch('/users')
    //         .then(res => res.json())
    //         .then(users => this.setState({ users }))
    // }

    render() {
        return (
            <div className="App">
                {/*<h1>Users</h1>*/}
                {/*{this.state.users.map(user =>*/}
                {/*    <div key={user._id}>{user.name}</div>*/}
                {/*)}*/}
                <Header/>
            </div>
        )
    }
}

export default App;
