import Controls from './Controls';
import sampleUsers from './sampleUsers';
import UserList from './UserList';
import { useState, useEffect } from 'react';
function UserDirectoryPage() {
  // TODO: add users, sortBy, and viewMode state in this component.
  
  var [users, setUsers] = useState([]);
  var [sortBy, setSortBy] = useState('id');
  var  [viewMode, setViewMode] = useState('grid');

  const [isLoading, setIsLoading] =
useState(false); 
// async function  call_api() 
// { setIsLoading(true);
//   let users_api = "";
//     const response = await fetch(users_api);
//     const data = await response.json();
//     console.log('Fetched Data:', data);
//     users = data;
//     console.log('Fetched users:', users);
//     setIsLoading(false);
// }

function fetchData() {
// Set loading to true while data is being fetched
setIsLoading(true);
// Fetch data from an API using .then()
fetch("https://69a1dc0a2e82ee536fa2641e.mockapi.io/users_api")
.then((response) => response.json())
.then((data) => {
// Parse the JSON data from the response
//let { email, cell } = data.results[0];
// Set the fetched data to the state
setUsers(data);
console.log('Fetched Data:', data);

})
.catch((error) => {
// Handle error if the request was not successful
console.error('Failed to fetch data:', error.message);
})
.finally(() => {
// Set loading to false once data fetching is complete
setIsLoading(false);
});}


useEffect(() => {
fetchData();
},[]);

  // TODO: fetch the initial users with useEffect.
  // useEffect(() =>  { // Effect for running code on the initial render
  // call_api();
  // }, []);

  async function handleDeleteClick(userId) {
    console.log('TODO: delete the user with id', userId);
    console.log(userId);
    var user_for_deletion = null;
    users.forEach((user) => {
    if (user.id == userId)
        user_for_deletion = user;
    })
    if (user_for_deletion == null)
    {
        console.log("cannot delete user. No users with id "+ userId +" found");
    }
    else
    {
        try{
        await fetch( "https://69a1dc0a2e82ee536fa2641e.mockapi.io/users_api/"+userId, {    method: "DELETE"});
        fetchData();
        }
        catch (error)
        {
            console.log("User is in the database, but deletion failed: " + error);
        }
    }

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
        <Controls onDeleteClick={handleDeleteClick} onSortByGroupClick = {handleSortByGroupClick} onSortByIdClick={handleSortByIdClick} onViewToggleClick={handleViewToggleClick}/>
      </section>

      <section className="panel">
        <h2>All Users</h2>
        <UserList users={users} viewMode={viewMode}/>
      </section>
    </>
  );
}

export default UserDirectoryPage;
