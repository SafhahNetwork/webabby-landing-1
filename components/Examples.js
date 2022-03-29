import Gallery from "react-photo-gallery";
import Image from "next/image";

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

  const imageRenderer = ({ index, left, top, key, photo }) => (
    <Image
      key={key}
      margin={"10px"}
      index={index}
      src={photo}
    />
  )

  return (
    <div className="examples">
      <h2>Design that makes a difference.</h2>
      <p className="subhead">Check out our work, and let us now your opinion!</p>
      <div className="list">
        <Gallery photos={examples} direction={"column"} margin={"10"} renderImage={imageRenderer} />;
      </div>
    </div>
  );
};

export default Examples;
