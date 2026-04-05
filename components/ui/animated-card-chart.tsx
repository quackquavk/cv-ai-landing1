"use client";

import * as React from "react";
import { useState } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility Function ---
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ============================================
// ANIMATION FRAMEWORK - Professional Easing System
// ============================================

/**
 * Animation Principles (studied from original):
 *
 * 1. EASING: cubic-bezier(0.6, 0.6, 0, 1) - Fast start, smooth deceleration
 *    - Use for transforms (translate, scale)
 *    - Never use linear, ease-in, or ease-out for transforms
 *
 * 2. TIMING: 400-600ms for major transitions, 200-300ms for micro-interactions
 *    - duration-500 for layer reveals
 *    - duration-300 for opacity changes
 *
 * 3. LAYER COORDINATION:
 *    - Layers animate in sequence with staggered delays
 *    - Each layer has its own z-index for proper stacking
 *    - Use group-hover on parent to coordinate all children
 *
 * 4. STATE MANAGEMENT:
 *    - Single hovered boolean controls all layers
 *    - CSS transitions handle smoothness (no JS intervals for animation)
 *    - useEffect only for initialization, not animation loops
 *
 * 5. TRANSFORM VS OPACITY:
 *    - Opacity: instant-feel transitions (200-300ms)
 *    - Transform: motion transitions (400-600ms with proper easing)
 */

// Easing presets (matching original framework)
const easing = {
  smooth: "cubic-bezier(0.6, 0.6, 0, 1)",
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  gentle: "cubic-bezier(0.4, 0, 0.2, 1)",
};

// Timing presets
const timing = {
  fast: "duration-200",
  medium: "duration-300",
  slow: "duration-500",
  slowest: "duration-700",
};

// ============================================
// SPRING CONFIGURATIONS - Apple-like physics
// ============================================

/**
 * Spring configs tuned for Apple-like snappy animations:
 * - snappy: stiffness=350, damping=28 — quick response with subtle overshoot
 *   Use for: scale transforms, card hovers, badge pops
 * - stiff: stiffness=400, damping=30, mass=0.8 — minimal overshoot, very fast
 *   Use for: micro-interactions (150-250ms equivalent feel)
 * - gentle: stiffness=200, damping=25, mass=1.2 — soft, natural settle
 *   Use for: page-level entrances, large element reveals
 */
export const springConfigs = {
  snappy: { type: "spring" as const, stiffness: 350, damping: 28, mass: 1 },
  stiff: { type: "spring" as const, stiffness: 400, damping: 30, mass: 0.8 },
  gentle: { type: "spring" as const, stiffness: 200, damping: 25, mass: 1.2 },
};

/**
 * Timing presets in milliseconds for CSS transitions:
 * - micro (120ms): ultra-fast for scale transforms (1.02-1.05 range)
 * - snappy (200ms): standard hover micro-interactions (Apple standard)
 * - standard (350ms): card entrance animations (replaces 500ms)
 * - reveal (280ms): opacity and layer reveal transitions
 */
export const timingPresets = {
  micro: 120,
  snappy: 200,
  standard: 350,
  reveal: 280,
};

/**
 * Stagger delay presets in milliseconds:
 * - tight (40ms): Apple-style tight stagger for rapid-fire lists
 * - standard (60ms): default stagger for card grids
 * - relaxed (80ms): slower stagger for larger elements
 */
export const staggerDelay = {
  tight: 40,
  standard: 60,
  relaxed: 80,
};

// ============================================
// CARD COMPONENTS
// ============================================

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AnimatedCard({ className, ...props }: CardProps) {
  return (
    <div
      role="region"
      aria-labelledby="card-title"
      aria-describedby="card-description"
      className={cn(
        "group/animated-card relative w-[356px] overflow-hidden rounded-xl border border-border bg-card shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: CardProps) {
  return (
    <div
      role="group"
      className={cn(
        "flex flex-col space-y-1.5 border-t border-border p-4",
        className
      )}
      {...props}
    />
  );
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-none tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export function CardVisual({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("h-[180px] w-[356px] overflow-hidden rounded-t-lg", className)}
      {...props}
    />
  );
}

// ============================================
// LAYER SYSTEM - Reusable Animation Layers
// ============================================

/**
 * GridLayer - Subtle background grid pattern
 * Always visible, provides visual texture
 */
interface GridLayerProps {
  color?: string;
  gridColor?: string;
}

export function GridLayer({ color = "#80808015" }: GridLayerProps) {
  return (
    <div
      style={{ "--grid-color": color } as React.CSSProperties}
      className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:20px_20px] bg-center opacity-70 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
    />
  );
}

/**
 * RadialGradientLayer - Soft vignette effect from center
 * Provides depth and focus toward center
 */
interface RadialGradientLayerProps {
  color?: string;
}

export function RadialGradientLayer({ color = "#8b5cf6" }: RadialGradientLayerProps) {
  return (
    <div className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center">
      <svg
        width="356"
        height="196"
        viewBox="0 0 356 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <rect width="356" height="180" fill="url(#radial_grad)" />
        <defs>
          <radialGradient
            id="radial_grad"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(178 98) rotate(90) scale(98 178)"
          >
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="34%" stopColor={color} stopOpacity="0.15" />
            <stop offset="100%" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * LinearRevealLayer - Slides up from bottom with gradient
 * Use for secondary content reveal
 */
interface LinearRevealLayerProps {
  color?: string;
  hovered?: boolean;
  children?: React.ReactNode;
}

export function LinearRevealLayer({ color = "#8b5cf6", hovered = false, children }: LinearRevealLayerProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-[6] flex w-full items-center justify-center",
        "transition-all duration-[280ms]",
        hovered
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      )}
      style={{
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        transitionDelay: "60ms"
      }}
    >
      {children && (
        <div className="absolute inset-0 z-[10]">
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * TooltipLayer - Slides up from bottom
 * Use for data labels and callouts
 */
interface TooltipLayerProps {
  color?: string;
  hovered?: boolean;
  children?: React.ReactNode;
}

export function TooltipLayer({ color = "#8b5cf6", hovered = false, children }: TooltipLayerProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-[7] flex w-full items-start justify-center p-4",
        "transition-all duration-[200ms]",
        hovered
          ? "translate-y-0"
          : "translate-y-full"
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)", transitionDelay: "100ms" }}
    >
      <div
        className={cn(
          "rounded-md border border-zinc-200/50 bg-white/80 p-1.5 backdrop-blur-sm transition-opacity duration-[150ms]",
          hovered ? "opacity-100" : "opacity-0",
          "dark:border-zinc-800 dark:bg-black/80"
        )}
        style={{ transitionTimingFunction: easing.gentle, transitionDelay: "200ms" }}
      >
        {children || (
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} />
            <p className="text-xs text-black dark:text-white">Data Label</p>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * BadgeLayer - Floating badges that fade on hover
 * Use for key metrics that should disappear during detail view
 */
interface BadgeLayerProps {
  color?: string;
  secondaryColor?: string;
  hovered?: boolean;
  badges?: Array<{ color: string; text: string }>;
}

export function BadgeLayer({
  color = "#8b5cf6",
  secondaryColor = "#fbbf24",
  hovered = false,
  badges = [
    { color, text: "+15.2%" },
    { color: secondaryColor, text: "+18.7%" }
  ]
}: BadgeLayerProps) {
  return (
    <div className="absolute top-4 left-4 z-[8] flex items-center gap-1">
      {badges.map((badge, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center justify-center gap-1 rounded-full border border-zinc-200/50 bg-white/80 px-2 py-0.5 backdrop-blur-sm transition-opacity duration-[150ms]",
            hovered ? "opacity-0" : "opacity-100",
            "dark:border-zinc-700/50 dark:bg-black/80"
          )}
          style={{
            transitionTimingFunction: easing.gentle,
            transitionDelay: `${i * 50}ms`
          }}
        >
          <div
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: badge.color }}
          />
          <span className="text-[10px] leading-none text-black dark:text-white font-medium whitespace-nowrap">
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * ScaleLayer - Container that scales entire visualization
 * Wraps the main visualization for dramatic zoom effect
 */
interface ScaleLayerProps {
  hovered?: boolean;
  scale?: number;
  children: React.ReactNode;
}

export function ScaleLayer({ hovered = false, scale = 1.15, children }: ScaleLayerProps) {
  return (
    <div
      className="absolute inset-0 z-[3] flex items-center justify-center"
      style={{
        transform: hovered ? `scale(${scale})` : "scale(1)",
        transition: "transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {children}
    </div>
  );
}

// ============================================
// ANIMATED BAR CHART - Professional SVG Implementation
// ============================================

interface BarChartLayerProps {
  hovered?: boolean;
  color?: string;
  secondaryColor?: string;
  data?: Array<{
    height: number;
    y: number;
    hoverHeight: number;
    hoverY: number;
    x: number;
    fill: "primary" | "secondary";
  }>;
}

export function BarChartLayer({
  hovered = false,
  color = "#8b5cf6",
  secondaryColor = "#fbbf24",
  data
}: BarChartLayerProps) {
  const defaultData = [
    { height: 20, y: 110, hoverHeight: 20, hoverY: 130, x: 40, fill: "secondary" as const },
    { height: 20, y: 90, hoverHeight: 20, hoverY: 130, x: 60, fill: "primary" as const },
    { height: 40, y: 70, hoverHeight: 30, hoverY: 120, x: 80, fill: "primary" as const },
    { height: 30, y: 80, hoverHeight: 50, hoverY: 100, x: 100, fill: "primary" as const },
    { height: 30, y: 110, hoverHeight: 40, hoverY: 110, x: 120, fill: "secondary" as const },
    { height: 50, y: 110, hoverHeight: 20, hoverY: 130, x: 140, fill: "secondary" as const },
    { height: 50, y: 60, hoverHeight: 30, hoverY: 120, x: 160, fill: "primary" as const },
    { height: 30, y: 80, hoverHeight: 20, hoverY: 130, x: 180, fill: "primary" as const },
    { height: 20, y: 110, hoverHeight: 40, hoverY: 110, x: 200, fill: "secondary" as const },
    { height: 40, y: 70, hoverHeight: 60, hoverY: 90, x: 220, fill: "primary" as const },
    { height: 30, y: 110, hoverHeight: 70, hoverY: 80, x: 240, fill: "secondary" as const },
    { height: 50, y: 110, hoverHeight: 50, hoverY: 100, x: 260, fill: "secondary" as const },
    { height: 20, y: 110, hoverHeight: 80, hoverY: 70, x: 280, fill: "secondary" as const },
    { height: 30, y: 80, hoverHeight: 90, hoverY: 60, x: 300, fill: "primary" as const },
  ];

  const bars = data || defaultData;

  return (
    <div className="absolute inset-0 z-[8] flex items-center justify-center text-neutral-800/10 dark:text-white/15">
      <svg width="356" height="180" xmlns="http://www.w3.org/2000/svg">
        {bars.map((bar, index) => {
          const fillColor = bar.fill === "primary" ? color : secondaryColor;
          const finalY = hovered ? bar.hoverY : bar.y;
          const finalHeight = hovered ? bar.hoverHeight : bar.height;

          return (
            <rect
              key={index}
              width="15"
              height={finalHeight}
              x={bar.x}
              y={finalY}
              rx="2"
              ry="2"
              fill={fillColor}
              className="transition-all duration-[200ms]"
              style={{
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: `${index * 20}ms`
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

// ============================================
// MAIN VISUAL3 COMPONENT - Layered Animation Template
// ============================================

interface Visual3Props {
  mainColor?: string;
  secondaryColor?: string;
  gridColor?: string;
}

export function Visual3({
  mainColor = "#8b5cf6",
  secondaryColor = "#fbbf24",
  gridColor = "#80808015",
}: Visual3Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-[180px] w-[356px] overflow-hidden rounded-t-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Grid */}
      <GridLayer color={gridColor} />

      {/* Main Content - Scales on hover */}
      <ScaleLayer hovered={hovered} scale={1.1}>
        {/* Bar Chart Animation */}
        <BarChartLayer
          hovered={hovered}
          color={mainColor}
          secondaryColor={secondaryColor}
        />
      </ScaleLayer>

      {/* Gradient Overlay */}
      <RadialGradientLayer color={mainColor} />

      {/* Linear Reveal */}
      <LinearRevealLayer color={mainColor} hovered={hovered} />

      {/* Tooltip */}
      <TooltipLayer color={mainColor} hovered={hovered}>
        <div className="flex items-center gap-2">
          <div
            className="h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: mainColor }}
          />
          <p className="text-xs text-black dark:text-white">Visualization Active</p>
        </div>
      </TooltipLayer>

      {/* Floating Badges */}
      <BadgeLayer
        color={mainColor}
        secondaryColor={secondaryColor}
        hovered={hovered}
        badges={[
          { color: mainColor, text: "+15.2%" },
          { color: secondaryColor, text: "+18.7%" }
        ]}
      />
    </div>
  );
}

