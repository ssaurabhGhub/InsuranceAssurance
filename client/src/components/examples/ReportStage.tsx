import ReportStage from "../ReportStage";

export default function ReportStageExample() {
  return <ReportStage onBack={() => console.log("Back clicked")} />;
}
