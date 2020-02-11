import React, { Component } from "react";

class DashCreate extends Component {
  render() {
    // const handleChange = () => {};

    // const handleSubmit = () => {};

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new game</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="story-hook">Story hook</label>
            <textarea
              type="text"
              id="story-hook"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Begin</button>
          </div>
        </form>
      </div>
    );
  }
}

export default DashCreate;
