import Image from "next/image";
import step1 from "../assets/img/step_1.webp";
import step2 from "../assets/img/step_2.webp";
import step3 from "../assets/img/step_3.webp";

const Steps = () => {
  return (
    <div className="steps">
      <div className="content">
        <h2>How our magic works:</h2>
        <ol>
          <li>
            <Image
              height="100"
              width="100"
              objectFit="contain"
              src={step1}
              alt="step 1"
            />
            <p>Request a design, via a call or the website.</p>
          </li>
          <li>
            <Image
              height="100"
              width="100"
              objectFit="contain"
              src={step2}
              alt="step 2"
            />
            <p>Receive your design, on average whitin 3 work days maximum.</p>
          </li>
          <li>
            <Image
              height="100"
              width="100"
              objectFit="contain"
              src={step3}
              alt="step 1"
            />
            <p>{"We'll revise the design until you're 100% satisfied."}</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Steps;
