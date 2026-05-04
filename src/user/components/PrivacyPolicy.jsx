import Footer from "./Footer";

function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p style={{ color: "#555" }}>
          Your privacy and data security are important to us
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
          SmartCart values your privacy. We collect basic user information such
          as name, email, phone number, and address to process orders and provide
          better services.
        </p>
      </div>

      {/* SECTIONS */}
      <div style={{ display: "grid", gap: "20px" }}>

        <div style={cardStyle}>
          <h3>📦 Information We Collect</h3>
          <p>
            We collect details such as name, contact information, and delivery
            address required to complete your orders.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>🔐 Data Security</h3>
          <p>
            Your data is protected using secure technologies. Payments are
            processed through trusted gateways to ensure safety.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>🤝 Data Sharing</h3>
          <p>
            We do not sell or share your personal information with third parties
            except for delivery partners and payment processing.
          </p>
        </div>
        <div style={cardStyle}>
  <h3>🍪 Cookies & Tracking</h3>
  <p>
    SmartCart does not directly use cookies for storing user data.
    However, third-party services such as payment gateways may use
    cookies or similar technologies to ensure secure transactions
    and prevent fraud.
  </p>
</div>
        <div style={cardStyle}>
          <h3>✔ User Consent</h3>
          <p>
            By using SmartCart, you agree to our privacy policy and data usage
            practices.
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

export default PrivacyPolicy;
