// Spinner.jsx
import { Oval } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <Oval
        height={40}
        width={40}
        color="#28282B"
        secondaryColor="#e5e7eb"
        strokeWidth={4}
      />
    </div>
  );
}