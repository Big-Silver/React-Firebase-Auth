import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { AuthUserContext, withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
      options: {
        afterDeleteRow: this.onAfterDeleteRow,
        afterInsertRow: this.onAfterInsertRow,
      },
      selectRowProp: {
        mode: "checkbox",
      },
      cellEditProp: {
        mode: "click",
        blurToSave: true,
        afterSaveCell: this.onAfterSaveCell,
      },
    };
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.props.firebase.store
      .collection("users")
      .get()
      .then((snapshot) => {
        var usersList = [];
        snapshot.docs.forEach((doc, i) => {
          usersList.push({
            id: i,
            uuid: doc.id,
            ...doc.data(),
          });
        });
        console.log(usersList);
        this.setState({
          users: usersList,
          loading: false,
        });
      });
  }

  onAfterDeleteRow = (event) => {
    let users = this.state.users;
    event.map((e, i) => {
      this.props.firebase.store.collection("users").doc(users[e].uuid).delete();
    });
    setTimeout(() => {
      this.props.firebase.store
        .collection("users")
        .get()
        .then((snapshot) => {
          var usersList = [];
          snapshot.docs.forEach((doc, i) => {
            usersList.push({
              id: i,
              uuid: doc.id,
              ...doc.data(),
            });
          });
          this.setState({
            users: usersList,
          });
        });
    }, 1000);
  };

  onAfterInsertRow = (event) => {
    let user = {
      username: event.username,
      email: event.email,
    };
    this.props.firebase.store
      .collection("users")
      .add(user)
      .then((ref) => {
        user.uuid = ref.id;
        user.id = this.state.users.length;
        let users = this.state.users;
        users.push(user);
        this.setState({
          users: users,
        });
      });
  };

  onAfterSaveCell = (event) => {
    let users = this.state.users;
    let user = {
      email: event.email,
      username: event.username,
      uuid: event.uuid,
    };
    this.props.firebase.store
      .collection("users")
      .doc(users[event.id].uuid)
      .set(user);
    users[event.id] = event;
    this.setState({ users });
  };

  render() {
    const { users, loading, selectRowProp, cellEditProp, options } = this.state;

    return (
      <AuthUserContext.Consumer>
        {(authUser) => (
          <div className="auth-content p-5">
            <h1>Admin</h1>
            {loading && <div>Loading ...</div>}
            <BootstrapTable
              data={users}
              insertRow={true}
              deleteRow={true}
              selectRow={selectRowProp}
              cellEdit={cellEditProp}
              options={options}
            >
              <TableHeaderColumn dataField="id" isKey={true}>
                No
              </TableHeaderColumn>
              <TableHeaderColumn dataField="username">Name</TableHeaderColumn>
              <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
            </BootstrapTable>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(withFirebase(AdminPage));
