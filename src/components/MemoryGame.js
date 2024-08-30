import React, { useState } from 'react';
import './MemoryGame.css';

const cardsArray = [
    { id: 1, name: '🐶', flipped: false, matched: false },
    { id: 2, name: '🐶', flipped: false, matched: false },
    { id: 3, name: '🐱', flipped: false, matched: false },
    { id: 4, name: '🐱', flipped: false, matched: false },
    { id: 5, name: '🐰', flipped: false, matched: false },
    { id: 6, name: '🐰', flipped: false, matched: false },
    { id: 7, name: '🦁', flipped: false, matched: false },
    { id: 8, name: '🦁', flipped: false, matched: false },
    { id: 9, name: '🦄', flipped: false, matched: false },
    { id: 10, name: '🦄', flipped: false, matched: false },
    { id: 11, name: '🐨', flipped: false, matched: false },
    { id: 12, name: '🐨', flipped: false, matched: false },
];

const MemoryGame = () => {
    const [cards, setCards] = useState(shuffle(cardsArray));
    const [flippedCards, setFlippedCards] = useState([]);
    const [matches, setMatches] = useState(0);

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const handleFlip = (index) => {
        let newCards = [...cards];
        if (flippedCards.length < 2 && !newCards[index].flipped && !newCards[index].matched) {
            newCards[index].flipped = true;
            setFlippedCards([...flippedCards, newCards[index]]);
            setCards(newCards);

            if (flippedCards.length === 1) {
                if (flippedCards[0].name === newCards[index].name) {
                    setMatches(matches + 1);
                    let matchedCards = newCards.map(card => {
                        if (card.name === newCards[index].name) {
                            card.matched = true;
                        }
                        return card;
                    });
                    setCards(matchedCards);
                }
                setTimeout(() => {
                    setFlippedCards([]);
                    setCards(newCards.map(card => ({
                        ...card,
                        flipped: card.matched,
                    })));
                }, 1000);
            }
        }
    };

    const resetGame = () => {
        setCards(shuffle(cardsArray).map(card => ({ ...card, flipped: false, matched: false })));
        setFlippedCards([]);
        setMatches(0);
    };

    return (
        <div className="memory-game">
            <h2>Memory Game</h2>
            <button className="reset-button" onClick={resetGame}>Restart Game</button>
            <div className="cards">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${card.flipped ? 'flipped' : ''}`}
                        onClick={() => handleFlip(index)}
                    >
                        <span>{card.flipped ? card.name : '❓'}</span>
                    </div>
                ))}
            </div>
            <p className="matches">Matches: {matches}</p>
        </div>
    );
};

export default MemoryGame;
