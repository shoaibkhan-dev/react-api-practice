import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // CSS file import

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>API List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => setSelectedUser(user)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="content">
        {selectedUser ? (
          <div className="card">
            <h3>{selectedUser.name}</h3>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedUser.phone}
            </p>
            <p>
              <strong>Website:</strong> {selectedUser.website}
            </p>
            <p>
              <strong>Company:</strong> {selectedUser.company.name}
            </p>
          </div>
        ) : (
          <div className="card">
            <h3>Select an API</h3>
            <p>Click Name from the Api list to see details here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
