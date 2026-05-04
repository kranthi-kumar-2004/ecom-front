import Footer from "./Footer";
function Contact() {
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
          Contact Us
        </h1>
        <p style={{ color: "#555" }}>
          We’re here to help — reach out anytime
        </p>
      </div>

      {/* CONTACT CARD */}
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          marginBottom: "30px"
        }}
      >
        <p><b>📧 Email:</b> sarvepallikranthikumar@gmail.com</p>
        <p><b>📞 Phone:</b> +91 6304145316</p>
        <p><b>📍 Address:</b> Nellore, Andhra Pradesh, India - 524314</p>
      </div>

      {/* INFO SECTION */}
      <div
        style={{
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center"
        }}
      >
        <p style={{ marginBottom: "10px" }}>
          For any queries, issues, or support, feel free to contact us.
        </p>
        <p style={{ color: "#777" }}>
          We usually respond within 24 hours.
        </p>
      </div>

      {/* OPTIONAL QUICK ACTIONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap"
        }}
      >
        <a href="mailto:sarvepallikranthikumar@gmail.com" style={btnStyle}>
          Email Us
        </a>

        <a href="tel:+916304145316" style={btnStyle}>
          Call Now
        </a>
      </div>
    </div>
    <Footer/>
    </>
  );
}

const btnStyle = {
  background: "#000",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "14px"
};

export default Contact;
