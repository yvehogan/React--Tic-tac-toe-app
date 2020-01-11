import React, { Component } from 'react';

class Player extends Component {

    handleForm(e){
        e.preventDefault();
        this.props.player(e.target.player.value)
    }

    render() {
        return (
        <form onSubmit={(e) => this.handleForm(e)}>
            <label>

                Player x

                <input type="radio" name="player" value="X" />
            </label>
        

                <label>

                    Player 0

                    <input type="radio" name="player" value="0" />
                </label>
                    <input type="submit" value="Start" />

            </form>)
    }
}

export default Player;
