# **NapNest Landing Page \- Master Task Graph & Implementation Pack**

**Orchestration Methodology:** Vibecode Kit v6.0 (Strictly Dependency-Mapped Tasks)  
**Target Workflow Execution:** End-to-End Implementation, Tiered Verification, Cache/Dump Evacuation Protocol.  
**Deployment Scope:** PC/Desktop Only (1280px \- 1920px Canvas Layout).

## **1\. Task Graph Dependency Overview**

The execution map below details the strict sequential flow required by the Builder. No downstream task should be initialized until all upstream dependencies pass local unit and layout self-tests.

| Task ID | Module Title | Dependencies | Priority   |
| :---- | :---- | :---- | :---- |
| **TIP-001** | Scaffolding & Context Initializer | None | P0 \- Critical |
| **TIP-002** | Flexible Booking Grid & Hourly Calculator | TIP-001 | P0 \- Critical |
| **TIP-003** | In-Pod Simulator & SVG Soundwave Canvas | TIP-002 | P0 \- Critical |
| **TIP-004** | Competitor Matrix & Pitch Analytics Board | TIP-001 | P1 \- High |
| **TIP-005** | Tiered Quality Assurance Testing Verification | TIP-003, TIP-004 | P0 \- Critical |
| **TIP-006** | Cache Evacuation, Dump Cleanup & Optimization | TIP-005 | P0 \- Critical |

## **2\. Task Instruction Packs (TIPs)**

### **TIP-001: Scaffold & Context Initializer**

* **Context:** New repository, target directory src/.  
* **Task Specification:** Set up a React/Next.js infrastructure. Install Tailwind CSS and configure the master global style rules. Enforce strict PC layout wrapper bounding content safely between 1280px and 1920px width brackets. Instantiate the global state context manager (src/context/BookingContext.jsx) to handle reactive variables: current location station, selected pod ID, current operational timeline state machine, active dynamic transaction calculations.  
* **Acceptance Criteria (Gherkin format):**  
  Given an empty directory layout  
  When the boilerplate orchestration is executed  
  Then next.js dev runtime must execute cleanly with zero linter complaints  
  And global viewport boundaries must restrict layout bleed beyond 1920px

### **TIP-002: Flexible Booking Grid & Hourly Calculator**

* **Context:** Relies entirely on src/context/BookingContext.jsx state synchronization channels.  
* **Task Specification:** Implement src/components/BookingGrid.jsx. Build an structural station selector dropdown box. Implement the pod cluster mapping matrix (minimum 12 mock pods styled via CSS grid blocks). Color key code conditions properly: Green (\#10B981) for Available, Red (\#EF4444) for Occupied, and Purple (\#8B5CF6) for active UV-C sterilization routines. Integrate a dynamic timeline step calculator element allowing flexible hour inputs. Pricing calculation engine structure rules: Base fee covers initial 2 hours at 69,000 VND flat; every added hour updates pricing automatically at a \+15,000 VND progressive increment logic matrix. Disabled status must freeze clicks instantly on non-available segments.  
* **Acceptance Criteria (Gherkin format):**  
  Given a user has selected an Available pod component  
  When the configuration timeline is dynamically scaled to 4 hours total duration  
  Then the pricing calculator display block must reactively display exactly 99,000 VND  
  And selecting an Occupied pod element must immediately override and deny event registration

### **TIP-003: In-Pod Experience Simulator & SVG Canvas Soundwave**

* **Context:** Captures state signals upon successful mock payment routing triggers inside src/components/PodSimulator.jsx.  
* **Task Specification:** Craft an interactive UI wrapper simulating pod console automation parameters. Include clickable interactive nodes allowing live LED spectrum shifting operations (Warm Gold tone down to deep Cyber Cyan variations). Create modular ambient soundtrack selection toggles (Ocean sound, white noise waves, rain sounds). Integrate a hardware-free graphic SVG/CSS animated canvas sound wave widget mimicking dynamic vibration behaviors. Provide a clear session shutdown interaction button. Clicking "End Session" must loop state tags directly back into an autonomous UV-C execution timer logic mapping block. This blocks booking actions and fires a visual 60-second active downward step tracker loop before recycling the pod structure status back to clear Green codes.  
* **Acceptance Criteria (Gherkin format):**  
  Given the simulation module session is active with soundwave loops rendering  
  When the operator clicks the 'End Session and Leave Pod' trigger node  
  Then the pod state machine must cleanly cycle into Sterilizing status modal  
  And a 60-second reactive numerical reverse countdown display block must execute safely

### **TIP-004: Competitor Matrix & Pitch Analytics Board**

* **Context:** Core informative presentation layers for marketing conversion efficiency and judge analysis optimization scopes.  
* **Task Specification:** Code src/components/CompetitorMatrix.jsx and src/components/FinancialsBoard.jsx as independent sections embedded cleanly into the presentation layout sequence. Matrix must contrast structural parameters side-by-side using high-contrast bold rows tracking fireproofing parameters, noise filtration layers, and cleanliness rules. Financial component block requires strict execution of capacity optimization parameter checkboxes: Low load scale toggles static values at 16 pod daily usages, Medium tracks 32 nodes, Full tracks 48 units. Render explicit responsive financial charting models showing profit distributions and expected break-even schedules (19 to 34 months ranges) without database external calls.  
* **Acceptance Criteria (Gherkin format):**  
  Given a judge views the pitch analytics section block  
  When the capacity modifier node is switched between Low, Medium, and Full configurations  
  Then visual graph trends must dynamically update financial indicators on screen  
  And no cross-contamination layout disruptions should occur on standard PC widths

### **TIP-005: Comprehensive Tier-1 & Tier-2 Testing Verification**

* **Context:** Post-build structural health execution constraint layer.  
* **Task Specification:** Construct and fire exhaustive testing parameters validating layout integrity under automated test runners. Ensure 100% test path tracking coverage for flexible calculation edge cases (e.g., fractional hours entry validation, negative integer inputs defense, overflow validation thresholds). Ensure complete zero-error validation of parallel simulation triggers across components. No console outputs or linter warnings are permitted at final compilation stages.  
* **Acceptance Criteria (Gherkin format):**  
  Given the compilation suite starts testing procedures  
  When automated syntax parsers check variable bounds across modules  
  Then total count metrics must showcase 0 syntax errors, 0 logic anomalies, and 100% baseline requirement execution pass ratings

### **TIP-006: System Optimization, Cache Purge, and Environment Cleanup**

* **Context:** Pre-release sanitization protocol protecting system memory configurations from artifact bloat.  
* **Task Specification:** Execute an exact sweeping script routine clearing all development residues. Purge local runtime cache stores cleanly including node\_modules/.cache/\*, local metadata directory states .next/\* cache stores, stray testing logs, memory stack outputs, dead file dumps, and temporary build asset leftovers. Ensure compilation processes re-trigger dynamically from pristine absolute baselines to ensure build fidelity and lean environment archiving weights before handover procedures.  
* **Acceptance Criteria (Gherkin format):**  
  Given a completion command trigger is activated on the builder interface  
  When optimization purge routines clean file-system operational layers  
  Then directory sizes must instantly match lean parameters without stale cached chunks or memory footprint dumps remaining  
  And subsequent execution loops must cleanly build assets directly from pure code parameters