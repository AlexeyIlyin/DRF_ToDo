import React from 'react'
import axios, {Axios} from "axios";
import UserList from "./components/UserList.js";
import MenuList from "./components/Menu";
import FooterList from "./components/Footer";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'users':[]
        }


    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users' : users
                    }
                )
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <UserList users={this.state.users}/>
            </div>

        )
    }
}

export default App;
