import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react";

interface Props {
  visible: boolean;
  onClick: () => void;
}

const GetInTouch = ({ visible, onClick }: Props) => {
  return (
    <div className={classNames("flex justify-center items-center w-full")}>
      <div
        className={classNames(
          "flex-1 transform transition-all duration-500 ease-in-out",
          { "translate-x-2/3": !visible, "opacity-0": !visible }
        )}
      >
        <h2 className="text-9xl font-mono text-">Wanna get in touch?</h2>
      </div>
      <div
        className={classNames(
          "flex-1 transform transition-all duration-500 ease-in-out cursor-pointer",
          { "translate-x-2/3": !visible, "opacity-0": !visible }
        )}
      >
        <div
          className="rounded-full bg-gray-800 animate-pulse w-16 h-16 flex justify-center items-center p-4"
          onClick={onClick}
        >
          <FontAwesomeIcon color={"white"} icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

const ContactDetail = () => {
  return (
      <div className="flex justify-center items-center w-full">
        <h1 className="text-5xl font-mono">Here are my contacts!</h1>
      </div>
  );
};

const Contact = () => {
  const [flow, setFlow] = useState<"first" | "second">("first");

  const changeFlow = () => {
    setFlow("second");
  };

  return (
    <div className="flex overflow-hidden flex-row w-full max-w-5xl mx-auto h-full">
      <GetInTouch visible={flow === "first"} onClick={changeFlow} />
      <ContactDetail />
    </div>
  );
};

export default Contact;
