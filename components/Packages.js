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
          title="One design"
          sub="One high quality custom graphic design."
          price="$199"
          time="1-3 business days"
          items={["hi", "hi", "hi"]}
        />
        <Package
          className="plus"
          title="Plus"
          sub="A full set of custom graphic design."
          price="$999"
          time="7-14 business days"
          items={["hi", "hi", "hi"]}
        />
        <Package
          className="premium"
          title="premium"
          sub="Custom job, tell us what you need."
          price="Custom"
          time="Depends"
          items={["hi", "hi", "hi"]}
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
      <p>{p.sub}</p>
      <ul>
        {p.items.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
      <div>
        <div>{p.price}</div>
        <div>{p.time}</div>
      </div>
      <button className="cta">Book A Call</button>
    </div>
  );
};
