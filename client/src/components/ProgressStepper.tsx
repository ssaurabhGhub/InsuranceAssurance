import { User, Target, Upload, BarChart3, FileText, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  { id: "demographics", label: "Demographics", icon: User },
  { id: "goals", label: "Goals", icon: Target },
  { id: "upload", label: "Upload", icon: Upload },
  { id: "analyze", label: "Analyze", icon: BarChart3 },
  { id: "report", label: "Report", icon: FileText },
];

interface ProgressStepperProps {
  currentStage: string;
  onStageClick: (stageId: string) => void;
}

export default function ProgressStepper({ currentStage, onStageClick }: ProgressStepperProps) {
  const currentIndex = stages.findIndex((s) => s.id === currentStage);

  return (
    <div className="bg-background border-b border-border py-6 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = stage.id === currentStage;
            const isCompleted = index < currentIndex;
            const isFuture = index > currentIndex;

            return (
              <div key={stage.id} className="flex-1 flex items-center">
                <button
                  onClick={() => onStageClick(stage.id)}
                  className={cn(
                    "flex flex-col items-center gap-2 w-full group",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
                  )}
                  data-testid={`button-stage-${stage.id}`}
                >
                  <div
                    className={cn(
                      "rounded-full flex items-center justify-center transition-all hover-elevate active-elevate-2",
                      isActive && "w-12 h-12 bg-primary text-primary-foreground border-2 border-primary-border",
                      isCompleted && "w-10 h-10 bg-primary text-primary-foreground border border-primary-border",
                      isFuture && "w-10 h-10 bg-muted text-muted-foreground border border-muted-border"
                    )}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" data-testid={`icon-complete-${stage.id}`} />
                    ) : (
                      <Icon className={cn("w-5 h-5", isActive && "w-6 h-6")} data-testid={`icon-stage-${stage.id}`} />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs md:text-sm transition-all hidden sm:block",
                      isActive && "font-semibold text-foreground",
                      isCompleted && "font-medium text-foreground",
                      isFuture && "text-muted-foreground"
                    )}
                    data-testid={`text-stage-${stage.id}`}
                  >
                    {stage.label}
                  </span>
                </button>

                {index < stages.length - 1 && (
                  <div
                    className={cn(
                      "h-0.5 flex-1 mx-1 md:mx-2 transition-all duration-300",
                      index < currentIndex ? "bg-primary" : "bg-border"
                    )}
                    data-testid={`progress-line-${index}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
