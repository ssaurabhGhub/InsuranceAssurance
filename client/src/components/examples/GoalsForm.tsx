import GoalsForm from "../GoalsForm";

export default function GoalsFormExample() {
  return (
    <GoalsForm
      onNext={(data) => console.log("Next clicked with data:", data)}
      onBack={() => console.log("Back clicked")}
    />
  );
}
