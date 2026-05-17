import "./css/Cart.css";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {

  const API = import.meta.env.VITE_API_URL;

  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(true);
  const [showQty, setShowQty] = useState(null);

  const token = localStorage.getItem("token");

  /* ===== SAVINGS ===== */

  const savings = items.reduce(
    (a, i) =>
      i.stock === 0
        ? a
        : a +
          (i.discount_percent > 0
            ? (i.price - i.discount_price) * i.quantity
            : 0),
    0
  );

  /* ===== CLOSE POPUP ===== */

  useEffect(() => {

    const close = () => setShowQty(null);

    window.addEventListener("click", close);

    return () =>
      window.removeEventListener("click", close);

  }, []);

  /* ===== LOAD CART ===== */

  useEffect(() => {

    if (!token) {
      setLoad(false);
      return;
    }

    fetch(`${API}/api/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })

      .then(async (data) => {

        const updated = await Promise.all(

          data.map(async (it) => {

            const res = await fetch(
              `${API}/products/${it.productId}`
            );

            if (!res.ok) return it;

            const p = await res.json();

            return {
              ...it,
              name: p.name,
              price: p.price,
              discount_price: p.discount_price,
              discount_percent: p.discount_percent,
              image: p.image,
              category: p.category,
              description: p.description,
              stock: p.stock || 0,
            };
          })
        );

        setItems(updated);
        setLoad(false);
      })

      .catch(() => setLoad(false));

  }, [token]);

  /* ===== UPDATE QTY ===== */

  const qty = (it, value) => {

    let newQty =
      typeof value === "number"
        ? value
        : value === "inc"
        ? it.quantity + 1
        : it.quantity - 1;

    if (newQty < 1) newQty = 1;

    if (it.stock && newQty > it.stock) {
      alert(`Only ${it.stock} items available`);
      return;
    }

    fetch(`${API}/api/cart`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        productId: it.productId,
        quantity: newQty,
      }),

    }).then(() => {

      setItems((prev) =>
        prev.map((i) =>
          i.id === it.id
            ? { ...i, quantity: newQty }
            : i
        )
      );

    });
  };

  /* ===== DELETE ===== */

  const del = (it) => {

    fetch(`${API}/api/cart/${it.productId}`, {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${token}`,
      },

    }).then(() => {

      setItems((prev) =>
        prev.filter((i) => i.id !== it.id)
      );

    });
  };

  /* ===== CHECK STOCK ===== */

  const hasOutOfStock = items.some(
    (i) => i.stock === 0
  );

  /* ===== TOTAL ===== */

  const sub = items.reduce(
    (a, i) =>
      i.stock === 0
        ? a
        : a +
          (i.discount_price > 0
            ? i.discount_price
            : i.price) *
            i.quantity,
    0
  );

  const getPrice = (i) =>
    i.discount_price > 0
      ? i.discount_price
      : i.price;

  /* ===== LOADING ===== */

  if (load) return <h2>Loading...</h2>;

  /* ===== EMPTY ===== */

  if (items.length === 0)
    return (
      <>
        <div className="c">
          <h2 className="e">
            Your cart is empty 🛒
          </h2>
        </div>

        <Footer />
      </>
    );

  return (
    <>

      <div className="ct">

        <h1>Shopping Cart</h1>

        <div className="cc">

          {/* ===== LEFT ===== */}

          <div className="ci">

            {items.map((it) => (

              <div className="cd" key={it.id}>

                <img
                  src={it.image}
                  alt=""
                  className="img"
                />

                {/* ===== DETAILS ===== */}

                <div className="pd">

                  <h3>{it.name}</h3>

                  <p>{it.category}</p>

                  <p className="ds">
                    {it.description}
                  </p>

                  {it.stock === 0 ? (

                    <h4 className="out-stock">
                      Out of Stock
                    </h4>

                  ) : (

                    <h4>

                      ₹{
                        (
                          it.discount_price > 0
                            ? it.discount_price
                            : it.price
                        ).toLocaleString()
                      }

                      {it.discount_percent > 0 && (
                        <>

                          <span className="old-price">
                            ₹{it.price.toLocaleString()}
                          </span>

                          <span className="discount-tag">
                            {it.discount_percent}% OFF
                          </span>

                        </>
                      )}

                    </h4>
                  )}

                  {it.stock &&
                    it.quantity >= it.stock && (

                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                      }}
                    >
                      Only {it.stock} left
                    </p>
                  )}
                </div>

                {/* ===== QTY ===== */}

                <div className="qt">

                  {it.stock === 0 ? (

                    <span className="out-stock">
                      Out of Stock
                    </span>

                  ) : (
                    <>

                      <label>Qty:</label>

                      <button
                        className="qty-select"
                        onClick={(e) => {

                          e.stopPropagation();

                          setShowQty((prev) =>
                            prev === it.id
                              ? null
                              : it.id
                          );
                        }}
                      >
                        {it.quantity} ▼
                      </button>

                    </>
                  )}

                  <div
                    className="dl"
                    onClick={() => del(it)}
                  >
                    🗑️
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* ===== RIGHT ===== */}

          <div className="sm">

            <h2>Order Summary</h2>

            {items.map((it) => (

              <div className="rw" key={it.id}>

                <span>
                  {it.name} × {it.quantity}
                </span>

                <span>
                  {it.stock === 0
                    ? "Out of Stock"
                    : `₹${(
                        getPrice(it) * it.quantity
                      ).toLocaleString()}`}
                </span>

              </div>
            ))}

            <hr />

            {savings > 0 && (

              <div
                className="rw"
                style={{ color: "green" }}
              >
                <span>You Saved</span>

                <span>
                  ₹{savings.toLocaleString()}
                </span>
              </div>
            )}

            <div className="rw tt">

              <span>Subtotal</span>

              <span>
                ₹{sub.toLocaleString()}
              </span>

            </div>

            {/* ===== BUTTONS ===== */}

            <Link
              to={hasOutOfStock ? "#" : "/address"}
              className={`cn ${
                hasOutOfStock
                  ? "disabled-btn"
                  : ""
              }`}
              onClick={(e) => {
                if (hasOutOfStock) {
                  e.preventDefault();
                }
              }}
            >
              Checkout products
            </Link>

            <Link to="/" className="cn">
              Continue Shopping
            </Link>

          </div>

        </div>
      </div>

      {/* ===== POPUP ===== */}

      {showQty && (

        <div
          className="qty-modal"
          onClick={() => setShowQty(null)}
        >

          <div
            className="qty-box"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* ===== CLOSE ===== */}

            <div className="qty-header">

              <button
                onClick={() => setShowQty(null)}
              >
                ✖
              </button>

            </div>

            {/* ===== LIST ===== */}

            <div className="qty-list">

              {Array.from(
                {
                  length: Math.min(
                    items.find(
                      (i) => i.id === showQty
                    )?.stock || 0,
                    20
                  ),
                },
                (_, i) => i + 1
              ).map((num) => {

                const current = items.find(
                  (i) => i.id === showQty
                );

                return (

                  <div
                    key={num}
                    className={`qty-item ${
                      current?.quantity === num
                        ? "active"
                        : ""
                    }`}
                    onClick={() => {

                      qty(current, num);

                      setShowQty(null);
                    }}
                  >
                    {num}
                  </div>
                );
              })}

            </div>

          </div>

        </div>
      )}

      <Footer />

    </>
  );
}

export default Cart;