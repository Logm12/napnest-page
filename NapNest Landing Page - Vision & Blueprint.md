# **NapNest Landing Page \- Vision & Blueprint Document**

**Project Nature:** General-Purpose AI-Assisted Development (Vibecode Methodology)  
**Target Platform:** Strictly PC/Desktop Only (1920x1080 Layout)  
**Scope:** High-Conversion Landing Page, Interactive Real-time Booking Showcase, In-Pod Experience Simulator, Competitor Matrix, and Judge Analytics Board.

## **1\. Project Vision**

### **1.1 Architecture & Core Modules**

The system follows a modular, client-side architectural model optimized for high performance, state preservation, and real-time visual responsiveness without heavy server roundtrips.

* **Presentation Layer:** Component-driven layout using React/Next.js and Tailwind CSS. Focuses on structured visual blocks and smooth interactive state transitions.  
* **State Management Layer:** Client-side state tracking pod status (Available, Occupied, Sterilizing), user selections, flexible booking calculations, and simulation control parameters.  
* **Simulation Engine:** Interactive UI triggers rendering visual CSS animations, audio soundwave canvas visualizations, and automatic UV-C sterilization countdown timers.

### **1.2 Primary User Journeys**

The desktop layout splits journeys natively based on user context:

1. **End-User Path:** Lands on Hero section → Views features → Interacts with the real-time grid map → Configures flexible hourly booking → Proceeds through mock checkout → Experiences the In-Pod Simulator.  
2. **Judge/Investor Path:** Lands on page → Navigates directly via top navigation or scrolls to the Dedicated Pitch Analytics Section → Interacts with dynamic financial model graphs demonstrating break-even points.

### **1.3 Design Tokens & Direction**

| Token Category | Specification / Value | UX Intent   |
| :---- | :---- | :---- |
| Primary Palette | Deep Blue (\#0F172A), Slate Blue (\#1E293B), Accent Amber (\#F59E0B) | Instills trust, premium tech atmosphere, restfulness. |
| Pod Status Accent | Green (\#10B981), Red (\#EF4444), UV-Purple (\#8B5CF6) | Immediate scanning of pod operational availability. |
| Typography | Sans-Serif (Inter/Arial), Base text ≥ 14px, Main Header 36px-48px | Ensures absolute crispness and visual clarity on screens. |

### **1.4 Recommended Tech Stack**

Next.js / React (Framework), Tailwind CSS (Styling), Lucide-React (Icons), and Chart.js or Recharts (Financial Modeling Charts). This allows the Builder to execute highly optimized component assembly with zero hydration overhead and zero complex database dependencies.

## **2\. Project Blueprint (Specification Contract)**

### **2.1 RRI Requirements Matrix**

| REQ-ID | Feature Title | Detailed Specifications & Behavior | Priority   |
| :---- | :---- | :---- | :---- |
| REQ-001 | Hero Section | Headline: "Don't Quit. Just Nap." Direct value proposition, CTA triggers seamless auto-scroll down to the Booking Grid module. Display premium 3D pod imagery. | P0 |
| REQ-002 | Flexible Hourly Booking Grid | Station selector dropdown. Interactive grid map displaying real-time pod configurations. Interactive duration slider or custom hour input. Calculation logic: Base 2 hours \= 69,000 VND; each subsequent hour \= \+15,000 VND. Dynamic price updates on selection. | P0 |
| REQ-003 | Competitor Comparison Matrix | Side-by-side block detailing NapNest vs traditional Nap Cafes. Highlights: Red-core MDF fireproof wood, automated UV-C sterilization, sound dampening parameters. | P1 |
| REQ-004 | In-Pod Experience Simulator | Activates after mock checkout. Simulates internal controls: adjustable LED light colors (Warm Amber / Deep Cyan), Ambient audio toggles (Rain, Ocean waves) which trigger animated CSS/SVG Sound Wave Canvas Visuals instead of actual noise, and remote pod unlock trigger. | P0 |
| REQ-005 | Automated UV-C Sterilization | Triggered upon simulator termination or "End Session". Automatically transitions the specific Pod state to "Purple (Sterilizing)" with an active 60-second visual countdown timer. Blocks any booking attempts during this state. | P1 |
| REQ-006 | Dedicated Pitch Analytics Section | Independent full-width layout block. Multi-stage capacity toggle (Low: 16 pods/day, Medium: 32 pods/day, Full: 48 pods/day). Displays break-even point curves (19-34 months) and expected net profits natively via chart integrations. | P0 |

### **2.2 Layout & Implementation Safeguards**

* **Race Condition Prevention:** Any Pod marked Red (Occupied) or Purple (Sterilizing) must immediately have its pointer events disabled and checkout functionality blocked to maintain rigid state correctness.  
* **Responsive Guardrails:** Constrained strictly to desktop screen widths (1280px to 1920px max). Content wrapper must use max-w-7xl mx-auto px-4 padding guidelines. No standard responsive breakpoint collapses needed.

### **2.3 Project File Layout Map**

src/  
├── components/  
│   ├── Hero.jsx            \# Conversion banner & value props  
│   ├── BookingGrid.jsx     \# Interactive map & flexible rate calculator  
│   ├── PodSimulator.jsx    \# LED, Soundwave canvas, and UV-C countdown  
│   ├── CompetitorMatrix.jsx\# Comparative advantages grid  
│   └── FinancialsBoard.jsx \# Capacity selector & break-even data charts  
├── context/  
│   └── BookingContext.jsx  \# Handles real-time system state synchronization  
└── pages/  
    └── index.js            \# Main high-fidelity PC-only layout orchestrator  
