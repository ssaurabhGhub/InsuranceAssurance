import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, TrendingUp, Shield, DollarSign } from "lucide-react";

interface AnalyzeStageProps {
  onNext: () => void;
  onBack: () => void;
}

export default function AnalyzeStage({ onNext, onBack }: AnalyzeStageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2" data-testid="text-stage-title">
          Portfolio Analysis
        </h2>
        <p className="text-sm text-muted-foreground" data-testid="text-stage-description">
          Based on your information, here's our comprehensive analysis of your insurance portfolio.
        </p>
      </div>

      <div className="space-y-6">
        <Card data-testid="card-overall-score">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Overall Portfolio Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Coverage Score</span>
              <span className="text-2xl font-bold text-foreground" data-testid="text-coverage-score">
                72/100
              </span>
            </div>
            <Progress value={72} className="h-2" data-testid="progress-coverage" />
            <p className="text-sm text-muted-foreground">
              Your coverage is moderate but has room for improvement in several key areas.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card data-testid="card-metric-coverage">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-chart-1" />
                <div>
                  <p className="text-2xl font-bold text-foreground" data-testid="text-adequate-coverage">
                    3
                  </p>
                  <p className="text-sm text-muted-foreground">Adequate Coverage</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-metric-gaps">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <div>
                  <p className="text-2xl font-bold text-foreground" data-testid="text-coverage-gaps">
                    2
                  </p>
                  <p className="text-sm text-muted-foreground">Coverage Gaps</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-metric-savings">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-chart-2" />
                <div>
                  <p className="text-2xl font-bold text-foreground" data-testid="text-potential-savings">
                    $450
                  </p>
                  <p className="text-sm text-muted-foreground">Potential Savings/yr</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card data-testid="card-coverage-breakdown">
          <CardHeader>
            <CardTitle className="text-lg">Coverage Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">Life Insurance</span>
                  <Badge variant="default" className="text-xs" data-testid="badge-life">
                    Adequate
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">85%</span>
              </div>
              <Progress value={85} className="h-2" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">Health Insurance</span>
                  <Badge variant="default" className="text-xs" data-testid="badge-health">
                    Good
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">90%</span>
              </div>
              <Progress value={90} className="h-2" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">Auto Insurance</span>
                  <Badge variant="secondary" className="text-xs" data-testid="badge-auto">
                    Needs Attention
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">60%</span>
              </div>
              <Progress value={60} className="h-2" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">Home Insurance</span>
                  <Badge variant="secondary" className="text-xs" data-testid="badge-home">
                    Insufficient
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-recommendations">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Key Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Increase Home Insurance Coverage</p>
                  <p className="text-sm text-muted-foreground">
                    Your current coverage may not adequately protect your property value.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Review Auto Insurance Deductibles</p>
                  <p className="text-sm text-muted-foreground">
                    Consider adjusting your deductible to save approximately $250/year.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-chart-1 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Life Insurance Well-Structured</p>
                  <p className="text-sm text-muted-foreground">
                    Your current life insurance coverage aligns well with your dependents' needs.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            data-testid="button-back"
          >
            Back
          </Button>
          <Button onClick={onNext} data-testid="button-continue">
            View Full Report
          </Button>
        </div>
      </div>
    </div>
  );
}
