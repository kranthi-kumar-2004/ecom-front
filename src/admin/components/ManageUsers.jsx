import { useEffect, useState } from "react";
import "./css/ManageUsers.css";

function ManageUsers() {

  const [users, setUsers] = useState([]);

  const [addresses, setAddresses] = useState([]);

  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {

    fetchUsers();

    fetchAddresses();

  }, []);

  // 🔥 USERS
  const fetchUsers = async () => {

    try {

      setLoading(true);

      const res = await fetch(
        API + "/api/users"
      );

      const data = await res.json();

      setUsers(
        Array.isArray(data) ? data : []
      );

    } catch (err) {

      console.error(err);

      setUsers([]);

    } finally {

      setLoading(false);

    }

  };

  // 🔥 ADDRESSES
  const fetchAddresses = async () => {

    try {

      const res = await fetch(
        API + "/api/admin/addresses"
      );

      const data = await res.json();

      setAddresses(
        Array.isArray(data) ? data : []
      );

    } catch (err) {

      console.error(err);

      setAddresses([]);

    }

  };

  return (

    <div className="manage-users-wrapper">

      <h2 className="manage-users-title">
        Manage Users
      </h2>

      {loading && (
        <p className="manage-users-text">
          Loading...
        </p>
      )}

      {!loading &&
        users.length === 0 && (
          <p className="manage-users-text">
            No users found
          </p>
        )}

      <table className="manage-users-table">

        <thead>

          <tr>

            <th>User ID</th>

            <th>Name</th>

            <th>Address</th>

          </tr>

        </thead>

        <tbody>

          {users.map((u) => {

            // 🔥 MATCH USER WITH ADDRESS
            const userAddress =
              addresses.find(
                (a) => a.user?.id === u.id
              );

            return (

              <tr key={u.id}>

                <td>
                  {u.id}
                </td>

                <td>
                  {u.name || "N/A"}
                </td>

                <td>

                  {userAddress
                    ? `${userAddress.area}, ${userAddress.city}, ${userAddress.state}`
                    : "No Address"}

                </td>

              </tr>

            );

          })}

        </tbody>

      </table>

    </div>

  );
}

export default ManageUsers;
