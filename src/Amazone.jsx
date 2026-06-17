function Amazone() {

  let count = 0;

  function addCart() {
    count++;
    document.getElementById("cart").innerText = count;
    alert("Product Added to Cart");
  }

  function searchProduct() {
    let product = document.getElementById("searchBox").value;

    if (product === "") {
      alert("Enter Product Name");
    } else {
      alert("Searching: " + product);
    }
  }

  return (
    <div style={{background:"#f2f2f2", minHeight:"100vh"}}>

      {/* Header */}
      <header style={{
        background:"#131921",
        color:"white",
        display:"flex",
        justifyContent:"space-between",
        padding:"20px 40px",
        alignItems:"center"
      }}>

        <h2>Amazon Webpage</h2>

        <nav>
          <a href="#" style={{color:"white",margin:"10px"}}>Home</a>
          <a href="#" style={{color:"white",margin:"10px"}}>Mobiles</a>
          <a href="#" style={{color:"white",margin:"10px"}}>Fashion</a>
          <a href="#" style={{color:"white",margin:"10px"}}>
            Cart: <span id="cart">0</span>
          </a>
        </nav>

      </header>

      {/* Hero */}
      <div style={{
        background:"#232f3e",
        color:"white",
        textAlign:"center",
        padding:"50px"
      }}>
        <h1>Welcome to Amazon</h1>
        <p>Shop Electronics, Fashion & More</p>
      </div>

      {/* Search */}
      <div style={{textAlign:"center", margin:"20px"}}>
        <input
          type="text"
          id="searchBox"
          placeholder="Search Product"
          style={{padding:"10px", width:"250px"}}
        />

        <button
          onClick={searchProduct}
          style={{
            padding:"10px 20px",
            background:"orange",
            border:"none",
            marginLeft:"10px"
          }}
        >
          Search
        </button>
      </div>

      {/* Products */}
      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"20px",
        flexWrap:"wrap",
        padding:"20px"
      }}>

        <div style={cardStyle}>
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
            style={imgStyle}
          />
          <h3>Laptop</h3>
          <p>₹50000</p>
          <button onClick={addCart} style={btnStyle}>
            Add to Cart
          </button>
        </div>

        <div style={cardStyle}>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
            style={imgStyle}
          />
          <h3>Mobile</h3>
          <p>₹20000</p>
          <button onClick={addCart} style={btnStyle}>
            Add to Cart
          </button>
        </div>

        <div style={cardStyle}>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
            style={imgStyle}
          />
          <h3>Headphone</h3>
          <p>₹3000</p>
          <button onClick={addCart} style={btnStyle}>
            Add to Cart
          </button>
        </div>

      </div>

      {/* Footer */}
      <footer style={{
        background:"#131921",
        color:"white",
        textAlign:"center",
        padding:"20px"
      }}>
        © 2026 Amazon Webpage | By Anuj Upadhyay
      </footer>

    </div>
  );
}

const cardStyle = {
  background:"white",
  width:"220px",
  padding:"20px",
  textAlign:"center",
  borderRadius:"10px",
  boxShadow:"0 0 10px gray"
};

const imgStyle = {
  width:"100%",
  height:"180px"
};

const btnStyle = {
  background:"#ff9900",
  border:"none",
  padding:"10px",
  cursor:"pointer"
};

export default Amazone;
