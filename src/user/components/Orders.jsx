import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/Orders.css";

function Orders() {
  const [purchaseList, setPurchaseList] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [alertBox, setAlertBox] = useState({
    visible: false,
    text: "",
  });

  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const location = useLocation();
  const navigate = useNavigate();

  const formatStatus = (text) => (text || "").toLowerCase();

  const triggerAlert = (msg) => {
    setAlertBox({
      visible: true,
      text: msg,
    });

    setTimeout(() => {
      setAlertBox({
        visible: false,
        text: "",
      });
    }, 3000);
  };

  /* PAYMENT SUCCESS */
  useEffect(() => {
    if (location.state?.success) {
      triggerAlert("Payment Successful");
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  /* FETCH ORDERS */
  useEffect(() => {
    fetch(API + "/api/checkout/my-orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPurchaseList([...data].reverse());
        setPageLoading(false);
      })
      .catch(() => setPageLoading(false));
  }, []);

  if (pageLoading) {
    return <h2 className="purchase-loader">Loading Orders...</h2>;
  }

  return (
    <section className="purchase-wrapper">

      {alertBox.visible && (
        <div className="payment-alert">
          {alertBox.text}
        </div>
      )}

      <h2 className="purchase-heading">My Orders</h2>

      {purchaseList.length === 0 ? (
        <p className="empty-purchase">
          No orders found
        </p>
      ) : (
        purchaseList
  .filter(
    (order) =>
      order.payment_mode !== "ONLINE"
  )
  .map((order) => (
          <div key={order.order_id} className="purchase-card">

            {/* TOP SECTION */}
            <div className="purchase-top">

              <div className="purchase-info">
                <span className="purchase-label">
                  Order ID
                </span>

                <h4 className="purchase-number">
                  {order.order_id}
                </h4>

                <p className="delivery-text">
                  {order.order_date
                    ? (() => {
                        const d = new Date(order.order_date);
                        d.setDate(d.getDate() + 2);

                        return (
                          "Delivery by " +
                          d.toLocaleDateString()
                        );
                      })()
                    : "Delivery soon"}
                </p>
              </div>

              <div className="purchase-summary">

                <span className="amount-label">
                  Total Amount
                </span>

                <h3 className="amount-price">
                  ₹{order.total_price}
                </h3>

                <span
                  className={`delivery-badge ${formatStatus(
                    order.delivery_status
                  )}`}
                >
                  {order.delivery_status}
                </span>

              </div>
            </div>

            {/* PRODUCTS */}
            <div className="purchase-content">

              <div className="purchase-products">

                {order.items.map((item, index) => (
                  <div key={index} className="single-product">

                    <img
                      src={item.productImage || "/default.png"}
                      alt=""
                      className="product-thumb"
                    />

                    <div className="product-meta">
                      <p className="product-title">
                        {item.productName}
                      </p>

                      <small className="product-qty">
                        Qty : {item.quantity}
                      </small>
                    </div>

                  </div>
                ))}

                <button
                  className="details-button"
                  onClick={() =>
                    navigate(`/order/${order.order_id}`, {
                      state: order,
                    })
                  }
                >
                  View Details
                </button>

              </div>
            </div>

          </div>
        ))
      )}
    </section>
  );
}

export default Orders;
