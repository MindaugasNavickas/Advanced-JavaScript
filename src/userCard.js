import React from "react";



class UserCard extends React.Component{
  constructor(props){
    super(props);

    this.state = {likes: 0}

    this.handleClick = this.handleClick.bind(this)
  }

handleClick(){
  this.setState(prevState => ({
    likes: prevState.likes + 1
  }));
}

  render(){
    return(
          <div className="column is-one-fifth">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={this.props.picture} alt="Profile Pic" />
                </figure>
              </div>
              <div>
                <h4 className="title is-4">{this.props.first}</h4>
                <p className="subtitle is-5">{this.props.quote}</p>
                <h2>Likes: {this.state.likes}</h2>
                <button onClick={this.handleClick}>Like</button>
              </div>
            </div>
          </div>
    )
  }
}

export default UserCard
