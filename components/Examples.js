import Gallery from "react-photo-gallery";
import { examples } from "../data/examples";

const Examples = () => {
  return (
    <div className="examples">
      <h2>Design that makes a difference.</h2>
      <div className="list">
        <Gallery photos={examples} direction={"column"} />;
      </div>
    </div>
  );
};

export default Examples;
