import Controls from './Controls';
import sampleUsers from './sampleUsers';
import UserList from './UserList';
import {useState, useEffect} from  'react';

function UserDirectoryPage() {
  // TODO: add users, sortBy, and viewMode state in this component.
  // TODO: fetch the initial users with useEffect.
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState('id');
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    console.log("UseEffect");
    fetch('https://69a1db912e82ee536fa262b3.mockapi.io/users_api')
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setUsers(result);
      console.log("users: ",users);
    })
    .catch((error) => {
      console.error('Failed to fetch data:', error.message);
    });
  }, []);

  function updateData(ID) {
    fetch(`https://69a1db912e82ee536fa262b3.mockapi.io/users_api/${ID}`, {
        method: 'DELETE',
    });
  }  

  function handleDeleteClick(userId) {
    let newArray = users.filter(user => user.id !== userId);
    updateData(userId)
    setUsers(newArray);
  }

  function handleSortByGroupClick() {
    let sortedArray = [...users];
    sortedArray.sort((a,b) => a.user_group - b.user_group);
    setUsers(sortedArray);  
  }

  function handleSortByIdClick() {
    let sortedArray = [...users];
    sortedArray.sort((a,b) => a.id - b.id);
    setUsers(sortedArray);
  }

  function handleViewToggleClick() {
    viewMode === "grid" ? setViewMode("list") : setViewMode("grid");
  }

  return (
    <>
      <section className="panel">
        <h1>User Directory</h1>
      </section>

      <section className="panel">
        <h2>Controls</h2>
        <Controls 
        onDeleteClick={handleDeleteClick}
        onSortByGroupClick={handleSortByGroupClick}
        onSortByIdClick={handleSortByIdClick}
        onViewToggleClick={handleViewToggleClick}
        />
      </section>

      <section className="panel">
        <h2>All Users</h2>
        <UserList users={users} viewMode={viewMode} />
      </section>
    </>
  );
}

export default UserDirectoryPage;
