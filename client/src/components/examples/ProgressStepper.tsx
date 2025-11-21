import ProgressStepper from "../ProgressStepper";
import { useState } from "react";

export default function ProgressStepperExample() {
  const [currentStage, setCurrentStage] = useState("goals");

  return (
    <ProgressStepper
      currentStage={currentStage}
      onStageClick={(stage) => setCurrentStage(stage)}
    />
  );
}
