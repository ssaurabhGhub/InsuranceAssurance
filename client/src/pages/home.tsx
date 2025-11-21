import { useState } from "react";
import Header from "@/components/Header";
import ProgressStepper from "@/components/ProgressStepper";
import DemographicsForm from "@/components/DemographicsForm";
import GoalsForm from "@/components/GoalsForm";
import UploadForm from "@/components/UploadForm";
import AnalyzeStage from "@/components/AnalyzeStage";
import ReportStage from "@/components/ReportStage";

type Stage = "demographics" | "goals" | "upload" | "analyze" | "report";

export default function Home() {
  const [currentStage, setCurrentStage] = useState<Stage>("demographics");

  const handleStageClick = (stageId: string) => {
    setCurrentStage(stageId as Stage);
  };

  const goToNextStage = () => {
    const stages: Stage[] = ["demographics", "goals", "upload", "analyze", "report"];
    const currentIndex = stages.indexOf(currentStage);
    if (currentIndex < stages.length - 1) {
      setCurrentStage(stages[currentIndex + 1]);
    }
  };

  const goToPreviousStage = () => {
    const stages: Stage[] = ["demographics", "goals", "upload", "analyze", "report"];
    const currentIndex = stages.indexOf(currentStage);
    if (currentIndex > 0) {
      setCurrentStage(stages[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <ProgressStepper currentStage={currentStage} onStageClick={handleStageClick} />
      
      <main className="flex-1 pb-8">
        {currentStage === "demographics" && (
          <DemographicsForm onNext={goToNextStage} />
        )}
        {currentStage === "goals" && (
          <GoalsForm onNext={goToNextStage} onBack={goToPreviousStage} />
        )}
        {currentStage === "upload" && (
          <UploadForm onNext={goToNextStage} onBack={goToPreviousStage} />
        )}
        {currentStage === "analyze" && (
          <AnalyzeStage onNext={goToNextStage} onBack={goToPreviousStage} />
        )}
        {currentStage === "report" && (
          <ReportStage onBack={goToPreviousStage} />
        )}
      </main>
    </div>
  );
}
