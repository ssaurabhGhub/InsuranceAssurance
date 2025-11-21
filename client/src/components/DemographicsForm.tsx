import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface DemographicsData {
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  gender: string;
  maritalStatus: string;
  dependents: string;
  annualIncome: string;
  currency: string;
  location: string;
}

interface DemographicsFormProps {
  onNext: (data: DemographicsData) => void;
}

export default function DemographicsForm({ onNext }: DemographicsFormProps) {
  const [formData, setFormData] = useState<DemographicsData>({
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    gender: "",
    maritalStatus: "",
    dependents: "",
    annualIncome: "",
    currency: "USD",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demographics submitted:", formData);
    onNext(formData);
  };

  const updateField = (field: keyof DemographicsData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2" data-testid="text-stage-title">
          Personal Demographics
        </h2>
        <p className="text-sm text-muted-foreground" data-testid="text-stage-description">
          Tell us about yourself to help us provide personalized insurance recommendations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              placeholder="John"
              data-testid="input-firstName"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="middleName">Middle Name</Label>
            <Input
              id="middleName"
              value={formData.middleName}
              onChange={(e) => updateField("middleName", e.target.value)}
              placeholder="Michael"
              data-testid="input-middleName"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              placeholder="Doe"
              data-testid="input-lastName"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => updateField("age", e.target.value)}
              placeholder="35"
              data-testid="input-age"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select value={formData.gender} onValueChange={(value) => updateField("gender", value)}>
              <SelectTrigger id="gender" data-testid="select-gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="maritalStatus">Marital Status</Label>
            <Select
              value={formData.maritalStatus}
              onValueChange={(value) => updateField("maritalStatus", value)}
            >
              <SelectTrigger id="maritalStatus" data-testid="select-maritalStatus">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
                <SelectItem value="divorced">Divorced</SelectItem>
                <SelectItem value="widowed">Widowed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dependents">Number of Dependents</Label>
            <Input
              id="dependents"
              type="number"
              value={formData.dependents}
              onChange={(e) => updateField("dependents", e.target.value)}
              placeholder="2"
              data-testid="input-dependents"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="annualIncome">Annual Income</Label>
            <Input
              id="annualIncome"
              type="number"
              value={formData.annualIncome}
              onChange={(e) => updateField("annualIncome", e.target.value)}
              placeholder="75000"
              data-testid="input-annualIncome"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <Select value={formData.currency} onValueChange={(value) => updateField("currency", value)}>
              <SelectTrigger id="currency" data-testid="select-currency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD - US Dollar</SelectItem>
                <SelectItem value="EUR">EUR - Euro</SelectItem>
                <SelectItem value="GBP">GBP - British Pound</SelectItem>
                <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                <SelectItem value="INR">INR - Indian Rupee</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => updateField("location", e.target.value)}
            placeholder="City, State/Province, Country"
            data-testid="input-location"
          />
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit" className="w-full md:w-auto" data-testid="button-continue">
            Continue to Next Step
          </Button>
        </div>
      </form>
    </div>
  );
}
