// ─────────────────────────────────────────────
//  data.js  –  Edit this file to update content
// ─────────────────────────────────────────────

const portfolioData = {

  // ── Personal ──────────────────────────────
  name:    "Muthu Qumar S",
  title:   "Staff Engineer · AI-Native",
  tagline: "I build distributed systems where AI is load-bearing, not decorative.",
  bio:     "10+ years building high-performance distributed systems across Data Privacy, FinTech, and AdTech. Staff Software Engineer at BigID. I specialise in event-driven backend architecture — and over the last year, in making AI a structural part of how those systems are designed and delivered.",
  email:   "muthuqumar.s@gmail.com",
  phone:   "+91 9003239605",
  linkedin: "https://www.linkedin.com/in/muthuqumars",


  // ── How I Work ────────────────────────────
  workflow: [
    {
      number: "01",
      title:  "Understand before building",
      body:   "Before writing anything, I work through the problem — what is it actually asking for, what are the constraints, what are we assuming. Good design starts with the right question, not the first solution."
    },
    {
      number: "02",
      title:  "Design in the open",
      body:   "Architecture decisions and tradeoffs go into a structured template, reviewed by peers before anything gets built. Design work happens explicitly and collaboratively — not implicitly while already deep in code."
    },
    {
      number: "03",
      title:  "Execute with leverage",
      body:   "Tasks are identified from the design and executed in parallel — using coding agents where they add real leverage. The goal is to stay at the level of systems and decisions, not get pulled into mechanical work."
    }
  ],


  // ── Tech Stack ────────────────────────────
  stack: [
    { label: "Languages",       items: ["Java 11/17", "TypeScript"] },
    { label: "Frameworks",      items: ["Spring Boot", "NestJS", "Express.js"] },
    { label: "Messaging",       items: ["Apache Kafka", "RabbitMQ"] },
    { label: "Databases",       items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
    { label: "Cloud & Infra",   items: ["AWS (EC2, S3, SQS)", "Docker", "Kubernetes", "CI/CD"] },
    { label: "AI Engineering",  items: ["Agentic Workflows", "LLMs", "RAG", "MCP Protocol", "Anthropic SDK", "OpenAI SDK", "transformer.js"] },
    { label: "Methodologies",   items: ["Event-Driven Architecture", "Microservices", "TDD", "SAFe Agile"] }
  ],


  // ── Projects ──────────────────────────────
  // badge options: "Personal" | "Work" | "Published"
  // set link to null for private / internal projects
  projects: [
    {
      name:        "project-q",
      badge:       "Personal",
      description: "A local AI development assistant that embeds into any codebase. Describe work in plain English — bug fix, feature, greenfield app — and a team of specialised agents handles the rest: business analyst, architect, developer, QA. Live Kanban board tracks progress; explicit approval gates before anything commits. The agent orchestration layer is deliberately model-agnostic: the same workflow runs identically on Claude, OpenAI, Gemini, or a local Qwen model via Ollama — zero API cost, no data leaving the machine. Model choice becomes an infrastructure decision, not a hard dependency.",
      tags:        ["Multi-agent", "TypeScript", "Node.js", "Ollama", "Qwen", "Model-agnostic"],
      link:        "https://github.com/muthuqumar/project-q"   // ← replace with GitHub URL when public
    },
    {
      name:        "Federated Reporting Engine",
      badge:       "Personal",
      description: "LLM-powered natural language reporting engine built around the ASSESS framework. Hard agency boundary: Claude exclusively parses intent into structured JSON — all database interaction is handled by a deterministic DSL layer downstream. Claude never constructs a query or sees a connection string. Supports PostgreSQL, MySQL, and MongoDB with live schema introspection and AES-256 encrypted credential storage.",
      tags:        ["ASSESS Framework", "Claude API", "Java", "TypeScript", "PostgreSQL", "MongoDB"],
      link:        null   // ← replace with GitHub URL when public
    },
    {
      name:        "PIA & RoPA MCP Agents · BigID",
      badge:       "Work",
      description: "Privacy Impact Assessment and Record of Processing Activity agents built using the OpenAPI spec directly as the MCP tool contract, consumable by BigID's broader AI agent ecosystem. The key insight: spec quality is the bottleneck. Drove the team to improve API spec descriptiveness — proper field-level descriptions, clear parameter semantics — so the MCP contract works reliably at runtime.",
      tags:        ["MCP", "OpenAPI", "Agentic AI", "Java"],
      link:        null  // internal — no public link
    },
    {
      name:        "ASSESS Framework",
      badge:       "Published",
      description: "Co-authored a 5-part technical article series on building production-grade agentic features. Defines strict agency boundaries for safe AI deployment — where exactly the AI ends and the deterministic system begins, and how to make that boundary impossible to cross by accident.",
      tags:        ["Agentic Design", "AI Safety", "Published Series"],
      link:        "https://medium.com/@shakeel.s/part-3-the-framework-assess-b38b21fd7d50"   // ← replace with article URL
    },
    {
      name:        "Agentic Data Flows · BigID",
      badge:       "Work",
      description: "BigID's first agentic AI release — a system that orchestrates Data Flows, Assessments, and Reporting through a chain of AI-driven steps. A dedicated job-service handles asynchronous background execution so resource-intensive agentic workflows don't block the main application. Includes a semi-agentic generation feature with built-in retry logic for reliability under partial failure.",
      tags:        ["Agentic AI", "Java", "Spring Boot", "Async Architecture"],
      link:        null
    },
    {
      name:        "Commercial Order Management · CloudSense",
      badge:       "Work",
      description: "The order processing core of CloudSense's Omni Commerce platform. Handles complex order decomposition — breaking high-level commercial orders into fulfillable line items — and maintains bidirectional synchronisation with Salesforce, keeping order state consistent across the commerce stack in real time.",
      tags:        ["Java", "Spring Boot", "Microservices", "Salesforce", "Order Management"],
      link:        null
    },
    {
      name:        "Ad Server Integration Middleware · CloudSense",
      badge:       "Work",
      description: "A Java middleware layer connecting CloudSense to Google Ad Manager and Freewheel, handling the high-volume bidirectional data flows that real-time ad decisioning depends on. Media clients use it to keep campaign data, ad inventory, and delivery results in sync across platforms — with sub-second latency requirements throughout.",
      tags:        ["Java", "Middleware", "Google Ad Manager", "Freewheel", "Real-time"],
      link:        null
    },
    {
      name:        "Hybrid Name-Matching Engine · Oracle",
      badge:       "Work",
      description: "A name-matching microservice inside Oracle's Financial Crime and Compliance Studio, deployed at tier-1 global investment banks for entity resolution in financial crime investigations. Combines the Jaro-Winkler string similarity algorithm with Oracle's proprietary legacy engine to handle the fuzzy, cross-border name variations that single-algorithm approaches miss.",
      tags:        ["Java", "Microservices", "Jaro-Winkler", "FinCrime", "Oracle"],
      link:        null
    }
  ],


  // ── Experience ────────────────────────────
  experience: [
    {
      role:        "Staff Software Engineer",
      company:     "BigID",
      link: "https://bigid.com",
      period:      "Jul 2024 – Present",
      description: "Pioneered BigID's first Agentic AI release — Agentic Data Flows, Assessments, and Reporting. Re-architected Autofill using transformer.js cosine similarity, reducing response latency by 75%. Designed event-driven architecture for Data Mapping and Privacy Apps synchronisation. Part of ai-dev-guild: formulated team-wide AI development workflows adopted across engineering."
    },
    {
      role:        "Senior Software Engineer",
      company:     "CloudSense",
      link: "https://cloudsense.com",
      period:      "May 2021 – Jul 2024",
      description: "Led Commercial Order Management microservice for the Omni Commerce Application. Migrated legacy Java Mule app to Spring Boot 3. Built Java middleware for high-traffic ad server integrations across Google Ad Manager and Freewheel."
    },
    {
      role:        "Software Developer 2",
      company:     "Oracle Financial Services",
      link: "https://www.oracle.com/in/financial-services",
      period:      "Aug 2019 – Apr 2021",
      description: "Production features for Oracle's Financial Crime and Compliance Studio, deployed across tier-1 global investment banks. Engineered hybrid name-matching microservice combining Jaro-Winkler with Oracle's legacy engine."
    },
    {
      role:        "Software Engineer",
      company:     "Nagra Kudelski",
      link: "https://www.nagra.com",
      period:      "Mar 2018 – Aug 2019",
      description: "Java microservices for Nagra's OpenTV Platform, powering backend systems for major European television providers serving millions of subscribers."
    },
    {
      role:        "Programmer Analyst",
      company:     "Cognizant",
      link: "https://www.cognizant.com/us/en",
      period:      "Sep 2015 – Nov 2017",
      description: "Core Java development and OpenText Document Sciences xPression development. Built Java-based automation utilities that reduced manual validation effort across document processing workflows."
    }
  ],


  // ── Cover Note ────────────────────────────
  coverNote: {
    recipient: "",
    company:   "",
    role:      "Staff Software Engineer",
    date:      "June 2026",
    paragraphs: [
      "A year ago, a typical session looked like this: pick up a ticket, read the existing code, start coding. AI was occasional and reactive,  something I queried for boilerplate when stuck. Today the structure is different. When a feature comes in, I start with Claude for a proper analysis — not to generate code, but to understand what the problem is actually asking for, surface the edge cases, and question the assumptions. From that I work through architecture and tradeoffs in a structured template, which gets reviewed by me and peers before anything gets built. Tasks come out of that process, and I run them in parallel with coding agents rather than sequencing everything myself. The biggest shift isn't speed. It's that design work happens upfront and in the open, not implicitly in my head while I'm already deep in implementation.",
      "The tools that are load-bearing for me: Claude for analysis and architecture sessions, coding agents for parallel task execution, and MCP connectors for Jira and Confluence so I'm not context-switching to a browser mid-session. If Claude disappeared from my workflow tomorrow, I'd lose the thing that changed how I approach ambiguous problems. The others I could replace. That model-agnosticism is a design principle I took seriously enough to build around - project-q, a local development assistant I built, runs the same structured workflow regardless of whether it's talking to Claude, Gemini, or a local Qwen model via Ollama. The way I work doesn't change when the LLM does.",
      "Here's a concrete example. At BigID I re-architected the Autofill system for assessments. The feature works like this: when you open an assessment, the system finds similar assessments using transformer.js cosine similarity, any question matching above 85% gets its answer mapped from the related assessment. The prior implementation was structured in a way that made those lookups expensive under load. Re-architecting how the similarity comparisons were organised, reducing redundant computation and improving how results were returned brought response latency down by 75%. The baseline had room to move; the improvement was structural.",
      "On leverage beyond my own output: I was part of BigID's ai-dev-guild, a small group that ran structured experiments with tools like Augment and Claude Code and then turned what worked into team-wide development workflows structured templates, agent session conventions, context hygiene practices. The translation from \"this helped me\" to \"here's how the team ships differently\" is the work I find most interesting. That same instinct is behind project-q, a local AI development assistant I built on my own time. It embeds into any codebase, opens a web UI, and routes work through a team of specialised agents — analyst, architect, developer, QA each with a focused persona. There's a live Kanban board and explicit approval gates before anything touches the filesystem. The goal was to make agentic development auditable rather than a black box. It runs on Claude, OpenAI, Gemini, or Ollama, so it works fully offline without API keys.",
      "On MCP: my work with it is straightforward but concrete. I built PIA and RoPA agents at BigID using the OpenAPI spec directly — the idea was that these agents could be consumed as MCP tool endpoints by BigID's broader AI agent ecosystem. The implementation itself is simple: spec in, tool contract out. What it taught me was how much the quality of the spec determines whether the agent actually works reliably. Vague field descriptions and loose parameter semantics produce tool calls that fail in non-obvious ways. I pushed the team to make the API spec more descriptive — proper field-level descriptions, clear parameter semantics — specifically because spec quality was the bottleneck for MCP to function well. The real design work was understanding what a tool contract needs to look like for an agent to use it correctly, and closing that gap upstream.",
      "What I'm looking for is a place where building AI-native systems is the actual work, not a side track to it. The way you describe the engineering loop instrumented, treated as something to improve week over week is how I already think about it. Happy to go deeper on any of this."
    ]
  }

};
