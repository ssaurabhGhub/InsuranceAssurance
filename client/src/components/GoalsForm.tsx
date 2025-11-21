import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Heart, Home, Car, Shield, TrendingUp } from "lucide-react";

interface GoalsData {
  insuranceTypes: string[];
  riskTolerance: string;
  specificGoals: string;
}

interface GoalsFormProps {
  onNext: (data: GoalsData) => void;
  onBack: () => void;
}

const insuranceOptions = [
  { id: "life", label: "Life Insurance", icon: Heart },
  { id: "health", label: "Health Insurance", icon: Shield },
  { id: "auto", label: "Auto Insurance", icon: Car },
  { id: "home", label: "Home Insurance", icon: Home },
  { id: "retirement", label: "Retirement Planning", icon: TrendingUp },
];

export default function GoalsForm({ onNext, onBack }: GoalsFormProps) {
  const [formData, setFormData] = useState<GoalsData>({
    insuranceTypes: [],
    riskTolerance: "",
    specificGoals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Goals submitted:", formData);
    onNext(formData);
  };

  const toggleInsuranceType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      insuranceTypes: prev.insuranceTypes.includes(type)
        ? prev.insuranceTypes.filter((t) => t !== type)
        : [...prev.insuranceTypes, type],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2" data-testid="text-stage-title">
          Insurance Goals
        </h2>
        <p className="text-sm text-muted-foreground" data-testid="text-stage-description">
          Help us understand your insurance needs and financial objectives.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <Label className="text-base">Which types of insurance are you interested in?</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insuranceOptions.map((option) => {
              const Icon = option.icon;
              const isChecked = formData.insuranceTypes.includes(option.id);
              return (
                <div
                  key={option.id}
                  className={`flex items-center space-x-3 p-4 rounded-md border transition-colors hover-elevate ${
                    isChecked ? "border-primary bg-primary/5" : "border-border"
                  }`}
                >
                  <Checkbox
                    id={option.id}
                    checked={isChecked}
                    onCheckedChange={() => toggleInsuranceType(option.id)}
                    data-testid={`checkbox-${option.id}`}
                  />
                  <Icon className="w-5 h-5 text-primary" />
                  <Label
                    htmlFor={option.id}
                    className="flex-1 cursor-pointer font-normal"
                  >
                    {option.label}
                  </Label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-base">What is your risk tolerance?</Label>
          <RadioGroup
            value={formData.riskTolerance}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, riskTolerance: value }))}
          >
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-4 rounded-md border border-border hover-elevate">
                <RadioGroupItem value="conservative" id="conservative" data-testid="radio-conservative" />
                <Label htmlFor="conservative" className="flex-1 cursor-pointer font-normal">
                  <div className="font-medium">Conservative</div>
                  <div className="text-sm text-muted-foreground">
                    Prefer stability and minimal risk
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-md border border-border hover-elevate">
                <RadioGroupItem value="moderate" id="moderate" data-testid="radio-moderate" />
                <Label htmlFor="moderate" className="flex-1 cursor-pointer font-normal">
                  <div className="font-medium">Moderate</div>
                  <div className="text-sm text-muted-foreground">
                    Balance between risk and return
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-md border border-border hover-elevate">
                <RadioGroupItem value="aggressive" id="aggressive" data-testid="radio-aggressive" />
                <Label htmlFor="aggressive" className="flex-1 cursor-pointer font-normal">
                  <div className="font-medium">Aggressive</div>
                  <div className="text-sm text-muted-foreground">
                    Willing to take higher risks for potential gains
                  </div>
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="specificGoals">Specific Goals or Concerns (Optional)</Label>
          <Textarea
            id="specificGoals"
            value={formData.specificGoals}
            onChange={(e) => setFormData((prev) => ({ ...prev, specificGoals: e.target.value }))}
            placeholder="Tell us about any specific insurance goals, concerns, or questions you have..."
            rows={4}
            data-testid="textarea-specificGoals"
          />
        </div>

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            data-testid="button-back"
          >
            Back
          </Button>
          <Button type="submit" data-testid="button-continue">
            Continue to Next Step
          </Button>
        </div>
      </form>
    </div>
  );
}
