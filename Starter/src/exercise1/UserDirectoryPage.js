import Controls from './Controls';
import sampleUsers from './sampleUsers';
import UserList from './UserList';
import { useState, useEffect } from 'react';
function UserDirectoryPage() {
  // TODO: add users, sortBy, and viewMode state in this component.
  
  var [users, setUsers] = useState([]);
  var [sortBy, setSortBy] = useState('id');
  var  [viewMode, setViewMode] = useState('grid');

  // TODO: fetch the initial users with useEffect.
  useEffect( async () =>  { // Effect for running code on the initial render
  let users_api = "https://69a1dc0a2e82ee536fa2641e.mockapi.io/users_api";
    const response = await fetch(users_api);
    const data = await response.json();
    console.log('Fetched Data:', data);
    users = data;
  }, []);
  function handleDeleteClick(userId) {
    console.log('TODO: delete the user with id', userId);
  }

  function handleSortByGroupClick() {
    console.log('TODO: sort users by user_group');
  }

  function handleSortByIdClick() {
    console.log('TODO: sort users by id');
  }

  function handleViewToggleClick() {
    console.log('TODO: switch between grid and list layouts');
  }

  return (
    <>
      <section className="panel">
        <h1>User Directory</h1>
      </section>

      <section className="panel">
        <h2>Controls</h2>
        <Controls />
      </section>

      <section className="panel">
        <h2>All Users</h2>
        <UserList users={sampleUsers} viewMode="grid" />
      </section>
    </>
  );
}

export default UserDirectoryPage;
