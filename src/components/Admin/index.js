import React, { Component } from "react";
import { withFirebase } from "../Firebase";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: []
    };
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.store.collection('users').get().then(snapshot => {
      var usersList = [];
      snapshot.docs.forEach((doc, i) => {
        usersList.push({
          uid: i,
          ...doc.data()
        });
      })
      this.setState({
        users: usersList,
        loading: false
      })
    });
    // this.props.firebase.users.subscribe(snapshot => {
    //   console.log('@@@@@@@@@@@@@@@ users : ', snapshot)
    //   const usersObject = snapshot.val();
    //   const usersList = Object.keys(usersObject).map(key => ({
    //     ...usersObject[key],
    //     uid: key
    //   }));
    //   this.setState({
    //     users: usersList,
    //     loading: false
    //   });
    // });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div className="auth-content">
        <h1>Admin</h1>
        {loading && <div>Loading ...</div>}
        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(AdminPage);
