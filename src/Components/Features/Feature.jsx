
import { FaCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div className="flex items-center gap-3 text-xl">
          <FaCheckCircle /> <h1>{feature}</h1>
        </div>
    );
};

export default Feature;