const FALLBACK_WUJU_API_KEY = "sk-NYzHkC8j8Z4YBAqWaDj0LJJD0SmfySzWSHBsHUcXF7WXgwaF";

const APP_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Emergency Response Console</title>
    <style>
      :root {
        --bg:#eef5f8;
        --panel:rgba(255,255,255,.9);
        --ink:#1f313c;
        --muted:#617581;
        --line:rgba(31,49,60,.1);
        --brand:#1f7eaf;
        --accent:#dd7a34;
        --shadow:0 26px 80px rgba(31,49,60,.12);
      }
      *{box-sizing:border-box}
      body{
        margin:0;color:var(--ink);font-family:"Helvetica Neue",Arial,sans-serif;
        background:
          radial-gradient(circle at 12% 14%, rgba(31,126,175,.16), transparent 24%),
          radial-gradient(circle at 84% 18%, rgba(221,122,52,.13), transparent 22%),
          linear-gradient(180deg,#fbfdff,var(--bg));
      }
      .page{width:min(1380px,calc(100vw - 28px));margin:0 auto;padding:24px 0 56px}
      .hero,.panel,.card{background:var(--panel);border:1px solid var(--line);box-shadow:var(--shadow);backdrop-filter:blur(14px)}
      .hero{border-radius:30px;padding:28px}
      .panel,.card{border-radius:24px;padding:20px}
      .topbar,.row,.split{display:flex;gap:14px;flex-wrap:wrap;align-items:center;justify-content:space-between}
      .brand{text-transform:uppercase;letter-spacing:.18em;font-size:.8rem;color:var(--brand)}
      .chip{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;background:rgba(31,126,175,.1);color:var(--brand);font-size:.86rem}
      .hero-grid{display:grid;grid-template-columns:1.06fr .94fr;gap:24px;margin-top:18px;align-items:end}
      h1{margin:12px 0;font-size:clamp(3rem,5vw,5rem);line-height:.92;letter-spacing:-.05em;max-width:11ch}
      h2,h3,h4{margin-top:0}
      .lead,.sub,.mini{color:var(--muted);line-height:1.66}
      .hero-list,.overview,.triple{display:grid;gap:12px}
      .hero-list,.overview{grid-template-columns:repeat(3,minmax(0,1fr))}
      .triple{grid-template-columns:repeat(3,minmax(0,1fr))}
      .hero-item,.metric{padding:14px;border-radius:18px;background:rgba(255,255,255,.58);border:1px solid rgba(31,49,60,.08)}
      .hero-item strong,.metric span{display:block}
      .metric strong{display:block;margin-top:8px;font-size:1.35rem}
      .statbox{padding:22px;border-radius:24px;color:#f7fbff;background:linear-gradient(180deg,rgba(31,49,60,.98),rgba(31,126,175,.94))}
      .statbox small{text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.72)}
      .statbox strong{display:block;font-size:2.5rem;margin:10px 0}
      .layout{display:grid;grid-template-columns:430px minmax(0,1fr);gap:18px;margin-top:20px;align-items:start}
      form{display:grid;gap:14px}
      .grid-2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
      label{display:grid;gap:8px;font-size:.94rem}
      input,textarea,select{width:100%;font:inherit;color:var(--ink);padding:13px 14px;border-radius:16px;border:1px solid rgba(31,49,60,.12);background:rgba(255,255,255,.9)}
      textarea{min-height:140px;resize:vertical}
      button,.ghost{appearance:none;border:0;border-radius:999px;padding:13px 18px;font:inherit;cursor:pointer}
      button{background:var(--brand);color:white}
      .ghost{background:rgba(221,122,52,.12);color:var(--accent)}
      button[disabled]{opacity:.72;cursor:progress}
      .results,.stack{display:grid;gap:16px}
      .board{display:grid;grid-template-columns:1.05fr .95fr;gap:16px}
      .pill{display:inline-flex;padding:7px 10px;border-radius:999px;background:rgba(31,126,175,.1);border:1px solid rgba(31,126,175,.12);color:#19658d;font-size:.84rem}
      .callout,.warn{padding:14px;border-radius:18px}
      .callout{background:rgba(31,126,175,.08);border:1px solid rgba(31,126,175,.16)}
      .warn{background:rgba(221,122,52,.1);border:1px solid rgba(221,122,52,.18)}
      .campaign{padding-top:16px;margin-top:16px;border-top:1px solid rgba(31,49,60,.08)}
      .campaign:first-of-type{margin-top:0;padding-top:0;border-top:0}
      .ad-image{width:100%;display:block;margin-top:12px;border-radius:18px;border:1px solid rgba(31,49,60,.08)}
      .loading,.error{display:none}
      .loading{color:var(--brand)}
      .error{color:#a52818}
      @media (max-width:1120px){.hero-grid,.layout,.board,.grid-2,.hero-list,.overview,.triple{grid-template-columns:1fr}h1{max-width:none}}
    </style>
  </head>
  <body>
    <div class="page">
      <section class="hero">
        <div class="topbar">
          <div class="brand">Emergency Response Console</div>
          <div class="chip">Dispatch triage, insurer-safe talk track, drying plan, referral follow-up</div>
        </div>
        <div class="hero-grid">
          <div>
            <div class="chip">For water mitigation crews, restoration operators, and emergency intake teams</div>
            <h1>Turn a damage call into a controlled, billable response flow.</h1>
            <p class="lead">This rework replaces the old promo page with a water-damage response console. It turns an intake brief into triage, homeowner talk tracks, insurer-safe positioning, drying plan framing, referral follow-up, and campaign assets that a real restoration operator can use.</p>
            <div class="hero-list">
              <div class="hero-item"><strong>Dispatch clarity</strong><span class="mini">Separates true emergency jobs from slower restoration follow-up opportunities.</span></div>
              <div class="hero-item"><strong>Sales support</strong><span class="mini">Outputs call scripts, SMS, insurer-safe language, and realtor/plumber referral follow-up.</span></div>
              <div class="hero-item"><strong>Creative support</strong><span class="mini">Generates emergency-response visuals and short video hooks for high-intent local ads.</span></div>
            </div>
          </div>
          <div class="statbox">
            <small>Suggested Pricing</small>
            <strong>$850/mo</strong>
            <div class="mini" style="color:rgba(247,251,255,.84)">Per metro or referral territory, plus setup for dispatch scripts, insurer-safe language, and referral partner funnels.</div>
          </div>
        </div>
      </section>

      <section class="layout">
        <section class="panel">
          <h2>Build Response Pack</h2>
          <p class="sub">Fill this like a real intake. The output is meant for dispatch and close control, not generic ads.</p>
          <form id="consoleForm">
            <div class="grid-2">
              <label>Company name<input name="companyName" placeholder="Rapid Dry Response" required /></label>
              <label>Market<input name="market" placeholder="Houston, TX" required /></label>
            </div>
            <div class="grid-2">
              <label>Job type
                <select name="jobType">
                  <option>Burst pipe / leak</option>
                  <option>Storm intrusion</option>
                  <option>Flooded interior</option>
                  <option>Mitigation + rebuild coordination</option>
                </select>
              </label>
              <label>Urgency level
                <select name="urgencyLevel">
                  <option>Immediate emergency</option>
                  <option>Same-day but stable</option>
                  <option>Inspection / estimate follow-up</option>
                </select>
              </label>
            </div>
            <div class="grid-2">
              <label>Insurance posture
                <select name="insurancePosture">
                  <option>Claim documentation help</option>
                  <option>Insurance-friendly but careful language</option>
                  <option>Mostly retail pay</option>
                </select>
              </label>
              <label>Rebuild capability
                <select name="rebuildCapability">
                  <option>Mitigation only</option>
                  <option>Mitigation + partner rebuild</option>
                  <option>Full mitigation + rebuild</option>
                </select>
              </label>
            </div>
            <div class="grid-2">
              <label>Referral source
                <select name="referralSource">
                  <option>Homeowner direct</option>
                  <option>Plumber referral</option>
                  <option>Realtor / property manager</option>
                  <option>Insurance-related lead</option>
                </select>
              </label>
              <label>After-hours coverage
                <select name="afterHours">
                  <option>24/7 dispatch live</option>
                  <option>Callback within 30 minutes</option>
                  <option>Business hours mainly</option>
                </select>
              </label>
            </div>
            <label>Optional property image URL<input name="imageUrl" type="url" placeholder="https://..." /></label>
            <label>Business notes<textarea name="notes" placeholder="We want cleaner emergency intake, better insurer-safe wording, faster plumber/referral follow-up, and an easier way to move mitigation jobs into rebuild revenue when appropriate." required></textarea></label>
            <div class="row">
              <button id="submitBtn" type="submit">Build Response Console</button>
              <button id="demoBtn" type="button" class="ghost">Load demo</button>
            </div>
            <div id="loading" class="loading">Building dispatch, drying, follow-up, and media assets...</div>
            <div id="error" class="error"></div>
          </form>
        </section>

        <section class="results">
          <div id="empty" class="card">
            <h2>No response pack yet</h2>
            <p class="sub">Generate one to get triage guidance, call handling, drying scope framing, follow-up assets, and campaign angles.</p>
          </div>
          <div id="results" hidden></div>
        </section>
      </section>
    </div>

    <script>
      const form = document.getElementById("consoleForm");
      const submitBtn = document.getElementById("submitBtn");
      const demoBtn = document.getElementById("demoBtn");
      const loading = document.getElementById("loading");
      const error = document.getElementById("error");
      const empty = document.getElementById("empty");
      const results = document.getElementById("results");

      demoBtn.addEventListener("click", () => {
        form.companyName.value = "Rapid Dry Response";
        form.market.value = "Houston, TX";
        form.jobType.value = "Storm intrusion";
        form.urgencyLevel.value = "Immediate emergency";
        form.insurancePosture.value = "Claim documentation help";
        form.rebuildCapability.value = "Mitigation + partner rebuild";
        form.referralSource.value = "Plumber referral";
        form.afterHours.value = "24/7 dispatch live";
        form.imageUrl.value = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80";
        form.notes.value = "We want cleaner emergency intake, better insurer-safe wording, faster plumber/referral follow-up, and an easier way to move mitigation jobs into rebuild revenue when appropriate.";
      });

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        submitBtn.disabled = true;
        loading.style.display = "block";
        error.style.display = "none";
        try {
          const payload = Object.fromEntries(new FormData(form).entries());
          const response = await fetch("/api/console", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload)
          });
          const data = await response.json();
          if (!response.ok) throw new Error(data.error || "Generation failed");
          render(data);
          empty.hidden = true;
          results.hidden = false;
        } catch (err) {
          error.textContent = err.message || "Unknown error";
          error.style.display = "block";
        } finally {
          submitBtn.disabled = false;
          loading.style.display = "none";
        }
      });

      function render(data) {
        const campaigns = (data.campaigns || []).map((item) => (
          '<div class="campaign"><h4>' + e(item.name) + '</h4>' +
          '<p class="mini"><strong>Headline:</strong> ' + e(item.headline) + '</p>' +
          '<p class="mini"><strong>Angle reason:</strong> ' + e(item.angleReason) + '</p>' +
          '<p class="mini"><strong>CTA:</strong> ' + e(item.cta) + '</p>' +
          '<p class="mini"><strong>Visual prompt:</strong> ' + e(item.visualPrompt) + '</p>' +
          '<p class="mini"><strong>Video hook:</strong> ' + e(item.videoPrompt) + '</p>' +
          list(item.storyboard || []) + '</div>'
        )).join("");
        const planCards = (data.responsePlan?.pathOptions || []).map((item) => (
          '<div class="card"><h4>' + e(item.name) + '</h4>' +
          '<p class="mini"><strong>Best for:</strong> ' + e(item.bestFor) + '</p>' +
          '<div class="mini"><strong>Includes:</strong></div>' + list(item.includes || []) + '</div>'
        )).join("");
        const heroImage = data.media?.heroImageUrl ? '<img class="ad-image" src="' + e(data.media.heroImageUrl) + '" alt="Water damage concept image" />' : '';
        const mediaStatus = data.media?.statusNote ? '<div class="' + (data.media.heroImageUrl ? 'callout' : 'warn') + '"><strong>Media status:</strong> ' + e(data.media.statusNote) + '</div>' : '';
        const trust = (data.scoreboard?.trustPoints || []).map((item) => '<span class="pill">' + e(item) + '</span>').join("");
        results.innerHTML =
          '<div class="overview">' +
            metric("Response score", data.scoreboard?.responseScore + "/100") +
            metric("Primary motion", data.summary?.recommendedMotion || "") +
            metric("Upsell path", data.summary?.upsellPath || "") +
            metric("Image ready", data.media?.heroImageUrl ? "1 concept" : "No usable image") +
          '</div>' +
          '<div class="board">' +
            '<div class="stack">' +
              '<section class="card"><h3>Dispatch Summary</h3>' +
              '<p class="mini"><strong>Company:</strong> ' + e(data.summary?.companyName || "") + '</p>' +
              '<p class="mini"><strong>Market:</strong> ' + e(data.summary?.market || "") + '</p>' +
              '<p class="mini"><strong>Lead story:</strong> ' + e(data.summary?.leadStory || "") + '</p>' +
              '<p class="mini"><strong>Close move:</strong> ' + e(data.summary?.closeMove || "") + '</p>' +
              '<div style="margin-top:12px">' + trust + '</div></section>' +
              '<section class="card"><h3>Triage Narrative</h3>' +
              '<p class="mini"><strong>Dispatch framing:</strong> ' + e(data.triageNarrative?.dispatchFraming || "") + '</p>' +
              '<p class="mini"><strong>Homeowner talk track:</strong> ' + e(data.triageNarrative?.homeownerTalkTrack || "") + '</p>' +
              '<p class="mini"><strong>Insurance-safe wording:</strong> ' + e(data.triageNarrative?.insuranceWording || "") + '</p>' +
              '<p class="mini"><strong>Rebuild transition:</strong> ' + e(data.triageNarrative?.rebuildTransition || "") + '</p>' +
              '</section>' +
              '<section class="card"><h3>Response Scripts</h3>' +
              '<p class="mini"><strong>Dispatch script:</strong> ' + e(data.salesAssets?.dispatchScript || "") + '</p>' +
              '<p class="mini"><strong>Plumber/referral follow-up:</strong> ' + e(data.salesAssets?.referralFollowUp || "") + '</p>' +
              '<p class="mini"><strong>SMS:</strong> ' + e(data.salesAssets?.smsFollowUp || "") + '</p>' +
              '<p class="mini"><strong>Email subject:</strong> ' + e(data.salesAssets?.emailSubject || "") + '</p>' +
              '<p class="mini"><strong>Email body:</strong> ' + e(data.salesAssets?.emailBody || "") + '</p>' +
              '<div class="mini"><strong>Objection handling:</strong></div>' + list(data.salesAssets?.objectionHandling || []) + '</section>' +
            '</div>' +
            '<div class="stack">' +
              '<section class="card"><h3>Response Paths</h3><div class="triple">' + planCards + '</div>' +
              '<div class="callout" style="margin-top:14px"><strong>Documentation hook:</strong> ' + e(data.responsePlan?.documentationHook || "") + '</div>' +
              '<div class="warn" style="margin-top:12px"><strong>Compliance note:</strong> ' + e(data.responsePlan?.complianceNote || "") + '</div></section>' +
              '<section class="card"><h3>Campaign Angles</h3>' + campaigns + '</section>' +
              '<section class="card"><h3>Launch Plan</h3>' +
              '<div class="mini"><strong>This week:</strong></div>' + list(data.launchPlan?.thisWeek || []) +
              '<div class="mini"><strong>Next 30 days:</strong></div>' + list(data.launchPlan?.next30Days || []) +
              '<div class="mini"><strong>KPIs:</strong></div>' + list(data.launchPlan?.kpis || []) + '</section>' +
              '<section class="card"><h3>Media Concept</h3>' +
              '<p class="mini"><strong>Primary visual prompt:</strong> ' + e(data.media?.primaryVisualPrompt || "") + '</p>' +
              '<p class="mini"><strong>Video hook:</strong> ' + e(data.media?.videoHook || "") + '</p>' +
              '<div class="mini"><strong>Storyboard:</strong></div>' + list(data.media?.storyboard || []) +
              mediaStatus + heroImage + '</section>' +
            '</div></div>';
      }
      function metric(label, value) { return '<div class="metric"><span>' + e(label) + '</span><strong>' + e(value || "") + '</strong></div>'; }
      function list(items) { if (!Array.isArray(items) || !items.length) return '<div class="mini">No items returned.</div>'; return '<ol>' + items.map((item) => '<li class="mini">' + e(item) + '</li>').join("") + '</ol>'; }
      function e(value) { return String(value ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"); }
    </script>
  </body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/") {
      return new Response(APP_HTML, { headers: { "content-type": "text/html; charset=utf-8" } });
    }
    if (request.method === "POST" && (url.pathname === "/api/console" || url.pathname === "/api/promo-pack")) {
      try {
        const payload = await request.json();
        const notes = String(payload.notes || "").trim();
        if (!notes) return json({ error: "Business notes are required." }, 400);
        const workspace = await buildWorkspace({
          companyName: String(payload.companyName || "Restoration company").trim(),
          market: String(payload.market || "Local market").trim(),
          jobType: String(payload.jobType || "Burst pipe / leak"),
          urgencyLevel: String(payload.urgencyLevel || "Immediate emergency"),
          insurancePosture: String(payload.insurancePosture || "Insurance-friendly but careful language"),
          rebuildCapability: String(payload.rebuildCapability || "Mitigation only"),
          referralSource: String(payload.referralSource || "Homeowner direct"),
          afterHours: String(payload.afterHours || "24/7 dispatch live"),
          notes,
          imageUrl: String(payload.imageUrl || "").trim()
        });
        if (url.pathname === "/api/promo-pack") {
          return json({
            summary: {
              targetBuyer: workspace.summary.leadStory,
              positioning: workspace.summary.closeMove,
              bestUse: workspace.launchPlan.thisWeek.join(" ")
            },
            promos: workspace.campaigns.map((item) => ({
              name: item.name,
              headline: item.headline,
              subcopy: item.angleReason,
              cta: item.cta,
              visualPrompt: item.visualPrompt,
              editPrompt: item.editPrompt,
              videoPrompt: item.videoPrompt,
              storyboard: item.storyboard
            })),
            launchMoves: workspace.launchPlan.thisWeek,
            serviceOffer: {
              packageName: "Emergency Response Console",
              priceIdea: "$850-$1600 monthly plus setup",
              upsell: "Add dispatch scripts, referral funnels, CRM notes, and rebuild follow-up automation."
            },
            promoCount: workspace.campaigns.length,
            imageCount: workspace.media.heroImageUrl ? 1 : 0,
            videoReadyCount: workspace.campaigns.filter((item) => item.videoPrompt).length
          });
        }
        return json(workspace);
      } catch (error) {
        return json({ error: error.message || "Failed to build restoration workspace." }, 500);
      }
    }
    return new Response("Not found", { status: 404 });
  }
};

async function buildWorkspace(input) {
  const strategy = buildStrategy(input);
  const media = await buildMedia(strategy.primaryCampaign, input.imageUrl);
  return {
    summary: {
      companyName: input.companyName,
      market: input.market,
      recommendedMotion: strategy.recommendedMotion,
      upsellPath: strategy.upsellPath,
      leadStory: strategy.leadStory,
      closeMove: strategy.closeMove
    },
    scoreboard: strategy.scoreboard,
    triageNarrative: strategy.triageNarrative,
    salesAssets: strategy.salesAssets,
    responsePlan: strategy.responsePlan,
    campaigns: strategy.campaigns,
    launchPlan: strategy.launchPlan,
    media
  };
}

function buildStrategy(input) {
  const immediate = input.urgencyLevel.includes("Immediate");
  const sameDay = input.urgencyLevel.includes("Same-day");
  const claimHelp = input.insurancePosture.includes("documentation");
  const rebuild = input.rebuildCapability.includes("rebuild");
  const partnerRebuild = input.rebuildCapability.includes("partner");
  const plumber = input.referralSource.includes("Plumber");
  const realtor = input.referralSource.includes("Realtor");
  const liveDispatch = input.afterHours.includes("24/7");

  const responseScore = Math.min(96, 56 + (immediate ? 14 : sameDay ? 8 : 2) + (claimHelp ? 8 : 3) + (rebuild ? 8 : partnerRebuild ? 5 : 1) + (liveDispatch ? 6 : 1));
  const recommendedMotion = immediate ? "Lead with dispatch speed, photo documentation, and drying containment." : "Lead with inspection clarity and documentation that earns trust before escalation.";
  const upsellPath = rebuild ? "Move mitigation into controlled rebuild scope when moisture, material loss, and homeowner fatigue justify it." : partnerRebuild ? "Use partner rebuild handoff as a trust-preserving revenue extension." : "Keep the close centered on mitigation and drying quality.";
  const leadStory = plumber ? "Lead came through a plumber-adjacent emergency path and needs speed plus credibility." : realtor ? "Lead likely values documentation, communication, and property-protection professionalism." : "Lead is a stressed homeowner who needs calm, fast, clear next steps.";
  const closeMove = claimHelp ? "Use insurer-safe wording and photo documentation to reduce homeowner confusion without promising claim outcomes." : "Use urgency and clean communication to move from panic to permission quickly.";

  const campaignOne = {
    name: "Rapid Containment Response",
    headline: "Get Water Under Control Before the Damage Spreads",
    angleReason: "Works because emergency buyers respond to speed, calm guidance, and the promise of a first controlled step.",
    cta: "Call for Immediate Response",
    visualPrompt: "Water mitigation crew arriving at a residential property with drying equipment, calm professional emergency-response campaign image.",
    editPrompt: "Turn this property damage image into an emergency response ad with overlay text 'Immediate Water Damage Response'.",
    videoPrompt: "Vertical ad showing wet floor panic, mitigation crew arrival, and rapid setup with text 'Stop the Damage Early'.",
    storyboard: [
      "Shot 1: Visible water issue with text 'Water Spreading Fast?'",
      "Shot 2: Crew arrival and setup with overlay 'Immediate Containment'",
      "Shot 3: Controlled scene with text 'Call for Rapid Response'"
    ]
  };
  const campaignTwo = {
    name: claimHelp ? "Documented Drying Path" : "Drying and Mitigation Clarity",
    headline: claimHelp ? "Get Drying Started With Clear Photos and Documentation" : "Show Homeowners What Happens After the First Call",
    angleReason: "Works because restoration buyers need process clarity almost as much as emergency speed.",
    cta: "Book Assessment",
    visualPrompt: "Mitigation specialist documenting moisture readings and drying equipment in a residential interior, clean professional restoration marketing image.",
    editPrompt: "Turn this mitigation image into a drying-plan ad with overlay text 'Documented Drying and Mitigation'.",
    videoPrompt: "Vertical ad showing moisture checks, drying setup, and homeowner reassurance with text 'Know the Plan'.",
    storyboard: [
      "Shot 1: Damp interior and uncertainty with text 'What Happens Next?'",
      "Shot 2: Moisture reading and drying plan with overlay 'Photo-Documented Mitigation'",
      "Shot 3: Homeowner reassurance with text 'Get a Clear Response Plan'"
    ]
  };
  const campaignThree = {
    name: rebuild ? "Mitigation to Rebuild Continuity" : "Referral Trust Builder",
    headline: rebuild ? "Take the Home From Water Damage to Full Recovery With One Coordinated Plan" : "Be the Restoration Team Referral Partners Trust to Call First",
    angleReason: rebuild ? "Works because homeowners hate fragmented recovery and prefer one clear next-step path." : "Works because referrals compound when the operator feels organized, fast, and easy to trust.",
    cta: rebuild ? "See Full Recovery Options" : "Partner With Our Response Team",
    visualPrompt: rebuild ? "Restoration project moving from water mitigation into clean rebuild finish, premium full-recovery campaign image." : "Professional restoration team with plumber or property manager referral context, trusted local service campaign image.",
    editPrompt: rebuild ? "Turn this water-damage image into a full recovery ad with overlay text 'Mitigation Through Rebuild'.": "Turn this team image into a referral partnership ad with overlay text 'Fast Response Partners'.",
    videoPrompt: rebuild ? "Vertical ad showing damaged room, mitigation work, and finished rebuilt space with text 'From Damage to Recovery'." : "Vertical ad showing referral call, fast dispatch, and clean communication with text 'Trusted Emergency Partner'.",
    storyboard: [
      "Shot 1: Damage stress with text 'Need More Than Just Cleanup?'",
      "Shot 2: Coordinated team or referral communication with overlay 'Clear Recovery Path'",
      "Shot 3: Restored confidence with text 'Start Your Recovery Plan'"
    ]
  };

  return {
    recommendedMotion,
    upsellPath,
    leadStory,
    closeMove,
    primaryCampaign: campaignOne,
    scoreboard: {
      responseScore,
      urgencyBand: immediate ? "Emergency response" : sameDay ? "Fast same-day" : "Planned follow-up",
      trustPoints: [
        liveDispatch ? "24/7 intake confidence" : "Structured callback process",
        claimHelp ? "Documentation-first wording" : "Direct homeowner clarity",
        rebuild ? "Mitigation to rebuild path" : partnerRebuild ? "Partner handoff path" : "Mitigation focus",
        plumber ? "Plumber referral fit" : realtor ? "Property-professional fit" : "Homeowner calm-first tone"
      ]
    },
    triageNarrative: {
      dispatchFraming: immediate ? "Open with urgency, arrival expectations, and immediate containment priorities." : "Open with damage verification, documentation, and whether active moisture spread is still happening.",
      homeownerTalkTrack: "Reduce panic first, then explain the first controllable step: stop spread, document conditions, start drying, then decide broader scope.",
      insuranceWording: claimHelp ? "Use phrases like documentation, moisture readings, and condition reporting. Avoid claim outcome promises." : "Stay careful: describe work performed and conditions observed, not insurance outcomes.",
      rebuildTransition: rebuild ? "Once mitigation trust is earned, frame rebuild as continuity, simplicity, and fewer handoff failures." : "If rebuild is not internal, position trusted partner handoff without overreaching."
    },
    salesAssets: {
      dispatchScript: `Thanks for calling ${input.companyName}. First, tell me if water is still actively entering the property. Our goal is to help you contain further damage quickly and get the right crew response in ${input.market}.`,
      referralFollowUp: plumber ? "Thanks for sending this over. We will move fast, document conditions clearly, and keep you updated so the homeowner sees one coordinated response." : realtor ? "We can document the situation, communicate clearly, and help stabilize the property while protecting the client experience." : "We will confirm the first on-site step, expected arrival, and what to do before the crew gets there.",
      smsFollowUp: `This is ${input.companyName}. We are preparing the best next step for your ${input.jobType.toLowerCase()} in ${input.market}. Keep the area safe, avoid spreading moisture, and we will guide you through the first response plan.`,
      emailSubject: "Your water damage response plan and next step",
      emailBody: `Thanks for contacting ${input.companyName}. Our next step is to verify active damage, document conditions, and set the right mitigation response. We will keep the process clear so you understand what happens first, what gets documented, and how recovery can move forward.`,
      objectionHandling: [
        "Can it wait until tomorrow: explain moisture spread risk without fear-mongering, then give the safest immediate next step.",
        "Will insurance cover it: avoid promises and anchor on documentation, readings, and clear records.",
        "Do I need rebuild too: keep rebuild secondary until mitigation scope is understood and trust is earned.",
        "I am calling multiple companies: differentiate on speed, communication, and documentation quality."
      ]
    },
    responsePlan: {
      pathOptions: [
        {
          name: "Emergency Mitigation",
          bestFor: "Active leaks, rapid spread, and high-stress homeowner situations.",
          includes: ["Fast triage","Containment focus","Drying setup","Clear next-step communication"]
        },
        {
          name: "Documented Drying",
          bestFor: "Jobs that need readings, photo proof, and insurer-safe communication.",
          includes: ["Moisture documentation","Drying plan","Progress communication","Condition reporting"]
        },
        {
          name: "Recovery Path",
          bestFor: "Jobs with material loss or homeowner interest in one coordinated recovery path.",
          includes: ["Mitigation outcome review","Rebuild or partner handoff","Expectation setting","Higher-value close path"]
        }
      ],
      documentationHook: "Sell photo proof, readings, and communication discipline as trust assets, not bureaucracy.",
      complianceNote: "Do not promise insurance approval or exact outcome. Document observed conditions and work performed."
    },
    campaigns: [campaignOne, campaignTwo, campaignThree],
    launchPlan: {
      thisWeek: [
        "Create one emergency-call landing page, one documented-drying page, and one mitigation-to-rebuild page.",
        "Train dispatch to separate true emergency, same-day, and estimate-follow-up callers.",
        "Build a plumber and property-manager follow-up sequence within 10 minutes of first response."
      ],
      next30Days: [
        "Track call-to-dispatch, dispatch-to-approved-work, and mitigation-to-rebuild conversion.",
        "Collect three case stories split across emergency mitigation, documented drying, and full recovery.",
        "Build referral-specific variants for plumbers, realtors, and property managers."
      ],
      kpis: ["Call answer rate","Dispatch conversion rate","Approved work rate","Mitigation-to-rebuild handoff rate"]
    }
  };
}

async function buildMedia(primaryCampaign, imageUrl) {
  try {
    if (imageUrl) {
      const edited = await editImage(primaryCampaign, imageUrl);
      return { primaryVisualPrompt: primaryCampaign.visualPrompt, videoHook: primaryCampaign.videoPrompt, storyboard: primaryCampaign.storyboard, heroImageUrl: edited.imageUrl, statusNote: edited.statusNote };
    }
    const generated = await generateImage(primaryCampaign);
    return { primaryVisualPrompt: primaryCampaign.visualPrompt, videoHook: primaryCampaign.videoPrompt, storyboard: primaryCampaign.storyboard, heroImageUrl: generated.imageUrl, statusNote: generated.statusNote };
  } catch (error) {
    return { primaryVisualPrompt: primaryCampaign.visualPrompt, videoHook: primaryCampaign.videoPrompt, storyboard: primaryCampaign.storyboard, heroImageUrl: "", statusNote: `Image pipeline unavailable: ${error.message}` };
  }
}

async function editImage(campaign, imageUrl) {
  const sourceResponse = await fetch(imageUrl, { signal: AbortSignal.timeout(10000) });
  if (!sourceResponse.ok) throw new Error(`Unable to fetch source image (${sourceResponse.status})`);
  const contentType = sourceResponse.headers.get("content-type") || "image/jpeg";
  const extension = contentType.includes("png") ? "png" : "jpg";
  const imageBlob = await sourceResponse.blob();
  const form = new FormData();
  form.append("model", "grok-imagine-1.0-edit");
  form.append("prompt", campaign.editPrompt || campaign.visualPrompt);
  form.append("size", "1024x1792");
  form.append("image", new File([imageBlob], `source.${extension}`, { type: contentType }));
  const response = await fetch("https://wuju.de5.net/v1/images/edits", {
    method: "POST",
    signal: AbortSignal.timeout(18000),
    headers: { authorization: `Bearer ${FALLBACK_WUJU_API_KEY}` },
    body: form
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Edit failed (${response.status}): ${text.slice(0,220)}`);
  }
  const data = await response.json();
  const value = data?.data?.[0]?.url || data?.data?.[0]?.b64_json;
  if (!isUsableImageValue(value)) return { imageUrl: "", statusNote: "Image edit completed, but no usable image was returned." };
  return { imageUrl: normalizeImage(value), statusNote: "Used source image edit flow." };
}

async function generateImage(campaign) {
  const response = await fetch("https://wuju.de5.net/v1/images/generations", {
    method: "POST",
    signal: AbortSignal.timeout(18000),
    headers: { "content-type": "application/json", authorization: `Bearer ${FALLBACK_WUJU_API_KEY}` },
    body: JSON.stringify({ model: "grok-imagine-1.0", prompt: campaign.visualPrompt, size: "1024x1792" })
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Generation failed (${response.status}): ${text.slice(0,220)}`);
  }
  const data = await response.json();
  const value = data?.data?.[0]?.url || data?.data?.[0]?.b64_json;
  if (!isUsableImageValue(value)) return { imageUrl: "", statusNote: "Image generation completed, but no usable image was returned." };
  return { imageUrl: normalizeImage(value), statusNote: "Used text-to-image generation flow." };
}

function isUsableImageValue(value) {
  if (!value || typeof value !== "string") return false;
  const normalized = value.trim().toLowerCase();
  return normalized !== "null" && normalized !== "undefined" && normalized !== "error";
}
function normalizeImage(value) { return value.startsWith("http") ? value : `data:image/png;base64,${value}`; }
function json(data, status = 200) { return new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8" } }); }
