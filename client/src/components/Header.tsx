import { Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-card border-b border-card-border h-16 flex items-center px-4 md:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <Shield className="w-8 h-8 text-primary" data-testid="icon-logo" />
        <div>
          <h1 className="text-xl font-bold text-foreground" data-testid="text-brand">
            InsuranceAssurance
          </h1>
          <p className="text-xs text-muted-foreground" data-testid="text-subtitle">
            Smart Insurance Portfolio Analysis
          </p>
        </div>
      </div>
    </header>
  );
}
