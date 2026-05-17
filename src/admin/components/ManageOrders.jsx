import { useEffect, useState } from "react";
import "./css/ManageOrders.css";

function ManageOrders() {

  const [adminOrders, setAdminOrders] = useState([]);

  const [adminLoading, setAdminLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {

    loadOrders();

  }, []);

  const loadOrders = async () => {

    try {

      setAdminLoading(true);

      const res = await fetch(API + "/api/orders");

      if (!res.ok) {
        throw new Error("API failed");
      }

      const data = await res.json();

      setAdminOrders(
  Array.isArray(data)
    ? [...data].reverse()
    : []
);

    } catch (err) {

      console.error("Error:", err);

      setAdminOrders([]);

    } finally {

      setAdminLoading(false);

    }

  };

  const changeDeliveryStatus = async (
    id,
    status
  ) => {

    try {

      await fetch(`${API}/api/orders/${id}`, {

        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          deliveryStatus: status,
        }),

      });

      loadOrders();

    } catch (err) {

      console.error("Update error:", err);

    }

  };

  return (

    <div className="admin-orders-wrapper">

      <h2 className="admin-orders-heading">
        Manage Orders
      </h2>

      {adminLoading && (
        <p className="admin-orders-empty">
          Loading...
        </p>
      )}

      {!adminLoading &&
        adminOrders.length === 0 && (
          <p className="admin-orders-empty">
            No orders found
          </p>
        )}

      <table className="admin-orders-table">

        <thead>

          <tr>

            <th>Order ID</th>

            <th>User</th>

            <th>Amount</th>

            <th>Status</th>

            <th>Update</th>

          </tr>

        </thead>

        <tbody>

          {adminOrders.map((order) => (

            <tr key={order.id}>

              <td>
                ORD-{order.id}
              </td>

              <td>
                {order.userId || "N/A"}
              </td>

              <td>
                ₹{order.totalPrice || 0}
              </td>

              <td>

                <span
                  className={`admin-status-badge ${order.deliveryStatus}`}
                >
                  {order.deliveryStatus}
                </span>

              </td>

              <td>

                <select
                  className="admin-status-dropdown"

                  value={
                    order.deliveryStatus ||
                    "Pending"
                  }

                  onChange={(e) =>
                    changeDeliveryStatus(
                      order.id,
                      e.target.value
                    )
                  }
                >

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Processing">
                    Processing
                  </option>

                  <option value="Shipping">
                    Shipping
                  </option>

                  <option value="Delivered">
                    Delivered
                  </option>

                </select>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default ManageOrders;
