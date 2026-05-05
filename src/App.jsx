import { useState } from "react";

const features = [
  {
    id: 1,
    tag: "DASHBOARD",
    title: "Creator Health Metrics",
    subtitle: "Engagement, retention, and conversion on the main dashboard.",
    problem:
      "Whop's default analytics dashboard shows Gross Revenue, Net Revenue, New Users, MRR, ARR, and Payments Breakdown. These are accounting metrics. Churn rate and churned revenue exist as optional add-on widgets, and there's a third-party 'Subscription Analytics' app in the app store that tracks trial conversion and retention, but it has zero reviews and most creators won't discover it. Engagement percentage, visitor traffic, and conversion rate are not tracked anywhere on the platform. A creator can see how much money they made but can't see how healthy their community actually is.",
    competitor: "Skool + Circle",
    competitorDetail:
      "Skool's dashboard shows Members, MRR, Engagement %, and Retention % in the top row by default. Below that, a Growth section tracks Visitors, Signups, Conversion Rate, and New MRR. Circle goes even further with separate tabs for Audience, Engagement, Marketing, Website, and Payments, each with dedicated metrics. Circle also benchmarks your community's engagement against similar-sized communities on the platform.",
    proposal:
      "Surface Engagement %, Retention %, and a Visitor to Signup to Paying Member conversion funnel on Whop's default analytics view. Some of this data is technically available through opt-in widgets and a third-party app, but the metrics that matter most for creator health should be front and center, not buried behind installs and add-ons. Circle organizes their dashboard into Audience, Engagement, Marketing, Website, and Payments tabs. Whop could adopt a similar structure to give creators multiple lenses on their business, not just revenue.",
    impact:
      "Creators spot problems earlier. AMs can prioritize accounts by health, not just revenue. Shifts the dashboard from backward-looking (what you earned) to forward-looking (what's about to change).",
    sources: "Skool dashboard (firsthand), Circle Activity Scores, Whop dashboard (firsthand as seller)",
    images: [
      { src: "/img/whop_dashboard.png", label: "Whop: Revenue metrics only" },
      { src: "/img/skool_dashboard.png", label: "Skool: Engagement %, Retention %, Conversion" },
      { src: "/img/circle_dashboard.png", label: "Circle: Audience, MAUs, Active Members" },
    ],
    metrics: [
      { label: "Retention %", whop: "Churn widget (opt-in)", comp: "Skool: Default view" },
      { label: "Conversion rate", whop: "Not tracked", comp: "Skool: Default view" },
      { label: "Community benchmark", whop: "Not available", comp: "Circle: Activity Scores" },
    ],
  },
  {
    id: 2,
    tag: "ANALYTICS",
    title: "Member-Level Activity Tracking",
    subtitle: "See which individual members are drifting before they leave.",
    problem:
      "Whop's Users table shows member status, email, product, total spend, and cancel reason. Clicking on an individual user reveals a profile with Payments, Memberships, Invoices, and a 'Journey' section. But the Journey section only shows 'No recent activity' with no historical data. There's no visibility into when a member last logged in, how often they participate, or whether their activity is trending up or down. The infrastructure for member-level tracking exists (the Journey section is already there), but it's not populated with actionable data.",
    competitor: "Skool + Circle",
    competitorDetail:
      "Skool shows a daily visual activity chart on every member's profile, covering the past year. Circle tracks who's active and who's gone quiet, letting admins filter their member list by engagement level.",
    proposal:
      "Populate the existing Journey section on each user profile with real engagement data: last login date, posts and comments in the last 30 days, activity trend (up, down, flat), and a color-coded health indicator. Let creators sort and filter their member list by engagement level. The user profile infrastructure already exists. Filling it with activity data would give AMs a concrete list of 'these 15 members need a check-in this week' instead of guessing.",
    impact:
      "Enables proactive retention at the individual level. Makes the AM role data-driven instead of reactive. Pairs naturally with re-engagement workflows for automated follow-up.",
    sources: "Skool member profiles, Circle engagement filtering, Whop Users table (firsthand as seller)",
    images: [
      { src: "/img/whop_user_profile.png", label: "Whop: User profile with empty Journey section" },
    ],
    metrics: [
      { label: "Last login visible", whop: "Not surfaced", comp: "Skool: Profile view" },
      { label: "Activity history chart", whop: "Not available", comp: "Skool: Daily (1 year)" },
      { label: "Engagement filtering", whop: "Not available", comp: "Circle: Native" },
      { label: "Health indicator", whop: "Not available", comp: "Circle: Activity Scores" },
    ],
  },
  {
    id: 3,
    tag: "RETENTION",
    title: "Cancellation Flow Intervention",
    subtitle: "Intercept churn at the moment it happens.",
    problem:
      "When a member cancels on Whop, they click cancel and they're gone. Whop collects cancel reasons in the Users table, which is valuable. There's also a third-party app called 'Rejoin' that recovers churned members automatically with branded win-back emails after they've already left. But neither the native platform nor Rejoin intervenes at the actual moment of cancellation. The highest-intent moment to save a member is when they click 'cancel,' and right now nothing happens there.",
    competitor: "Skool + Kajabi",
    competitorDetail:
      "Skool offers a 'Cancellation video' Pro plugin that shows members a personalized video from the creator on the cancel page before the cancellation completes. Kajabi lets creators offer a membership pause or a discount at the point of cancellation. Both intercept churn before it happens, not after.",
    proposal:
      "Build a customizable cancellation flow that intervenes before the member leaves, not after. When a member clicks cancel, show a creator-recorded video, offer a pause option (30, 60, or 90 days), or present a discount on next month. Whop already has the backend capability to pause payment collection (available via Zapier actions), and Rejoin proves there's demand for churn recovery. Combining pre-cancel intervention with post-cancel win-back would create a complete retention layer that neither tool provides alone.",
    impact:
      "Recovers passive churn at the highest-intent moment. Gives AMs a concrete retention tool to configure per account. Turns existing cancel reason data from reactive reporting into proactive intervention.",
    sources: "Skool Plugins page (firsthand), Kajabi cancel flow, Whop Users table (firsthand), Whop Zapier actions, Rejoin app (Whop app store)",
    images: [
      { src: "/img/skool_plugins.png", label: "Skool: Cancellation video plugin and level gating" },
    ],
    metrics: [
      { label: "Cancel-page video", whop: "Not available", comp: "Skool: Pro plugin" },
      { label: "Pause option at cancel", whop: "Via Zapier only", comp: "Kajabi: Native" },
      { label: "Discount offer at cancel", whop: "Not available", comp: "Kajabi: Native" },
      { label: "Post-churn win-back", whop: "Rejoin app (3rd party)", comp: "Not native" },
      { label: "Cancel reason collection", whop: "Available (Users table)", comp: "Available" },
    ],
  },
  {
    id: 4,
    tag: "AUTOMATION",
    title: "Native Re-engagement Workflows",
    subtitle: "Automated nudges before members drift away.",
    problem:
      "Whop supports automated messages when members join or leave, but nothing in between. There is a third-party 'Automations' app in the Whop app store (4.86 stars, 14 reviews) that adds triggers, conditional logic, wait nodes, and if/else branching. One reviewer called it 'a real assistant handling tasks in the background.' But it's a third-party app that most creators will never discover, and it doesn't come with pre-built retention-focused templates. The gap between 'joined' and 'left' is where passive churn lives, and solving it shouldn't require finding an obscure app.",
    competitor: "Circle",
    competitorDetail:
      "Circle bakes workflows directly into the core platform with 55 pre-built templates organized by category: Email Hub, AI, Moderation, Onboarding, Engagement, Paywalls, and Administrative. Creators don't build from scratch. They pick a template like 'follow-up on email open,' 'agent answers unanswered posts,' or 'welcome new members with context' and customize it. Circle also sends automated weekly digest emails to members showing what they missed, driving re-engagement without any creator effort.",
    proposal:
      "The Automations app in Whop's app store proves there's demand for workflow tooling. The next step is making it native to the core platform with pre-built, retention-focused templates that creators can activate in one click. Think 'member inactive for 14 days' or 'payment failing, send reminder' as starter templates. Also add automated weekly digest emails so members see what they missed. Circle offers 55 templates across 7 categories. Whop doesn't need 55 on day one, but even 10 high-impact templates built into the dashboard would close the gap.",
    impact:
      "Catches passive churn before it becomes a cancellation. Reduces AM workload on manual check-ins. Scales retention across the entire creator base.",
    sources: "Circle workflow builder (firsthand), Circle weekly digests, Whop Automations app (app store, 14 reviews), Whop Zapier integration (confirmed)",
    images: [
      { src: "/img/circle_workflows.png", label: "Circle: 55 pre-built workflow templates" },
      { src: "/img/circle_ai_workflows.png", label: "Circle: AI-powered workflow templates" },
    ],
    metrics: [
      { label: "Join/leave messages", whop: "Available", comp: "Circle: Available" },
      { label: "Inactivity triggers", whop: "3rd party app only", comp: "Circle: Native templates" },
      { label: "Pre-built templates", whop: "Not available", comp: "Circle: 55 templates" },
      { label: "Weekly digest emails", whop: "Not available", comp: "Circle: Automated" },
    ],
  },
  {
    id: 5,
    tag: "GROWTH",
    title: "Traffic Source Attribution",
    subtitle: "Where are your visitors actually coming from?",
    problem:
      "Whop actually has native pixel integrations built into its Settings page for Google Analytics, Meta, TikTok, X, Reddit, Pinterest, Hyros, and Hubspot. The infrastructure to track traffic exists. But the data flows out to those external platforms and never comes back into Whop's dashboard. A creator can install the Meta pixel to send data to Facebook, but they can't see inside Whop where their visitors are coming from, which channels convert best, or what their bounce rate is. They have to leave the platform to answer basic growth questions.",
    competitor: "Skool + Circle",
    competitorDetail:
      "Skool's dashboard includes a 'Where your about page visitors come from' section that breaks down traffic by source: organic search, social media, direct, referral. Skool also offers Meta Pixel and Google Ads tracking as Pro plugins. Circle goes further with a dedicated Website tab showing Unique Visitors, Page Views, and Bounce Rate natively. Both platforms keep growth data inside the product where creators can see it.",
    proposal:
      "Pull the traffic data that Whop is already sending out via pixels back into its own dashboard. Show where storefront visitors are coming from (organic, social, direct, referral, paid) and basic website metrics (unique visitors, page views, bounce rate). The pixel integrations are already built. The missing piece is a native analytics view that surfaces this data inside Whop so creators don't have to context-switch to Google Analytics or Meta Business Suite to understand their growth.",
    impact:
      "Creators see what's working without leaving Whop. AMs can advise on growth strategy with real data. Closes the loop on tracking infrastructure that already exists but isn't surfaced.",
    sources: "Skool dashboard (firsthand), Circle Website tab (firsthand), Whop Settings pixel integrations (firsthand as seller)",
    images: [
      { src: "/img/whop_pixels.png", label: "Whop: Pixels exist in settings but data stays external" },
    ],
    metrics: [
      { label: "Traffic source breakdown", whop: "Not in dashboard", comp: "Skool: Default view" },
      { label: "Unique visitors / page views", whop: "Not in dashboard", comp: "Circle: Website tab" },
      { label: "Bounce rate", whop: "Not in dashboard", comp: "Circle: Website tab" },
      { label: "Pixel integrations", whop: "Available (Settings)", comp: "Skool: Pro plugins" },
    ],
  },
  {
    id: 6,
    tag: "AI",
    title: "Creator-Trained AI Agent",
    subtitle: "24/7 member support using the creator's own content.",
    problem:
      "Creators can't be online 24/7, but members have questions at all hours. Whop's app store has two AI tools: 'Dashboard Agent' (helps creators manage their business) and 'Digital Products AI' (generates offers and products). Both are creator-facing. Neither lets members interact with an AI trained on the community's own content. When a member asks a question at 2am, there's no agent pulling answers from the creator's courses and posts.",
    competitor: "Circle",
    competitorDetail:
      "Circle launched AI Agents trained on the creator's own posts, comments, courses, and uploaded resources. Members ask questions via DM and get personalized answers sourced from the creator's actual content, not generic internet knowledge. Creators customize the agent with a welcome message, bio, and suggested questions, and manage everything from a shared AI inbox. Circle also has AI-powered workflow templates: agents that answer unanswered posts after 24 hours, welcome new members with context, recap completed lessons, and offer help after failed quizzes.",
    proposal:
      "Whop's existing AI tools help creators build and manage. The missing piece is a member-facing AI agent trained on the creator's own content. Let creators train an agent on their courses, posts, guides, and community discussions. When a member asks 'what's the best approach for Amazon wholesale right now,' the agent responds with answers from the creator's own material. For a community like Malice with years of reselling strategies, this would make the membership dramatically more valuable without increasing the creator's workload.",
    impact:
      "Increases perceived community value. Reduces creator burnout and response time. Keeps members engaged around the clock. Differentiates Whop's AI offering from generic chatbots.",
    sources: "Circle AI Agents (firsthand), Circle AI workflow templates (firsthand), Whop Dashboard Agent (app store), Whop Digital Products AI (app store)",
    images: [
      { src: "/img/circle_ai_agent.png", label: "Circle: AI agent setup with custom welcome and preview" },
      { src: "/img/whop_ai_apps.png", label: "Whop: AI apps are creator-facing, not member-facing" },
    ],
    metrics: [
      { label: "Creator-facing AI", whop: "Dashboard Agent + Digital Products AI", comp: "Circle: Available" },
      { label: "Member-facing AI agent", whop: "Not available", comp: "Circle: Native" },
      { label: "Trained on creator content", whop: "Not available", comp: "Circle: Native" },
      { label: "AI workflow templates", whop: "Not available", comp: "Circle: 8+ templates" },
    ],
  },
];

function Tag({ children, color }) {
  return (
    <span
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 9,
        fontWeight: 700,
        color,
        letterSpacing: 1.5,
        padding: "3px 8px",
        background: color + "18",
        borderRadius: 4,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

function FeatureNav({ features, activeId, onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "16px 16px", overflowY: "auto", maxHeight: "calc(100vh - 200px)" }}>
      {features.map((f) => {
        const active = f.id === activeId;
        return (
          <div key={f.id} onClick={() => onSelect(f.id)} style={{ padding: "14px 16px", background: active ? "rgba(255,90,31,0.07)" : "transparent", border: `1px solid ${active ? "rgba(255,90,31,0.25)" : "rgba(255,255,255,0.04)"}`, borderRadius: 10, cursor: "pointer", transition: "all 0.25s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <Tag color={active ? "#ff5a1f" : "#555"}>{f.tag}</Tag>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#444" }}>0{f.id}</span>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: active ? "#fff" : "#aaa", letterSpacing: -0.2, marginBottom: 3 }}>{f.title}</div>
            <div style={{ fontSize: 12, color: "#666", lineHeight: 1.35 }}>{f.subtitle}</div>
          </div>
        );
      })}
    </div>
  );
}

function CompTable({ metrics, competitor }) {
  return (
    <div style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, overflow: "hidden" }}>
      <div className="comp-grid" style={{ padding: "10px 16px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 600, letterSpacing: 1, color: "#555", textTransform: "uppercase" }}>
        <span>Feature</span><span>Whop</span><span>Elsewhere</span>
      </div>
      {metrics.map((m, i) => (
        <div key={i} className="comp-grid" style={{ padding: "10px 16px", borderBottom: i < metrics.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", fontSize: 12 }}>
          <span style={{ color: "#bbb", fontWeight: 500 }}>{m.label}</span>
          <span style={{ color: m.whop.includes("Not") || m.whop.includes("only") ? "#888" : m.whop.includes("opt-in") || m.whop.includes("3rd") ? "#aaa" : "#4ade80", fontSize: 11, fontWeight: 500 }}>{m.whop}</span>
          <span style={{ color: "#aaa", fontSize: 11, fontWeight: 500 }}>{m.comp}</span>
        </div>
      ))}
    </div>
  );
}

function DetailSection({ label, color, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700, color, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 7, display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ width: 5, height: 5, background: color, borderRadius: "50%", display: "inline-block" }} />{label}
      </div>
      <p style={{ fontSize: 13.5, color: "#c8c8c8", margin: 0, lineHeight: 1.6 }}>{children}</p>
    </div>
  );
}

function FeatureDetail({ feature }) {
  return (
    <div key={feature.id} style={{ animation: "fadeUp 0.35s ease" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <Tag color="#ff5a1f">{feature.tag}</Tag>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#555" }}>validated against {feature.competitor}</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#333", marginLeft: "auto" }}>0{feature.id} / 06</span>
      </div>
      <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: -0.8, margin: 0, marginBottom: 6, lineHeight: 1.15 }}>{feature.title}</h2>
      <p style={{ fontSize: 14, color: "#888", margin: 0, marginBottom: 28, lineHeight: 1.5 }}>{feature.subtitle}</p>
      <div style={{ maxWidth: 700 }}>
        <DetailSection label="The Problem" color="#f87171">{feature.problem}</DetailSection>
        <DetailSection label="What I Found Elsewhere" color="#4ade80">{feature.competitorDetail}</DetailSection>
      </div>
      
      {feature.images && feature.images.length > 0 && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700, color: "#666", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 5, height: 5, background: "#666", borderRadius: "50%", display: "inline-block" }} />
            Evidence
          </div>
          <div style={{ display: "grid", gridTemplateColumns: feature.images.length === 1 ? "1fr" : feature.images.length === 2 ? "1fr 1fr" : "1fr 1fr 1fr", gap: 10, maxWidth: feature.images.length === 1 ? 500 : "100%", alignItems: "start" }}>
            {feature.images.map((img, i) => (
              <div key={i} style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, overflow: "hidden" }}>
                <img src={img.src} alt={img.label} style={{ width: "100%", display: "block" }} />
                <div style={{ padding: "8px 10px", fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#888", letterSpacing: 0.3, lineHeight: 1.4 }}>{img.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div style={{ maxWidth: 700 }}>
        <DetailSection label="What I'd Build" color="#ff5a1f">{feature.proposal}</DetailSection>
        <DetailSection label="Why It Matters" color="#fbbf24">{feature.impact}</DetailSection>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700, color: "#666", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 10 }}>Comparison</div>
        <CompTable metrics={feature.metrics} competitor={feature.competitor} />
      </div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#444", letterSpacing: 0.3, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.05)" }}>Sources: {feature.sources}</div>
    </div>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState(1);
  const activeFeature = features.find((f) => f.id === activeId);

  return (
    <div style={{ minHeight: "100vh", background: "#09090b", color: "#e8e8e8", fontFamily: "'Outfit', -apple-system, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #09090b; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,90,31,0.25); border-radius: 4px; }
        .main-grid { display: grid; grid-template-columns: 360px 1fr; min-height: 70vh; position: relative; z-index: 1; }
        .nav-col { border-right: 1px solid rgba(255,255,255,0.06); }
        .detail-col { padding: 28px 36px; overflow-y: auto; max-height: calc(100vh - 200px); }
        .hero-title { font-size: 42px; }
        .header-bar { padding: 18px 32px; }
        .hero-section { padding: 52px 32px 36px; }
        .footer-bar { padding: 20px 32px; flex-direction: row; }
        .stats-row { display: flex; gap: 24px; }
        .comp-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; }
        .hero-logos { display: flex; }
        .hero-logos-mobile { display: none; }
        @media (max-width: 768px) {
          .main-grid { grid-template-columns: 1fr; min-height: auto; }
          .nav-col { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .detail-col { padding: 20px 16px; max-height: none; }
          .hero-title { font-size: 28px; }
          .header-bar { padding: 14px 16px; }
          .hero-section { padding: 32px 16px 24px; }
          .footer-bar { padding: 16px; flex-direction: column; gap: 8px; align-items: flex-start; }
          .stats-row { gap: 16px; }
          .comp-grid { grid-template-columns: 1fr; gap: 8px; }
          .hero-logos { display: none; }
          .hero-logos-mobile { display: flex; }
        }
      `}</style>

      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none", zIndex: 0 }} />

      {/* Header */}
      <div className="header-bar" style={{ position: "relative", zIndex: 1, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAIAAACz2DQFAAABCGlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGA8wQAELAYMDLl5JUVB7k4KEZFRCuwPGBiBEAwSk4sLGHADoKpv1yBqL+viUYcLcKakFicD6Q9ArFIEtBxopAiQLZIOYWuA2EkQtg2IXV5SUAJkB4DYRSFBzkB2CpCtkY7ETkJiJxcUgdT3ANk2uTmlyQh3M/Ck5oUGA2kOIJZhKGYIYnBncAL5H6IkfxEDg8VXBgbmCQixpJkMDNtbGRgkbiHEVBYwMPC3MDBsO48QQ4RJQWJRIliIBYiZ0tIYGD4tZ2DgjWRgEL7AwMAVDQsIHG5TALvNnSEfCNMZchhSgSKeDHkMyQx6QJYRgwGDIYMZAKbWPz9HbOBQAAAjQUlEQVR42u19ebCtV1Xn77fW3t93zh3ePA9JIGo7ERLeC4KI2m23Q1m2rRbYDoUtxSSDIrba4gQiCEZMcAAU0ELsKtumyioL26FAhYB5EEiCEEISCCF5efOdp3O+vdda/ce5LyTkPb15LyQRz++P9+4993zn22f/9prX3h8wxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjPEIg+d7NR78dwYI+P2vxEMuDQAkGIj7r37QR2H0hnjQFQ93pLH+0+hz4gF/HN0oHjBoAkDEAwb6RVc9nJvz7JjjASP54u8VX7gvCQQizvEeAjH6wGCcby7SOYdBQBBGQDAihAEhR+MKIRApIoJBQnx96E5CRm8B3T3gIAXBgI1mj6DAAfiGJ0jOkh4AGAwgRBEBuJz9GsEEVHgwACE0wkmPCA84FBCgEkHQR/O7scUQo2kOFaSAGQuojAg4BBDQkUMAd0QQKhIBCWGYA5UMIBwEBAxIAIArRCEF5slh55gLnns4BP0Lw9IgGDaigGIQhfRBixjAAnbODxEKIeGjoXQhgGD9vUoAqBukRgUymlBICQZjNFOSAAsUBKAAAMMDv6VCqOJuCAlEwJEABQyoG7oxktNCAyCcCCch3lcgUFwCCvOAj4TTHrKiFAnioe6OMBEwED4SEQlRQIEO7tggMQIaEhAQBxWB0bzARaL6usaYQuxvdN9U3jfR26zSIxOxFsNjK90dC7i78yXYaHmraZGABC1ysFBDgVo3JjICCtwlQhDO5BSgg4PAnsSDjR6YaHf0ev1mSLKGznfx2YXh51bqCTcwGqABByEOdVbQ4RvUYQ1YQSfAoAYVXgUE3cUQgE8B+3N+YhPbp5rpXq9VgXBQysxa95lFu20wHAAC6REdvQLiIGACKGjseepg9pABnZcYsdE/GnRIgEFhdARsM/mUbf1v2dUc2tZcOtXuzGkr0I6UucARA8OJIT+xVP725OpfHV++Z1iApKSAhgha46HA6sb0SQuAGAooCovwUMhX9/XqnRNP3bnpqul0WfZtuTYS66qb3kk67s3n1vCJ++bed3zlH+cHC1AIVAwOhtTwjcqqe47RQm1JglakoMY0cMXW3jftnHj61v5XTaWd/TrN0ST4aAxL4MkufWa2/v2p7j3HV24bdICKCIIadFRLBgC2rpU3ZPxBSBBQl4C4IDwAwxMb/Z4DW//r/i2Hp5tNvoYwuME7RHFakeiU4Vta9xYryDJspm4f6N/eNfuOe5bvGBqbFCFRTcOEKBvTZJlIYGVb3BqU/7S1/aFLpr9t+6Z9vYZeUAdA6cQ60n2i8Zp9QFQRoGki9+a9ff/p4Vvvmnvv6RWjJkrAzDdIDMSQAGPylEIqhnV/zt+1b/uzDk48ZfNgu3QMrYUDJrWazRkGwigQJrokQPNnhs2fHx288+75O1aHkKQxEVEEawRsXRXFxogBCAZIhkqE4QD47Mt2/ODlW6+cXNWy6IVum8niOgTDGYAiFBCNkZYP9wCZU8PUu3mQf//2k39278IKmZEKKjQ2pudBlRBHwbds7r/kibu+Y0/apAvo0DmKuCWla/KkQY0KeiAsDAJHCagg93JdwdS778MbPn3itkEngvCH4XoAiCRhvgv4gYNbnn/ptq/d2mvLHLrFCnH0wRYMwEFDjNa0iPWMutLOpVidsoxm++2dv+3Omf9999IJJGpONkiIIcQf7Mf+i8QIwJG8oA3/xm29n7xiz3dOO71GNwyaizioIRzZYpChyVRCnMXVK+kjTypCzHvkcm/bu+8dXvOJez5lzqRS3RggxBnQgJ/1N0aDTKBLOFQc2A1/xVfs/LEnbtqdhmUwoDMoIwWLCCJGXkoQAQkoghFQOggjtVqKwun+zV17zc2n/uLEykBIRvi6dw8CkQGDOByEAAyYgkA2CXh55qb0C1998L/snExx3IZm6FdNoCmG2QxQZ7hEgBJUl6puYk3X0LMpLUpPY3li+i9Pdq/72NFbS0iiWzAUIx/vi2X1POZWJXnElvCXX77r1w/tuLK3irUuzIVKJAkRCIMCSFACRATNpY58c4nQCA1oQITGksrKoe2TV+zZ9umZpXsHVbQn4SGRQ4BMAOJQjDwuMFEiJ9SKp0+21zztsufsb6bX5lcdVVMTlaMAJbhuEtddSXL91RA6EE6YhAAi6Lq6NafvvHTLdIkbZte6BhmkS4AkgJYgaRAQSSGAJUqVlN2ed9mWaw/vOjzZdYOVGiATCYVJuIQEZTQTDGWMpoQMSmiAUAddGAaYLV+1OX/brr2fnF+9e620Kg2ThT/UfddzSQszJoql3VKvecrOn/iKtHnVuJqQfPQNHhjTbQROlJRybTEoB6fiGQe233V69c41azgR7g5zrTk8Bw3SeAI0ZAgJr/iRXVPXPvWyqydqrJ7wFCW1ThEauKH7E0wBDRCgSHjQ/Jl7d+xmc/3JpS505H5mOFkE3oRUAmIeRlEDt7K86sqtr7l897bVboGVyXPwIQqHOG/Y8UW/t7Ksuxr7tku33D03vG3ZPdOiPlSx6rnCS60RT2i6Nz/t0mfvkhjMBQAKeAEh8/qAUgWZa6oynN/NOHzpwVtPL3x2MBANifCEIBD06DtSYDBauz9x6ebXHT5waZ2P4Rlrw7XJlnuVyS02TowhGC5wuCCSRVpbPLR3U+r3339ioYKhNQQBBCEhTQjCQxmM3cR1Vx940T7E6imTtrWkqOuZhwubCoYgeXTTee4/79t52+zg08sDPigfch5iCATja9v4k8N7v23L2rwN+2UrpK70B01NFzYaCSSPYe5q8sYbq7K9KYd3TRw5uXzMXCFwdfEIkHDxUBPDKy7Z8aord2wdzJrXklPRJpemKUmieiobJAZgECZRBU4QSIiaYLZ05d7JivzxMytV6AK4QOHwFBratyiXg3946JLv2dsbDFZCs0IFDnhcKCujHIxpqdlXadt9+E17t948s3r3wIh/kZiR6d3e6B/8x6/+1gbDbl5S09QscHUScqGjQU1R1PtFtfS7plnz+Ut67aX9/X9x/HQnbeNqYQwkOtSl4iWXbXn1k3duXl4MGETpTbJWXSnWZVtpQ4IaG5ogFwR5Nt/FAAkU4cRqecr+PR+cW/3cEiZCAERI0F1o9EsZf3joid++ratryyGbs6WqXZdMQi8mNSnRQoaC1V6d7Ey3p8l9u3e8556ZQZDn8gYflElbqfahz88up03Im8IdMojzZtU2vEyEbemJNyV34HJfJ2ds6t33nhwGUwjQQUZZLNEaP3XJ1l/7+l1tOTNMlWgYSFGTm2lZbYop+l0vWdqoYmWoR1OlrZpcAiyUXJLmrf9wbP6zC0NIGCTCJYykh32l25sPP+Fbd3crWEwqE90gOHSpjUVy8iKICRmKN2KbHRZJT3Py/955atkDD0p3nsfGVPDImWWz8sy904hC64fEoBm0NnKOUdWDoQ9yBR5i9EYWiaOMbqTwpvZNtNPVRsucbv/pG4+/89R8JFHLVZx0QhH+wkumfvWKfZvXFpxeE5IlIkwMhIkHIxvbTiG+EYHhKEuGJqFSOvFENAPtJvPk/zvpL77p3qMl0JgxHBARdx4U/u5TL/nurbV0C5DWA54qxLJRXUa6cWPCIQSrekikgDjBIKtHfyVpSmsV0y+79fg7753HOUzMuY2/hOpNsytD+jfv2tZ0y1UiuTgpngC6OOgaZMhDR8mQ0RBGie2RBlFw5OG2YrNpy/+85dSfnliSRK1S6SEhDHV/4aVTv3Ro1/RwkKyCERRZD4sJQILqJODqsdF1KxIpCNdCYJiShU3l/l/M+os/dt+xaEQgoyycJCOeiHjz1V/x7XusK7Ot92lCgiBDAuvLZ8OCyiC6bEA0NUlol8LRqncTsjTbbv+5W+b+/OiiZ/GIjXlliF54ZXP9mTW6Pf1SbzoT21w1jKqujVMDXXJfz9w8pGhAECEIggwKCOsVdU1lLk29/KYz/+fY8gTproIALbJHwQsvmf7Vq/ZtXhs2XRFaTTChjNL9F6g+wqFOabAi3nefHOhAppq/PSEvu/HoUUYSc3cJ9KKpjgO0N3/D/u/aUdeGQ8HkUBHieoGuKKp6ly0bs6VAKipFxWXY98Fi3v4zH1/6o6PzjcioPIINSQxooiDB/P6ZFUZ+xq7tYoNcSyR3IrkyWNVxLmJGGk4Qo3S/kAw6Iosv5ImfuXnmT48vo6F53yHOQlIqXnhw86uv2r1tMJ+rCS0SijDIdZ1+od6p0MghYhLeFlma6Dd/dSJecuN9R6NN4q2hhoB5iLo7xR8e/srv3rG27KeFvVwbiSoXGiEA6zo0e5Kg0yAlV2/RnZnY8bMfX/jje5eoqaRKTzhXfUjPZ649XMPI5vozgwo8c8900625Dqqarwf/lDj3tfdH5OtJOiKlbjZPvuJjc+86vpRIj7PqKAVq/OS+na+5Yv9mmw23UFSNInBCndnXcy0XRkygKiJ8oshKbzK/55T+9I3H7vUs4u5eQzInKmxnst/5hku+dwfL2kC1UQOkNuEjdXRhUEdTNahGA9cENXuz1O782ZtP/9HRBaYc6Gj09drfBiTmbOk0OUNBkeZjZ5Yj+PUHd0d0rRdQjSl5EPHQcYeM6pogUIEqYplzeernbpx514klKBoXCbh4okeJFxzY/Jor9mxdWzN0JZtTTRiknC28xIVLDMTVpbeSBxP9/J4TfPGNJ+71JMkYJgEwV9TtWv7oyid+//a6Wuda36QlQWq2Mshq5AWrMg0KtKiSRbwM8+SZ/s5XfuzEn903L0mrFJogMlnPk9c+BxLQggUMJ3thncgHZ1YpevWuHZtWB+IwFUiVB1fU749azsZ+rCQz11Lz8o/Nvvv4UlJ10BkANPrw8sKD06+5cve2umAygISEJNeRkW+cApjEeb2/jXQIMKF4O9m851S84iPH74msEqEGZxtNx7pN/Y+vvPx7dpZht6DsFVJopt4lUU8aF+Eb07uMIpLNs6czE7t/+ZYT7zg6G0nU3V0RCBpCvrgx4vzEjGrZdTTNBnfSJH3k1GJb/en7tkip6r2SOrJLpgBTRFUUkbZmSx1dU21c3BubaTe98sbT7zq2nAThyahIxkga9vxLer/0lAM7hktupeYgkE1HKWk+0GJtLNQmQgNVeqRTVgUq1hYOe5O9vzmeXvzRY5/3LFpcHIHkicBu9Tc99eAP7LS1bg6pJ66WTMMBdipthcaGtKiEqEtNXsVTMBmFbiIVSdBlKUvNrld97OTbjs4yi4dHkCE+aj44W1jYCDH+gJJ4BDBKrZP86OyaCZ+5exo240zZ2pIQTMkYjC4hm0hIFVaoprLUbPqFj575k2PLooSLwSFOIav/jwNTv3Jo19bhMHcV6kaRUI7kaRT98IHCtwFjC3FmQQ2p6qlqHrJM5om/nOWLP3rvURdqqLs4NVKh7aP9/uHLv293WhnOZOlLKBgpECDBxtYHsHERLeogkik9lUSjJi89DOab7b/4zzN/fHQOKuGO9fKLPyCs36CNOY9qaMgh2w+eWaHUZxzUZkUiJoaZVSQbEuDiNdXcNR1ZJ4aracsrP3LmT44vZlH3kcSGJUTBcw9MvebQnm1rpe0KYaaoQoJy4Z4xAHGKci17azFVOcBU83en5aUfvu9e8UY9zCPQIBdwL/2N37D3e/eWsrrWs+mAVLUH+TIPZxiuMcxVg8nSyEZWFWLYw2Cx2fnKWxbfeu+8qyQ/Z8SCjduYc+dFq4yagvT9Z9aS9562d5t2yzmqpy4k6FRIsDKikVhKUz9/08w7ji9GQo3sUBcLoVY8b/+W1x7evW0wk6oJzTSKrnvGEhfsgIEw4Sp9MrxfZanXT+87qS/9yNHPe1Z6a4gQsO1Yt6q/5dDl37c7lsupxCZZQ7qsN1hd4L0JiCWCLhXSNcXa8IX+9l+8aeEt9y1GykS1UIxKgo8oMeuVFQ0LNtefWcmCb9y9JXVrlLWqTqRkiRboxWKe/MWb5t5+bIFKuAQr1UMZNV60Z8dvPOkJW+qMoQvVqhyxIs7s5IV7xusdQYxex5X+RP7r2eZlHz56t4mKR3gXTJww2A7aHxw++AO7o1sZZPSTw7VUtfXA+EIdsKZKMJs6ZMAoOZrlvPOXPz7z5vvmoInRiQtI50bbc/ThOTohLqGAUD98ZqWqPvng3tytCS0i0xIyT/anfumm+Xfct4CGrEyjNjggKn583/RrD+3dPliCmeUYJTlAUWcKSsAvIspnkOgvNcPeRPt3p/QlHzl2t2dJFfDkEOYC2yrl7Vdd+v07WIZnkkwna0IsezdM0iVp6gXenAFxFlXQUy0lTZyc2vuam4+/7ehcqIRUMRozw+QhycqLJ6YdNauACDLD1lQ/dHq5J/qNO7fnwcCCyO1aq//rloV33TsvKTk0OFqJE+b1ufsmX3d4x7YyV7kGlexZR01RzmzUgGmYnCvHc14B+cI0EggKzPu93l/P8qeP3Pe59VDLw9lDM4BtEXvnk5/w33b7is+pTKwkUCyFDxOTpbZuNJbkuZgxjWGSZN5UXZrY/aqbj//BvTM1i5q7JxcIbJQ+32AHqj4cgYn7W23qeoJQ/+nUYgM+fc+2nnVLadPP//Opt9+zAEVygYsnSyJm8fwD+iuHL9nTDaPUUBKSTEbNGOsRhyBIYqMhi6Iam6AIVwVU67vXPJX/7lR+0ZGjd3ujaiYehkw1507xN1198Fk7S+kWau6rU+ij9h6jjHoTNpSuDiZrXKKqjVpzBWHCir5gmLmyPLnj1Teffss9M9EwLGK92TkQEes14EeYGH9oU1owK/mBM8uDVv7D3oO/fvPn3nJ0iRlaM8AqRYJW47l7p1519f7twy4PqiqqUEIIuPgDFyEfjiIxNilK0MRaR17R4UTT+7uZ/KKP3X2PAxrqnoy9yAP6tNibDz3hh3b018pC5F5yJVwdo8TxKLbfqKCuZ5tdAhqKSFXpFI3ax+pyb8crPz779nvmqeJfaH2Jf9kz3qhcPhyrl9pIFqVH+6ptE7fOrBZmhDDcGSEBs+fvmX79VQc2+aoMO2G1hIFCQ5MxaBd8Z6eSXVNaw0QnCzKd3ndaXnbDybvc2hxWUIM9pIrYQX/D0/b+4F7DwrCJzQaruVO/wExLECbeVoolFw51lEcvmasrvd2/eMvi731+NpQpAq5lg51zF2n8z+WNeIU3UIMeXRsqRV0MiFQgpNlz9m/+rat2bbG5sE4lTKMIQtatfVxE7lY4UO9ZTDgXepPyvpn0sg8fu6tmiicLhIa0BWUq2e895bIf2dms2Clrcm+YQQsaL8IzBqChQelSQRo2xbLH/NSWX7p58ffvWXDNCdWhjgRc+Mq7KImhIAQ0SKQABNUBIUwlqj9n3+Zrn3RgUs5UrCVvgrSzzbe5igaq+IUTAw+0JYa9Pv9mvvfSI/fdVZAF7m6koO+0bTF861X7n7VfykoV0WAJmhMAxXkRyxGGxtRcVzy6xiaGederbj35u3fP1ZTpJVwJOA2Bx0ZiRlcnB+CucGK0O2XC4tl7N11zaM+OOlMdpEhIQAgRl+Tkelftha8mWruWujyV/342v+SGY3dZKxoulp3CZKxbUN5y1YFn70xlOOOpn4cZ4q5FQowqceG3FqAIyWisuvROTR943S3H3/z5ORGpMPFRqG0p4HiMiMmu2aVKOJGDCAXhbA9P5z/4pst3dWdKlAaKyHmUww9qkIBLuGCDs/OF3UNnjXRAw63ftu+dl5cdOXaXUdUhHh5ttB1tUuztT9r/g3vznMwKJwMR2QArKlpTW+C6wVufrQadzdoFozKApO6pxlpv5298/OSb754tWdSD3hpFUGR9X1M8RhID+P0RU5zNA4ku1m4b65W7p5sBIrRrBkHTgESYWqcVYDLdYAehwEPgpKIKgpFQkafkfXPNC244eldNSdxh8EiQCu4Ku+7wwR/ejzKchUwmh5x1h0atq5CN+mDJkzNKcjCyiyCquGEyVZCDpU2bX3vLmTd9fq42mdU8RoVIe3ju15eCmHiwJ3i2mGPheP/p1VbzM3bTOJvrFhMxKiNpUBHBhxFLFqE6NYKAe28lyUQ//mGu94IbP/85d2rAvAn2oukQk1KvO7z/OTsnB8NVTz1xSMT9jjjxcDxjoIqHRDJRT45UhKBkgzez3m75lVuW3nTPQkOJsLNe3kXS8chJzLnaUgTUDs31pxe0j2/dtpmDIAPiTlEXcYF4VVeXjaoysabmiMmqa22f713KL/zwsbsK2hxiUUFhKoxd4dce3v+sy+pwONMrU8lSzZUX0TlZkouzsYxIVUGEulNWvd3yC59ceNPnlyA9smw8Z/xYEuOAiWf3Sv3giUHTTF29Z7JdXaZ0JdUQimeJ+0udG/GMLQWcTQlrJvCPi/HSD538bFEmRHWEUvoVZUrs2kMHn7NrshvOlpx6NY36uHgRnicBjRTQkqrrWlNLMixvmv7Vj69ee/eyiGoMiyA846Is/aNCDAR0GpECxvZDp+anUj60Z3u1VZESQCBJiEZs0GUVhLHXRelNdu9d7L/on858toSK0dxISOvhm1je8aSDP7zfh91qa9O9olU701qFF1MeTs5ArorQYcQwtDfobXvtJ2d/++55YU8xLARd+AjYlC89MQyV9fJINIAS7z+13DbtFQf2tMtLjcNUTVzDY2OJMbXUwWQqf2BBX3rk2Ge6nqYwscaZkCrqFpS3PvmSH9zblG7WUpNrItxSZRCjwVxEtFQ0APRqFTanpvb85idP//Zdc1kErIVCF30Y29MeS2Ko6DssxEfWwYmBNh89MT8h+oydW3S45myDrNoJOJo1HxnoEA0Gw0kSQRcEoV3IROYHlvzFN8zc2VGlCyIcbTSVMcn61iv2/9DudkFOh/bFadmBWoUI7XWMjfW5MAjSGcGzGwkYVZ2RxJAcXW/HGz5x4k13zZScEBbOiB7hDucjr3a+BBITqDhb147RrgX3geqRk4ttXw/v2dysDoPJhKSrUxAu1SQQSYMhbiRYJcKZWL3p965fyT955Nina2QmcasRQunInVGvffIlP3ppGnanlRPJRqc9BEENChC64fpHKICaHEQKEadrdfZQmVkWp7f8+q0zb7prtsvC6md3gNkjblq+lDbmXGgQQPqHk8v9Nj9tX4261JStRelM4pqd6jCJYQaCjYNBeLMm2kziyAJ+6sP33dmFJ3hYikS6QzZLef3hPT++p1/WBpF68NH2owu09VXdJZoqyXIgdypBNl0PzcKwr7/+z8tv/NycMombxaMxY48OMXRJQXE2/3Bioe3lb96+FaXTQIi7QEMkGFKdo6MnVGzaZG2iV/9xqX3ekWOfqq6iYtngQqvANsTvXnHwvz/Bl/xUr07kYbZcceF9kzABgcYaUIqG0HL1kGJ586tuW/ytuxYpGnSLJr4Epv4xkxgQDtOwSr3+xKDt979hVz+triB1NdWASCSBQ0whjMZi2Lb6gdX0sg8du700TKhhEaoCo29xvvHK/T+2b6quznvKyYlkoF0ELxBAQgOpJDddSzZMVQbT/VfftvTGz6xRVKJWQYR86dTXo07MaLeMixMN4GyOnJifaJor92+vNpAoYHJmCebwIdsS0e8N/3G1fdENc7cVZtZkEiBYTbwVvOXrLv+xvb5a51vb1C/J0tCkFF2vv12gZxwEtKhQOsGwpP5af+c1t5659rPzxglGqQw6IYYvJ1XGUGK0615ahAs+cHJ5ou09ec/2yZW1ZFokuRQ1RoRO6D8ttT955NinhpIyalQGRicebXL57Sue8NwDXsosUk9GJ9IkA6CmcjESQ6/iINpSk6e5TXuv+dTp37pzTkQVg04c66wLHhVmHh1ihMhBAwFn0CvRUW86sTCd2qdv3xx1oSiUMZCYSO2RlXjhkZO3DTXJsIYBCYwKTAHXPenA8/bqmp+qaSK5Vi2UCNAp/U6wsd5JAhLr1n59zwKjS0Uii2XSS3/zNZ84fe2dZzrt+/qZRjx70lj6ciJmPec6OkgtEBFB+GrikROLk7189e6JqGteYjJPXT/IL7/h2CeqUTXZqGudTtkWft0Vl/zoZakrp8nJ7IlY750cVRN8wzljCQbDxAGqJwk1CYZ6MHsZTG1+zR1nfufOuaEqvER8kcPtj8qMPWrG/1zWVgRd5A+dXN6aJp+2fTql/KEV/akj93xqaFB6GEKFYeBm2KsPb3/BpX1fGRITBAG7YLVVNUy8qSlbHu31cjLXCdHl4ab4jVtXXn/HItlmL/Uxm53HjhgN5hCjDKX90MnZXf3+bG/6eUc+96niVJHaOkLFKjCNuO5JB378sjxrxxtv27WGWs9mFi4ozbq+NSYDWpKRpSkW4qWdft3ty6+9Y1GlF/AqfHTs/Pn07WODhCzQLg8I5oJpjdRwZo2e1FFgSRkutqnymifted5l02V1vmusraLBgJ9nO9vDWBiMVMVMV7PXZtisTW/5tTvmfvP2BTKNfLCzh4D+O5MYp5hw/Rwp6DL6KwYNTw56olTTSMCbvuay5x/Ia/VM8k29QUYqLt0wCSAXzIwECK0iZNHoBtouTe3+7U/NXHfHnEtLWGUgEvjY0fIYEkO60sIaBkydkXKEwYwg3QKbndd9zWUveCKG5YzIBEERM7GqVNOLSeaTMdqo1hRLJkuTu954++xv3n6mqjZhQ+Lseab9R9PaP16IEUACjkQE4QEHTAEXKtN+wa993Z4XXpKG3UzX9NQQrKbFJQKpP+wJzp6C+q85YMkYGlWd4Oh0tGHTAZpLH7AyOfXGW2euueNM0RzhFv4AJyyds//0y5yYs8dA3p+gjdEZvpRsXr//0h2vOLQbS0cZEymyhuf1sx8iQmuSEN+IaQ6u+2AMqmeNREA8O0OxFP0tr/3MwrV3zlaRCH+IZ1wfQyOjeDwhREiI+H1La1uVz9i6R7oV0BmNUSUkO8HocpGIfzXOJ2ASw8ayaVtaQo1UQGujPvRt+I3bl1/36cWOTYbViMfVVDy+iEmIHG7kMvXGY0s7+hNX7s4yXDHloLEgchU1NF43uDtTgLYydw2hw1xL7sQrWMvkljfctvprn14MZoF3o5orYkzM+UZDhxglebMs/MDJ2R39yUPbtkq36KkzCWcmhBEgN1KZJiieXHKXzPNQMEymPrHlDXfOveb2uWAjUaoEHpVM/r9hYpzq1Bwh6FytAjccX97Sn/raPVs5XMtuRVOnAjVuLAgLokscJiGtqUNHszq9/7rbZq65fcaZAK8SGHVTPL54eZwRQ4bAAVaqBnoR8yI3nJifmOgd2rmlXRkwCGH2KnF22/m/QE9AAA0jmDtLoSsTO665c/b1nz61pprDy+h8KASjxcU153+5E/OgwCEKIMBKkg/ft5DMv27/tr44uhrREBAyoBECCuGjskKQgUSk8NFBRQigrSZt/7409YZ/Pvk7n5kZakO3GmdLkbzfwPiYmI240+v/aegA8oHZ1U8tlH1bd10ylRrMDTCsYoApQ2J0iAABSoB0ojpLVXPp2gZdu/1v5/LP3HTvn51acVX18C8+Qt4fV6w8lrmyhzNEATOgEYN9GT962eYfPTD1lVPaqMlgAPPqLGiqJALJa0ZRRiSNpj+I9Mn5+rZ75v783oVFTyo52DkN9fH/rR/30NGuXIWQUj0Bu3L7HbvSN++b+pqt/Sc0Zdv6ll0i1k98nPF051A+Obt8/X2r7z1djkWFQCHi4QzD480F+zcqMbJuCMQhoIk4BI4e6oGkX7FJ90+30w0ZAUSELHZ2z3z57Eo96laQIUYJ1mhBgMPRmfVhY2IeibRagJExelADqwKeGCTq/U+CkQc8LMvXX1BhBEf7VoKCBNJGDxFwHxPzyPgnBrn/KV9ECINgcFRPdq6HnfDRo5GggDNqkIYmhRNWNCBgDQkYxngk1g4f8gL/lcMB1t8z2kmx/vMDrhljjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHG+HeI/w8pj3H9umYYpgAAAABJRU5ErkJggg==" alt="Whop" style={{ width: 34, height: 34, borderRadius: 9 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", letterSpacing: -0.3 }}>Product Feature Proposals</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#555", letterSpacing: 0.4, marginTop: 1 }}>Ideas for Whop · By Angad Bhatia</div>
          </div>
        </div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#444", letterSpacing: 0.5, textTransform: "uppercase" }}>April 2026</div>
      </div>

      {/* Hero */}
      <div className="hero-section" style={{ position: "relative", zIndex: 1, background: "radial-gradient(ellipse at top left, rgba(255,90,31,0.06) 0%, transparent 50%)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 40 }}>
          <div style={{ flex: 1 }}>
            <h1 className="hero-title" style={{ fontWeight: 900, color: "#fff", letterSpacing: -1.8, lineHeight: 1.08, marginBottom: 12 }}>
              6 ideas for<br /><span style={{ color: "#ff5a1f" }}>where Whop can win next.</span>
            </h1>
            <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, maxWidth: 600 }}>
              I've been a paying member of communities on Whop and signed up for Skool and Circle to understand the space. These are ideas I'd explore based on my experience as both a creator and a member on the platform.
            </p>
            <div className="stats-row" style={{ marginTop: 24, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#555" }}>
              <div><span style={{ color: "#ff5a1f", fontWeight: 700, fontSize: 20 }}>6</span><br />feature proposals</div>
              <div><span style={{ color: "#ff5a1f", fontWeight: 700, fontSize: 20 }}>3</span><br />competitors analyzed</div>
              <div><span style={{ color: "#ff5a1f", fontWeight: 700, fontSize: 20 }}>3</span><br />platforms tested firsthand</div>
            </div>
            
            {/* Mobile platform badges */}
            <div className="hero-logos-mobile" style={{ gap: 8, marginTop: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 10px", background: "rgba(255,90,31,0.08)", border: "1px solid rgba(255,90,31,0.2)", borderRadius: 6 }}>
                <div style={{ width: 18, height: 18, background: "#ff5a1f", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 9, color: "#09090b" }}>W</div>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>Whop</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6 }}>
                <div style={{ width: 18, height: 18, background: "#f8f8f8", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 9, color: "#111" }}>S</div>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#ccc" }}>Skool</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6 }}>
                <div style={{ width: 18, height: 18, background: "#6C5CE7", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 9, color: "#fff" }}>C</div>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#ccc" }}>Circle</span>
              </div>
            </div>
          </div>
          
          {/* Platform logos */}
          <div className="hero-logos" style={{ flexDirection: "column", gap: 14, alignItems: "center", paddingTop: 12, flexShrink: 0 }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#555", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Platforms I Tested</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 16px", background: "rgba(255,90,31,0.06)", border: "1px solid rgba(255,90,31,0.2)", borderRadius: 8 }}>
                <div style={{ width: 24, height: 24, background: "#ff5a1f", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: "#09090b" }}>W</div>
                <span style={{ fontWeight: 600, fontSize: 13, color: "#fff" }}>Whop</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#ff5a1f", marginLeft: 4 }}>Seller + Member</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8 }}>
                <div style={{ width: 24, height: 24, background: "#f8f8f8", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: "#111" }}>S</div>
                <span style={{ fontWeight: 600, fontSize: 13, color: "#ccc" }}>Skool</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#666", marginLeft: 4 }}>Creator trial</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8 }}>
                <div style={{ width: 24, height: 24, background: "#6C5CE7", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: "#fff" }}>C</div>
                <span style={{ fontWeight: 600, fontSize: 13, color: "#ccc" }}>Circle</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#666", marginLeft: 4 }}>Creator trial</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: "linear-gradient(90deg, rgba(255,90,31,0.3) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)" }} />

      {/* Main */}
      <div className="main-grid">
        <div className="nav-col">
          <FeatureNav features={features} activeId={activeId} onSelect={setActiveId} />
        </div>
        <div className="detail-col">
          <FeatureDetail feature={activeFeature} />
        </div>
      </div>

      {/* Footer */}
      <div className="footer-bar" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#3a3a3a", letterSpacing: 0.5, textTransform: "uppercase", position: "relative", zIndex: 1 }}>
        <span>Angad Bhatia</span>
        <span>By Angad Bhatia · Based on firsthand experience across Whop, Skool, and Circle</span>
      </div>
    </div>
  );
}
