"use client";

import * as React from "react";
import { useState } from "react";
import {
  GridLayer,
  RadialGradientLayer,
  LinearRevealLayer,
  TooltipLayer,
  BadgeLayer,
  ScaleLayer,
  BarChartLayer,
  cn,
} from "@/components/ui/animated-card-chart";

// ============================================
// CARD 1: ATS REJECTION - Funnel Visualization
// Concept: Resumes falling through a funnel, most rejected
// ============================================

export function ATSVisualization() {
  const [hovered, setHovered] = useState(false);
  const resumePositions = [
    { x: 60, y: 20, delay: 0 },
    { x: 100, y: 25, delay: 50 },
    { x: 140, y: 18, delay: 100 },
    { x: 180, y: 22, delay: 0 },
    { x: 220, y: 20, delay: 50 },
    { x: 260, y: 24, delay: 100 },
    { x: 300, y: 19, delay: 0 },
  ];

  return (
    <div
      className="relative h-[180px] w-full overflow-hidden rounded-t-lg bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GridLayer color="#64748b10" />

      {/* Resume papers at top */}
      {resumePositions.map((pos, i) => (
        <div
          key={i}
          className="absolute transition-all duration-[200ms]"
          style={{
            left: `${pos.x}px`,
            top: hovered ? `${pos.y + (i % 3) * 8}px` : `${pos.y}px`,
            transitionDelay: `${pos.delay}ms`,
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            opacity: hovered ? 0.3 + (i % 3) * 0.2 : 1,
          }}
        >
          <svg width="28" height="36" viewBox="0 0 28 36">
            <rect
              x="0"
              y="0"
              width="28"
              height="36"
              rx="2"
              fill="white"
              stroke="#cbd5e1"
              strokeWidth="1"
            />
            <line x1="4" y1="10" x2="24" y2="10" stroke="#e2e8f0" strokeWidth="2" />
            <line x1="4" y1="16" x2="20" y2="16" stroke="#e2e8f0" strokeWidth="2" />
            <line x1="4" y1="22" x2="22" y2="22" stroke="#e2e8f0" strokeWidth="2" />
            <line x1="4" y1="28" x2="16" y2="28" stroke="#e2e8f0" strokeWidth="2" />
          </svg>
        </div>
      ))}

      {/* Funnel */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[200ms]"
        style={{
          width: hovered ? "200px" : "280px",
          height: hovered ? "90px" : "70px",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 280 70" preserveAspectRatio="none">
          <defs>
            <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64748b" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#64748b" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M 0 0 L 280 0 L 220 70 L 60 70 Z"
            fill="url(#funnelGrad)"
            stroke="#94a3b8"
            strokeWidth="1"
          />
          {/* Filter lines */}
          <line x1="60" y1="20" x2="220" y2="20" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
          <line x1="80" y1="45" x2="200" y2="45" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
        </svg>
      </div>

      {/* X marks for rejected */}
      {hovered && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="100" height="60" className="animate-pulse" style={{ animationDuration: '1.5s' }}>
            <g transform="translate(20, 10)">
              <line x1="0" y1="0" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" />
              <line x1="12" y1="0" x2="0" y2="12" stroke="#ef4444" strokeWidth="2" />
            </g>
            <g transform="translate(70, 35)">
              <line x1="0" y1="0" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" />
              <line x1="12" y1="0" x2="0" y2="12" stroke="#ef4444" strokeWidth="2" />
            </g>
          </svg>
        </div>
      )}

      {/* Single resume passing through */}
      <div
        className="absolute transition-all duration-[250ms]"
        style={{
          left: hovered ? "50%" : "90%",
          top: hovered ? "55%" : "25%",
          transform: "translate(-50%, -50%)",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          transitionDelay: "200ms",
        }}
      >
        <svg width="24" height="32" viewBox="0 0 24 32">
          <rect
            x="0"
            y="0"
            width="24"
            height="32"
            rx="2"
            fill="white"
            stroke="#22c55e"
            strokeWidth="2"
          />
          <line x1="4" y1="10" x2="20" y2="10" stroke="#bbf7d0" strokeWidth="2" />
          <line x1="4" y1="16" x2="16" y2="16" stroke="#bbf7d0" strokeWidth="2" />
          <line x1="4" y1="22" x2="18" y2="22" stroke="#bbf7d0" strokeWidth="2" />
        </svg>
      </div>

      {/* 73% badge */}
      <BadgeLayer
        hovered={hovered}
        color="#ef4444"
        secondaryColor="#f97316"
        badges={[{ color: "#ef4444", text: "73%" }]}
      />

      {/* Percentage label */}
      <LinearRevealLayer color="#ef4444" hovered={hovered}>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
          <p className="text-xs text-slate-500 font-medium">filtered out</p>
        </div>
      </LinearRevealLayer>
    </div>
  );
}

// ============================================
// CARD 2: JOB MATCHES - Neural Network
// Concept: Nodes connecting, representing AI matching
// ============================================

export function NeuralNetworkVisualization() {
  const [hovered, setHovered] = useState(false);
  const nodes = [
    { x: 178, y: 90, connections: [1, 2, 3, 4], isHub: true },
    { x: 80, y: 45, connections: [0, 4], isHub: false },
    { x: 280, y: 55, connections: [0, 3], isHub: false },
    { x: 100, y: 140, connections: [0, 4], isHub: false },
    { x: 260, y: 130, connections: [0, 1], isHub: false },
    { x: 178, y: 25, connections: [0], isHub: false },
  ];

  return (
    <div
      className="relative h-[180px] w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-950 dark:to-indigo-950"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GridLayer color="#8b5cf610" />

      <ScaleLayer hovered={hovered} scale={1.05}>
        <svg width="356" height="180" className="absolute inset-0">
          {/* Connection lines */}
          {nodes.map((node, i) =>
            node.connections.map((j) => (
              <line
                key={`${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={nodes[j].x}
                y2={nodes[j].y}
                stroke="#8b5cf6"
                strokeWidth={hovered ? 1.5 : 0.75}
                strokeOpacity={hovered ? 0.5 : 0.2}
                className="transition-all duration-[200ms]"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transitionDelay: `${(i + j) * 30}ms`
                }}
              />
            ))
          )}

          {/* Pulsing rings on hover */}
          {hovered && nodes.map((node, i) => (
            <circle
              key={`pulse-${i}`}
              cx={node.x}
              cy={node.y}
              r="18"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="1"
              opacity="0.3"
              className="animate-ping"
              style={{
                animationDuration: '2s',
                animationDelay: `${i * 200}ms`,
                animationIterationCount: '2'
              }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node, i) => {
            const size = node.isHub ? (hovered ? 16 : 12) : (hovered ? 10 : 7);
            return (
              <g key={i}>
                {/* Glow */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={size + 4}
                  fill="#8b5cf6"
                  opacity={hovered ? 0.3 : 0.15}
                  className="transition-all duration-[150ms]"
                  style={{ transitionDelay: `${i * 35}ms` }}
                />
                {/* Core */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={size}
                  fill="#8b5cf6"
                  className="transition-all duration-[150ms]"
                  style={{ transitionDelay: `${i * 35}ms` }}
                />
              </g>
            );
          })}
        </svg>
      </ScaleLayer>

      <RadialGradientLayer color="#8b5cf6" />

      {/* 3.2x badge */}
      <div
        className="absolute top-3 right-3 transition-all duration-[150ms]"
        style={{
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}
      >
        <div className="flex items-center justify-center rounded-full bg-violet-500 px-3 py-1 shadow-lg min-w-[44px]">
          <span className="text-xs font-bold text-white leading-none">3.2x</span>
        </div>
      </div>

      <LinearRevealLayer color="#8b5cf6" hovered={hovered} />
    </div>
  );
}

// ============================================
// CARD 3: HIGHER SALARIES - Ascending Bars
// Concept: Bars climbing with currency symbols
// ============================================

export function SalaryVisualization() {
  const [hovered, setHovered] = useState(false);
  const bars = [
    { baseHeight: 35, baseY: 115, label: "$52K", delay: 0 },
    { baseHeight: 50, baseY: 100, label: "$68K", delay: 25 },
    { baseHeight: 65, baseY: 85, label: "$85K", delay: 50 },
    { baseHeight: 80, baseY: 70, label: "$95K", delay: 75 },
  ];

  return (
    <div
      className="relative h-[180px] w-full overflow-hidden rounded-t-lg bg-gradient-to-b from-emerald-100 to-teal-100 dark:from-emerald-950 dark:to-teal-950"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GridLayer color="#10b98110" />

      <ScaleLayer hovered={hovered} scale={1.08}>
        <svg width="356" height="180" className="absolute inset-0">
          <defs>
            <linearGradient id="salaryBarGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="salaryBarGradHover" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="40"
              y1={40 + i * 30}
              x2="316"
              y2={40 + i * 30}
              stroke="#10b981"
              strokeOpacity="0.1"
              strokeDasharray="2 4"
            />
          ))}

          {/* Bars */}
          {bars.map((bar, i) => {
            const targetHeight = hovered ? bar.baseHeight + 15 : bar.baseHeight;
            const targetY = hovered ? bar.baseY - 15 : bar.baseY;
            const fill = hovered ? "url(#salaryBarGradHover)" : "url(#salaryBarGrad)";

            return (
              <g key={i} transform={`translate(${70 + i * 60}, 0)`}>
                {/* Bar */}
                <rect
                  x="0"
                  y={targetY}
                  width="40"
                  height={targetHeight}
                  rx="4"
                  fill={fill}
                  className="transition-all duration-[200ms]"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: `${bar.delay}ms`
                  }}
                />
                {/* Value label above bar */}
                <text
                  x="20"
                  y={targetY - 8}
                  textAnchor="middle"
                  className="text-xs dark:fill-emerald-300 fill-emerald-600 font-semibold transition-all duration-[150ms]"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: `${bar.delay + 60}ms`,
                    opacity: hovered ? 1 : 0.7
                  }}
                >
                  {bar.label}
                </text>
              </g>
            );
          })}

          {/* Arrow up */}
          <g transform="translate(295, 55)">
            <path
              d="M 0 25 L 12 0 L 24 25 M 12 0 L 12 30"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-[200ms]"
              style={{
                transform: hovered ? "translateY(-8px)" : "translateY(0)",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
              }}
            />
          </g>
        </svg>
      </ScaleLayer>

      <RadialGradientLayer color="#10b981" />

      {/* +68% badge */}
      <BadgeLayer
        hovered={hovered}
        color="#10b981"
        secondaryColor="#06b6d4"
        badges={[{ color: "#10b981", text: "+68%" }]}
      />

      <LinearRevealLayer color="#10b981" hovered={hovered} />
    </div>
  );
}

// ============================================
// CARD 4: RECRUITER SCAN - Quick Review
// Concept: A document being quickly scanned - speed lines and focus
// ============================================

export function ScanVisualization() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-[180px] w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GridLayer color="#f59e0b08" />

      <ScaleLayer hovered={hovered} scale={1.02}>
        <svg width="356" height="180" className="absolute inset-0">
          {/* Document shadow */}
          <rect
            x="108"
            y="22"
            width="140"
            height="136"
            rx="4"
            fill="#e2e8f0"
            className="dark:fill-zinc-800 fill-slate-300 transition-all duration-[200ms]"
            style={{ opacity: hovered ? 0.5 : 0.3 }}
          />

          {/* Main document */}
          <rect
            x="100"
            y="15"
            width="140"
            height="136"
            rx="4"
            fill="white"
            stroke="#cbd5e1"
            strokeWidth="1"
            className="transition-all duration-300 dark:fill-zinc-100 dark:stroke-zinc-700 fill-white stroke-slate-300"
          />

          {/* Document content */}
          <g opacity={hovered ? 0.9 : 0.7} className="transition-opacity duration-[150ms]">
            {/* Header bar */}
            <rect x="112" y="25" width="70" height="8" rx="2" fill="#64748b" className="dark:fill-zinc-400 fill-slate-500" />
            {/* Subtitle */}
            <rect x="112" y="38" width="100" height="4" rx="1" fill="#94a3b8" className="dark:fill-zinc-500 fill-slate-400" />
            <rect x="112" y="46" width="80" height="4" rx="1" fill="#94a3b8" className="dark:fill-zinc-500 fill-slate-400" />
            {/* Section */}
            <rect x="112" y="60" width="45" height="5" rx="1" fill="#64748b" className="dark:fill-zinc-400 fill-slate-500" />
            <rect x="112" y="70" width="116" height="3" rx="1" fill="#e2e8f0" className="dark:fill-zinc-700 fill-slate-200" />
            <rect x="112" y="78" width="100" height="3" rx="1" fill="#e2e8f0" className="dark:fill-zinc-700 fill-slate-200" />
            <rect x="112" y="86" width="110" height="3" rx="1" fill="#e2e8f0" className="dark:fill-zinc-700 fill-slate-200" />
            {/* Another section */}
            <rect x="112" y="100" width="50" height="5" rx="1" fill="#64748b" className="dark:fill-zinc-400 fill-slate-500" />
            <rect x="112" y="110" width="116" height="3" rx="1" fill="#e2e8f0" className="dark:fill-zinc-700 fill-slate-200" />
            <rect x="112" y="118" width="90" height="3" rx="1" fill="#e2e8f0" className="dark:fill-zinc-700 fill-slate-200" />
            <rect x="112" y="126" width="105" height="3" rx="1" fill="#e2e8f0" className="dark:fill-zinc-700 fill-slate-200" />
          </g>

          {/* Speed lines - horizontal streaks indicating quick movement */}
          <g>
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1={hovered ? 85 : 95}
                y1={35 + i * 28}
                x2={hovered ? 70 : 85}
                y2={35 + i * 28}
                stroke="#f59e0b"
                strokeWidth="2"
                strokeLinecap="round"
                opacity={hovered ? 0.6 - i * 0.1 : 0}
                className="transition-all duration-[150ms]"
                style={{
                  transitionDelay: `${i * 25}ms`,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
                }}
              />
            ))}
          </g>

          {/* Focus brackets - corners indicating attention */}
          <g
            opacity={hovered ? 1 : 0}
            className="transition-opacity duration-[150ms]"
            style={{ transitionDelay: "60ms" }}
          >
            {/* Top-left bracket */}
            <path d="M 95 20 L 95 30 M 95 20 L 105 20" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Top-right bracket */}
            <path d="M 245 20 L 245 30 M 245 20 L 235 20" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Bottom-left bracket */}
            <path d="M 95 146 L 95 136 M 95 146 L 105 146" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Bottom-right bracket */}
            <path d="M 245 146 L 245 136 M 245 146 L 235 146" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>

          {/* Quick glance indicator - small eye icon */}
          <g
            transform="translate(252, 130)"
            opacity={hovered ? 0.8 : 0.4}
            className="transition-all duration-[150ms]"
          >
            <ellipse cx="0" cy="0" rx="12" ry="7" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3" fill="#f59e0b" />
            <circle cx="1" cy="-1" r="1" fill="white" />
          </g>
        </svg>
      </ScaleLayer>

      <RadialGradientLayer color="#f59e0b" />

      {/* 7s badge - positioned differently */}
      <div
        className="absolute top-3 right-3 transition-all duration-300"
        style={{
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}
      >
        <div className="flex items-center justify-center rounded-full bg-amber-500 px-3 py-1 shadow-lg min-w-[36px]">
          <span className="text-xs font-bold text-white leading-none">7s</span>
        </div>
      </div>

      {/* Subtle timer arc */}
      <svg
        width="40"
        height="40"
        className="absolute bottom-3 right-3"
        style={{ opacity: hovered ? 0.8 : 0 }}
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={hovered ? 0 : 100}
          className="transition-all duration-[250ms]"
          style={{
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: "rotate(-90deg)",
            transformOrigin: "center"
          }}
        />
      </svg>
    </div>
  );
}

// ============================================
// CARD 5: APPLICATIONS - Stacked Pile
// Concept: Papers piling up
// ============================================

export function ApplicationsVisualization() {
  const [hovered, setHovered] = useState(false);
  const stackCount = 8;

  return (
    <div
      className="relative h-[180px] w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950 dark:to-pink-950"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GridLayer color="#ec489910" />

      {/* 250+ badge - HTML for proper centering */}
      <div
        className="absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-pink-500 transition-all duration-[150ms] shadow-lg"
        style={{
          width: "55px",
          height: "26px",
          transform: hovered ? "scale(1.15)" : "scale(1)",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}
      >
        <span className="text-sm font-bold text-white leading-none">250+</span>
      </div>

      <ScaleLayer hovered={hovered} scale={1.1}>
        <svg width="356" height="180" className="absolute inset-0">
          <defs>
            <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>

          {/* Stacked papers */}
          {[...Array(stackCount)].map((_, i) => {
            const baseX = 100 + i * 22;
            const baseY = 20 + i * 12;
            const rotation = (i - 4) * 2;

            const offsetX = hovered ? (i % 2 === 0 ? -5 : 5) : 0;
            const offsetY = hovered ? (i % 3) * -3 : 0;
            const rotateChange = hovered ? (i % 2 === 0 ? -3 : 3) : 0;

            return (
              <g
                key={i}
                transform={`translate(${baseX + offsetX}, ${baseY + offsetY}) rotate(${rotation + rotateChange})`}
              >
                <rect
                  x="0"
                  y="0"
                  width="110"
                  height="140"
                  rx="4"
                  fill="url(#paperGrad)"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                  className="transition-all duration-[200ms] dark:stroke-zinc-700 stroke-slate-300"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: `${i * 25}ms`
                  }}
                />
                {/* Paper lines */}
                <rect x="12" y="20" width="70" height="5" rx="1" fill="#cbd5e1" opacity="0.5" className="dark:fill-zinc-600 fill-slate-400" />
                <rect x="12" y="32" width="85" height="3" rx="1" fill="#e2e8f0" className="dark:fill-zinc-700 fill-slate-300" />
                <rect x="12" y="42" width="75" height="3" rx="1" fill="#e2e8f0" className="dark:fill-zinc-700 fill-slate-300" />
                <rect x="12" y="52" width="80" height="3" rx="1" fill="#e2e8f0" className="dark:fill-zinc-700 fill-slate-300" />
              </g>
            );
          })}

          {/* "per job" label */}
          <g transform="translate(245, 130)">
            <rect
              x="0"
              y="0"
              width="75"
              height="32"
              rx="4"
              fill="white"
              stroke="#ec4899"
              strokeWidth="1"
              strokeOpacity={hovered ? 0.8 : 0.4}
              className="transition-all duration-[150ms] dark:fill-zinc-100 dark:stroke-pink-400 fill-white stroke-pink-300"
            />
            <text x="37" y="14" textAnchor="middle" dominantBaseline="middle" fill="#ec4899" fontSize="10" fontWeight="500" className="dark:fill-pink-300 fill-pink-600">per job</text>
            <text x="37" y="26" textAnchor="middle" dominantBaseline="middle" fill="#ec4899" fontSize="10" fontWeight="bold" className="dark:fill-pink-300 fill-pink-600">avg</text>
          </g>
        </svg>
      </ScaleLayer>

      <RadialGradientLayer color="#ec4899" />
      <LinearRevealLayer color="#ec4899" hovered={hovered} />
    </div>
  );
}

// ============================================
// CARD 6: REMOTE WORK - Rotating Globe
// Concept: Globe with connection lines
// ============================================

export function RemoteVisualization() {
  const [hovered, setHovered] = useState(false);
  const cities = [
    { x: 178, y: 90, label: "HQ", connected: true },
    { x: 95, y: 45, label: "NYC", connected: true },
    { x: 285, y: 55, label: "LON", connected: true },
    { x: 55, y: 100, label: "TYO", connected: false },
    { x: 305, y: 125, label: "SYD", connected: false },
    { x: 145, y: 135, label: "BER", connected: true },
    { x: 225, y: 40, label: "DXB", connected: false },
  ];

  return (
    <div
      className="relative h-[180px] w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GridLayer color="#06b6d410" />

      {/* 48% badge - HTML for proper centering */}
      <div
        className="absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-teal-500 transition-all duration-[150ms] shadow-lg"
        style={{
          width: "50px",
          height: "24px",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}
      >
        <span className="text-xs font-bold text-white leading-none">48%</span>
      </div>

      <ScaleLayer hovered={hovered} scale={1.08}>
        <svg width="356" height="180" className="absolute inset-0">
          <defs>
            <radialGradient id="globeGrad" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05" />
            </radialGradient>
            <clipPath id="globeClip">
              <circle cx="178" cy="90" r="65" />
            </clipPath>
          </defs>

          {/* Globe circle */}
          <circle
            cx="178"
            cy="90"
            r="65"
            fill="url(#globeGrad)"
            stroke="#06b6d4"
            strokeWidth="1.5"
          />

          {/* Globe grid lines */}
          <g clipPath="url(#globeClip)" opacity={hovered ? 0.5 : 0.25}>
            {/* Latitude lines */}
            {[-40, -20, 0, 20, 40].map((lat, i) => (
              <ellipse
                key={`lat-${i}`}
                cx="178"
                cy={90 + lat * 0.9}
                rx={Math.cos(lat * Math.PI / 180) * 65}
                ry="12"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.75"
              />
            ))}
            {/* Longitude lines */}
            {[-60, -30, 0, 30, 60].map((lon, i) => (
              <line
                key={`lon-${i}`}
                x1={178 + lon}
                y1="25"
                x2={178 + lon * 0.5}
                y2="155"
                stroke="#06b6d4"
                strokeWidth="0.75"
              />
            ))}
          </g>

          {/* Connection lines */}
          {cities.filter(c => c.connected).map((city, i) => (
            <line
              key={`conn-${i}`}
              x1="178"
              y1="90"
              x2={city.x}
              y2={city.y}
              stroke="#14b8a6"
              strokeWidth={hovered ? 1.5 : 1}
              strokeOpacity={hovered ? 0.6 : 0.3}
              className="transition-all duration-[200ms]"
              style={{
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: `${i * 40}ms`
              }}
            />
          ))}

          {/* City dots */}
          {cities.map((city, i) => (
            <g key={`city-${i}`}>
              <circle
                cx={city.x}
                cy={city.y}
                r={city.connected ? (hovered ? 6 : 4) : 3}
                fill={city.connected ? "#14b8a6" : "#94a3b8"}
                className="transition-all duration-[150ms]"
                style={{ transitionDelay: `${i * 30}ms` }}
              />
              {hovered && (
                <text
                  x={city.x}
                  y={city.y - 10}
                  textAnchor="middle"
                  className="text-[8px] fill-slate-600 dark:fill-slate-400 font-medium text-slate-600 dark:text-slate-300"
                >
                  {city.label}
                </text>
              )}
            </g>
          ))}

        </svg>
      </ScaleLayer>

      <RadialGradientLayer color="#06b6d4" />
      <LinearRevealLayer color="#06b6d4" hovered={hovered} />
    </div>
  );
}
