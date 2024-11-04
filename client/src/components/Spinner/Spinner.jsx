import { DNA } from "react-loader-spinner";
export default function Spinner() {
  return (
    <DNA
      visible={true}
      height="80"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
}
