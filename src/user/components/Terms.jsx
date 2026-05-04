import Footer from "./Footer";

function Terms() {
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
          Terms & Conditions
        </h1>
        <p style={{ color: "#555" }}>
          Please read these terms carefully before using SmartCart
        </p>
      </div>

      {/* INTRO */}
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
          By accessing and using SmartCart, you agree to comply with the following
          terms and conditions. These terms govern your use of our platform and
          services.
        </p>
      </div>

      {/* SECTIONS */}
      <div style={{ display: "grid", gap: "20px" }}>

        <div style={cardStyle}>
          <h3>💰 Pricing & Availability</h3>
          <p>
            All product prices and availability are subject to change without
            prior notice. We strive to ensure accuracy but errors may occur.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>📦 Order Acceptance</h3>
          <p>
            We reserve the right to cancel or refuse any order due to pricing
            errors, stock issues, or suspicious activity.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>🔐 Account Responsibility</h3>
          <p>
            Users are responsible for maintaining the confidentiality of their
            account credentials and for all activities under their account.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>⚖️ Usage Policy</h3>
          <p>
            You agree not to misuse the platform, attempt unauthorized access,
            or engage in fraudulent activities while using SmartCart.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>📄 Changes to Terms</h3>
          <p>
            SmartCart reserves the right to update or modify these terms at any
            time. Continued use of the platform implies acceptance of the updated terms.
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

export default Terms;
