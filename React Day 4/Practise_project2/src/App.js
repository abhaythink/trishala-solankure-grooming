import React, { useState, Fragment} from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UsersList'

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) =>{
      return [...prevUserList, {name : uName, age : uAge, id : (Math.random().toString())}];
    })
  }
  return (
    // <div>
    //   <AddUser onAddUser ={addUserHandler} />
    //   <UserList users = {userList}/>
    // </div>

    // <>
    //   <AddUser onAddUser ={addUserHandler} />
    //   <UserList users = {userList}/>
    // </>

    // <React.Fragment>
    //   <AddUser onAddUser ={addUserHandler} />
    //   <UserList users = {userList}/>
    // </React.Fragment>

    //1st need to import Fragment from react. 
    <Fragment>
      <AddUser onAddUser ={addUserHandler} />
      <UserList users = {userList}/>
    </Fragment>
  );
}

export default App;
