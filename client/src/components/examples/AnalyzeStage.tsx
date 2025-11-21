import AnalyzeStage from "../AnalyzeStage";

export default function AnalyzeStageExample() {
  return (
    <AnalyzeStage
      onNext={() => console.log("Next clicked")}
      onBack={() => console.log("Back clicked")}
    />
  );
}
