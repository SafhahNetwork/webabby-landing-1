import Gallery from "react-photo-gallery";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const Examples = () => {
  const images = importAll(
    require.context("../assets/portfolio/logo", false, /\.(png|jpe?g|svg)$/)
  );
  let examples = [];
  for (let i = 0; i < Object.keys(images).length; i++) {
    examples[i] = {
      src: images[Object.keys(images)[i]].default.src,
      height: images[Object.keys(images)[i]].default.height,
      width: images[Object.keys(images)[i]].default.width,
    };
  }
  console.log(examples);
  return (
    <div className="examples">
      <h2>Design that makes a difference.</h2>
      <p className="subhead">Check out our work, and let us now your opinion!</p>
      <div className="list">
        <Gallery photos={examples} direction={"column"} margin={"10"} />;
      </div>
    </div>
  );
};

export default Examples;
