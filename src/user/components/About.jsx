import Footer from "./Footer";
function About() {
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
      {/* HERO */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          About SmartCart
        </h1>
        <p style={{ color: "#555", fontSize: "16px" }}>
          Your trusted destination for seamless and secure online shopping
        </p>
      </div>

      {/* MAIN CARD */}
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          marginBottom: "30px"
        }}
      >
        <p>
          SmartCart is a modern full-stack e-commerce platform designed to provide
          a seamless and secure shopping experience. We offer a wide range of products
          with real-time cart management, fast checkout, and reliable delivery.
        </p>

        <p>
          Our goal is to make online shopping simple, affordable, and accessible
          to everyone. We continuously improve our platform to ensure a smooth user
          experience and secure transactions.
        </p>
      </div>

      {/* FEATURES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        <div style={cardStyle}>
          <h3>🛒 Easy Shopping</h3>
          <p>Browse products, add to cart, and checkout in seconds.</p>
        </div>

        <div style={cardStyle}>
          <h3>🔒 Secure Payments</h3>
          <p>All transactions are protected with trusted payment gateways.</p>
        </div>

        <div style={cardStyle}>
          <h3>⚡ Fast Delivery</h3>
          <p>Quick and reliable delivery to your doorstep.</p>
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
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  textAlign: "center"
  
};

export default About;
