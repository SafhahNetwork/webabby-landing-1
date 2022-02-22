const Packages = () => {
  return (
    <div className="packages">
      <h2 className="head">Simple Ways To Get Started</h2>
      <p className="subhead">
        Looking to give a new look/feel to your business? Get a quote or
        Schedule a call with us today!
      </p>
      <div className="list">
        <Package
          className="basic"
          title="Starter"
          sub="One high quality custom design."
          price="$199"
          time="1-3 business days"
          items={["hi", "hi", "hi"]}
          sup="25% off for logo design"
        />
        <Package
          className="plus"
          title="Pro"
          sub="A full set of custom graphic designs."
          price="$999"
          time="7-14 business days"
          items={["hi", "hi", "hi"]}
          sup="Premium support included"
        />
        <Package
          className="premium"
          title="Premium"
          sub="Custom job, tell us what you need."
          price="Custom"
          time="Get a quote"
          items={["hi", "hi", "hi"]}
          sup=""
        />
      </div>
    </div>
  );
};

export default Packages;

const Package = (p) => {
  return (
    <div className={"package " + p.className}>
      <h3>{p.title}</h3>
      <p className="sub">{p.sub}</p>
      <ul>
        {p.items.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
      <div className="info">
        <p className="price">{p.price}</p>
        <p className="time">{p.time}</p>
      </div>
      {p.className == "premium" ? (
        <button className="cta cta-3">Contact Us</button>
      ) : (
        <button className="cta">Order Now</button>
      )}
      <p className="sup">{p.sup}</p>
    </div>
  );
};
