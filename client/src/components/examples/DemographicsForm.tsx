import DemographicsForm from "../DemographicsForm";

export default function DemographicsFormExample() {
  return (
    <DemographicsForm
      onNext={(data) => console.log("Next clicked with data:", data)}
    />
  );
}
