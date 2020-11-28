import React, { Component } from 'react';

export default class Decklist extends Component {
    constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			error: null,
			decks: []
		}
	}

	async componentDidMount() {
		await fetch('/api/decks')
			.then(response => response.json())
			.then(json => {
				this.setState({
					decks: json._embedded.deckList,
					isLoading: false
				})
			})
			.catch(error => this.setState({ 
				error: error.message,
				isLoading: false
			}),
		);
	}

	renderCards =() => {
		const { isLoading, error, decks } = this.state;
		
		if (error) {
			return <div>{error}</div>
		}
		
		if (isLoading) {
			return <div>Loading...</div>
		}

		return(
            <ul>
                {decks.map(deck => (
                    <li key={deck.id}>
                        Deckname: {deck.name} | description: {deck.description}
                    </li>
                ))}
            </ul>
        );
	}
	
	render() {
		return <div>{this.renderCards()}</div>
	}
}

