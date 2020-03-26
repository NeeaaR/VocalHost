import React from 'react';


class Test extends React.Component {

    state = {
        loading: true,
        person: null
    };

    //Permet de récupérer l'API. On a besoin d'une requête asynchrone (node etc)
    async componentDidMount() {
        //On définit la route de l'api pour réupérer les users
        const url = "http://localhost:8000/api/v1/users"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        this.setState({ person: data.users[0] })
    }

    render() {
        return (
            <div>
                <div> {this.state.person.email} </div>
            </div>
        )
    }
}

export default Test;