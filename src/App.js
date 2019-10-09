import React, { Component } from 'react';
import Card from "./components/Cards";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CardArea from "./components/CardArea";
import charas from "./characters.json";
import './App.css';

function shuffleCards(arr) {
    for(let i = arr.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

class App extends Component {
    //setting this.state
    state = {
        charas,
        score: 0,
        topScore: 0,
        message: "",
        clicked: []
    };

    handleClicked = id =>{
        if(this.state.clicked.indexOf(id) === -1){
            this.setState({
                message:""
            });
            this.handleIncrease();
            this.setState({ clicked: this.state.clicked.concat(id) });
        }else {
            this.handleReset();
        }
    };

    handleIncrease = () => {
        const updateScore = this.state.score + 1;
        this.setState({
            score: updateScore,
        });
        if (updateScore >= this.state.topScore) {
            this.setState({ topScore: updateScore });
        }
        else if (updateScore === 12) {
            this.setState({ message: "おめでとうございます！"});
        }
        this.shuffle();
    };

    handleReset = () => {
        this.setState({
            score: 0,
            topScore: this.state.topScore,
            message: "もう一同！",
            clicked: []
        });
        this.shuffle();
    };

    shuffle = () => {
        let shuffledCards = shuffleCards(charas);
        this.setState({ charas: shuffledCards }); 
    };

    render() {
        return (
            <Wrapper>
                <Nav
                    title="クロウカードのシャッフル!!"
                    score={this.state.score}
                    topScore={this.state.topScore}
                    message={this.state.message}
                />

                <Title>
                    はじめましょう!　カードをクリックしますが、同じカードを二回クリックしないでください。<br/>
                    <small>Lets begin! Click on a card, but don't click on the same card twice.</small>
                </Title>

                <CardArea>
                    {this.state.charas.map(charas => (
                        <Card
                            key={charas.id}
                            handleClicked={this.handleClicked}
                            handleIncrease={this.handleIncrease}
                            handleReset={this.handleReset}
                            shuffle={this.shuffle}
                            id={charas.id}
                            image={charas.image}
                        />
                    ))}
                </CardArea>
            </Wrapper>
        );
    }

}

export default App;
