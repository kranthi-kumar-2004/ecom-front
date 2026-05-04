import Footer from "./Footer";

function RefundPolicy() {
  return (
    <>
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6"
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>
          Refund & Cancellation Policy
        </h1>
        <p style={{ color: "#555" }}>
          Clear and transparent policies for your peace of mind
        </p>
      </div>

      {/* MAIN CARD */}
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          marginBottom: "25px"
        }}
      >
        <p>
          At SmartCart, we aim to provide a smooth and reliable shopping experience.
          Please read our refund and cancellation policy carefully.
        </p>
      </div>

      {/* POLICY SECTIONS */}
      <div style={{ display: "grid", gap: "20px" }}>

        <div style={cardStyle}>
          <h3>❌ Order Cancellation</h3>
          <p>
            Orders can be cancelled before they are shipped. Once the order is
            dispatched, cancellation is not possible.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>📦 Damaged or Defective Products</h3>
          <p>
            If you receive a damaged or defective product, please contact us within
            48 hours of delivery with proof (images/videos).
          </p>
        </div>

        <div style={cardStyle}>
          <h3>💳 Refund Process</h3>
          <p>
            Once approved, refunds will be processed within 5–7 business days and
            credited to the original payment method.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>🚚 Cash on Delivery (COD)</h3>
          <p>
            COD orders are not eligible for refunds after delivery unless the
            product is defective or damaged.
          </p>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}

const cardStyle = {
  background: "#f9f9f9",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
};

export default RefundPolicy;
