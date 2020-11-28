import React, { Component } from 'react';

export default class Cardlist extends Component {
    constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			error: null,
			cards: []
		}
	}

	async componentDidMount() {
		await fetch('/api/cards')
			.then(response => response.json())
			.then(json => {
				this.setState({
					cards: json._embedded.cardList,
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
		const { isLoading, error, cards } = this.state;
		
		if (error) {
			return <div>{error}</div>
		}
		
		if (isLoading) {
			return <div>Loading...</div>
		}

		return(
            <ul>
                {cards.map(card => (
                    <li key={card.id}>
                        Cardname: {card.cardName} | Type: {card.type}
                    </li>
                ))}
            </ul>
        );
	}
	
	render() {
		return <div>{this.renderCards()}</div>
	}
}

