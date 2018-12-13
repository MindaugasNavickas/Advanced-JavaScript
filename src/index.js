import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
// import UserCard from "./userCard.js";
// import data from "./data";

// console.log(data.results[0]);

class Comments extends React.Component{
  constructor(props){
    super(props);

    this.state = {Comments: []};

  }




  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      this.setState({Comments: response.data});
      // console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

render(){


  const commentList = this.state.Comments.map(c =>
    <div className = "columns is-centered">
      <div className = "column is-4">
        <div className = "card">
          <h4 className = "title is-4">{c.name}</h4>
          <p className = "subtitle is-6">{c.email}</p>
          <p className = "subtitle is-6">{c.body}</p>
        </div>
      </div>
    </div>
  )


  return(
        <div className = "container">
          {commentList}
        </div>
  )


//   render() {
//   const userList = this.data.map(u => (
//     <UserElement2
//       key={u.name}
//       first={u.name}
//       // email={u.email}
//       // picture={u.picture.large}
//     />
//   ));
//   return (
//     <div className="columns is-multiline">{userList}</div>
//   )
// }

}


}




ReactDOM.render(
  <Comments />,
  document.getElementById("root")
);
