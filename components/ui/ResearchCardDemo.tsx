"use client";

import React from "react";
import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
} from "@/components/ui/animated-card-chart";
import {
  ATSVisualization,
  NeuralNetworkVisualization,
  SalaryVisualization,
  ScanVisualization,
  ApplicationsVisualization,
  RemoteVisualization,
} from "@/components/ui/research-visualizations";

// Demo showcasing all 6 unique visualizations
export default function ResearchCardDemo() {
  return (
    <div className="min-h-screen bg-background p-10 flex flex-col items-center gap-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Professional Research Visualizations
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Hover over each card to see smooth, coordinated animations built on a professional framework.
          Each visualization tells the story of its data.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 1: ATS Rejection - Funnel */}
        <AnimatedCard className="w-full max-w-[356px]">
          <CardVisual>
            <ATSVisualization />
          </CardVisual>
          <CardBody>
            <CardTitle>ATS Rejection Rate</CardTitle>
            <CardDescription>
              73% of qualified candidates never reach human recruiters
            </CardDescription>
          </CardBody>
        </AnimatedCard>

        {/* 2: Job Matches - Neural Network */}
        <AnimatedCard className="w-full max-w-[356px]">
          <CardVisual>
            <NeuralNetworkVisualization />
          </CardVisual>
          <CardBody>
            <CardTitle>More Job Matches</CardTitle>
            <CardDescription>
              3.2x more opportunities with semantic AI matching
            </CardDescription>
          </CardBody>
        </AnimatedCard>

        {/* 3: Salaries - Ascending Bars */}
        <AnimatedCard className="w-full max-w-[356px]">
          <CardVisual>
            <SalaryVisualization />
          </CardVisual>
          <CardBody>
            <CardTitle>Higher Salaries</CardTitle>
            <CardDescription>
              68% average salary increase for remote developers
            </CardDescription>
          </CardBody>
        </AnimatedCard>

        {/* 4: Scan Time - Eye Tracking */}
        <AnimatedCard className="w-full max-w-[356px]">
          <CardVisual>
            <ScanVisualization />
          </CardVisual>
          <CardBody>
            <CardTitle>Recruiter Scan Time</CardTitle>
            <CardDescription>
              Only 7 seconds for initial resume review
            </CardDescription>
          </CardBody>
        </AnimatedCard>

        {/* 5: Applications - Stacked Pile */}
        <AnimatedCard className="w-full max-w-[356px]">
          <CardVisual>
            <ApplicationsVisualization />
          </CardVisual>
          <CardBody>
            <CardTitle>Applications Per Job</CardTitle>
            <CardDescription>
              250+ applications per job posting in 2026
            </CardDescription>
          </CardBody>
        </AnimatedCard>

        {/* 6: Remote Work - Globe */}
        <AnimatedCard className="w-full max-w-[356px]">
          <CardVisual>
            <RemoteVisualization />
          </CardVisual>
          <CardBody>
            <CardTitle>Global Remote Workforce</CardTitle>
            <CardDescription>
              48% of workforce now works remotely
            </CardDescription>
          </CardBody>
        </AnimatedCard>
      </div>

      {/* Animation Framework Info */}
      <div className="mt-8 p-6 bg-muted/50 rounded-xl max-w-4xl">
        <h3 className="font-semibold mb-4 text-center">Animation Framework Principles</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-foreground mb-1">Easing</h4>
            <p className="text-muted-foreground">cubic-bezier(0.6, 0.6, 0, 1) for smooth deceleration</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Timing</h4>
            <p className="text-muted-foreground">400-600ms for transitions, 200-300ms for micro-interactions</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Layer System</h4>
            <p className="text-muted-foreground">Sequential reveals with staggered delays</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">State</h4>
            <p className="text-muted-foreground">CSS transitions only, no JS animation loops</p>
          </div>
        </div>
      </div>
    </div>
  );
}
