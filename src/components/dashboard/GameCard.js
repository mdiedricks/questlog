import React from 'react'

const GameCard =(props)=> {
    return (
        <div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">{this.props.title}</span>
                            <p>{this.props.storyHook}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard;