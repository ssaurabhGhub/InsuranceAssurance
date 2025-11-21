import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle, AlertTriangle, TrendingUp, Shield, Target } from "lucide-react";

interface ReportStageProps {
  onBack: () => void;
}

export default function ReportStage({ onBack }: ReportStageProps) {
  const handleDownload = () => {
    console.log("Downloading report...");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2" data-testid="text-stage-title">
          Comprehensive Insurance Report
        </h2>
        <p className="text-sm text-muted-foreground" data-testid="text-stage-description">
          Your complete insurance portfolio analysis and recommendations.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="bg-primary text-primary-foreground" data-testid="card-summary">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Shield className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Portfolio Summary</h3>
                <p className="text-sm opacity-90 mb-4">
                  Your insurance portfolio shows moderate coverage with opportunities for optimization. 
                  We've identified 2 critical areas requiring attention and potential savings of $450 annually.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary-foreground text-primary" data-testid="badge-score">
                    Score: 72/100
                  </Badge>
                  <Badge variant="secondary" className="bg-primary-foreground text-primary" data-testid="badge-status">
                    Needs Improvement
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card data-testid="card-strengths">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-chart-1" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-chart-1 mt-0.5">•</span>
                  <span className="text-muted-foreground">Life insurance coverage aligns with dependents' needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-1 mt-0.5">•</span>
                  <span className="text-muted-foreground">Comprehensive health insurance with good network</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-1 mt-0.5">•</span>
                  <span className="text-muted-foreground">Balanced risk tolerance approach</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card data-testid="card-areas-for-improvement">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  <span className="text-muted-foreground">Home insurance coverage below property value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  <span className="text-muted-foreground">Auto insurance deductible optimization opportunity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  <span className="text-muted-foreground">Missing disability income protection</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card data-testid="card-action-plan">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Recommended Action Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">Immediate: Increase Home Insurance</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Increase coverage from $200,000 to $350,000 to match current property value. 
                    Estimated additional cost: $150/year
                  </p>
                  <Badge variant="destructive" className="text-xs">High Priority</Badge>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">Short-term: Review Auto Policy</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Consider increasing deductible from $500 to $1,000 to save $250/year. 
                    Ensure you have adequate emergency savings first.
                  </p>
                  <Badge variant="secondary" className="text-xs">Medium Priority</Badge>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">Long-term: Add Disability Insurance</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Protect your income with disability coverage. Based on your income, 
                    recommended coverage: $4,500/month. Estimated cost: $75/month
                  </p>
                  <Badge variant="secondary" className="text-xs">Low Priority</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-cost-analysis">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-chart-2" />
              Cost-Benefit Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                <span className="text-sm font-medium text-foreground">Current Annual Premium</span>
                <span className="text-lg font-semibold text-foreground" data-testid="text-current-premium">
                  $3,200
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                <span className="text-sm font-medium text-foreground">Recommended Changes Cost</span>
                <span className="text-lg font-semibold text-destructive" data-testid="text-additional-cost">
                  +$1,050
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                <span className="text-sm font-medium text-foreground">Potential Savings</span>
                <span className="text-lg font-semibold text-chart-1" data-testid="text-savings">
                  -$250
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-primary text-primary-foreground rounded-md">
                <span className="text-sm font-medium">Projected Annual Premium</span>
                <span className="text-xl font-bold" data-testid="text-projected-premium">
                  $4,000
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Net increase of $800/year for significantly improved coverage and risk protection.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
          <Button
            variant="outline"
            onClick={onBack}
            data-testid="button-back"
          >
            Back to Analysis
          </Button>
          <Button onClick={handleDownload} className="gap-2" data-testid="button-download">
            <Download className="w-4 h-4" />
            Download Full Report (PDF)
          </Button>
        </div>
      </div>
    </div>
  );
}
