const FALLBACK_WUJU_API_KEY = "sk-NYzHkC8j8Z4YBAqWaDj0LJJD0SmfySzWSHBsHUcXF7WXgwaF";

const APP_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>WaterDamagePromoLab</title>
    <style>
      :root {
        --bg: #eef4f7;
        --panel: rgba(255,255,255,0.92);
        --ink: #20313b;
        --muted: #627480;
        --line: rgba(32,49,59,0.12);
        --brand: #2877a8;
        --accent: #d97732;
        --shadow: 0 28px 72px rgba(32,49,59,0.14);
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        color: var(--ink);
        font-family: "Helvetica Neue", Arial, sans-serif;
        background:
          radial-gradient(circle at 12% 14%, rgba(40,119,168,0.16), transparent 24%),
          radial-gradient(circle at 84% 18%, rgba(217,119,50,0.12), transparent 22%),
          linear-gradient(145deg, #fbfdff, var(--bg));
      }
      .page { width:min(1260px, calc(100vw - 28px)); margin:0 auto; padding:24px 0 56px; }
      .hero, .panel, .card { background:var(--panel); border:1px solid var(--line); box-shadow:var(--shadow); backdrop-filter:blur(12px); }
      .hero { border-radius:34px; padding:30px; }
      .panel, .card { border-radius:28px; padding:22px; }
      .topbar, .row { display:flex; gap:14px; flex-wrap:wrap; align-items:center; justify-content:space-between; }
      .brand { text-transform:uppercase; letter-spacing:0.18em; font-size:0.82rem; color:var(--brand); }
      .chip { display:inline-block; padding:8px 12px; border-radius:999px; background:rgba(40,119,168,0.1); color:var(--brand); font-size:0.86rem; }
      .hero-grid { display:grid; grid-template-columns:1.08fr 0.92fr; gap:26px; align-items:end; margin-top:20px; }
      h1 { margin:12px 0; font-size:clamp(3rem, 5vw, 5rem); line-height:0.92; letter-spacing:-0.04em; max-width:11ch; }
      h2, h3 { margin-top:0; }
      .lead, .sub, .mini { color:var(--muted); line-height:1.66; }
      .points { display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:12px; margin-top:22px; }
      .point { border-radius:18px; padding:14px; background:rgba(255,255,255,0.62); border:1px solid rgba(32,49,59,0.08); }
      .point strong { display:block; margin-bottom:6px; }
      .aside { border-radius:28px; padding:24px; color:#f9fdff; background:linear-gradient(180deg, rgba(32,49,59,0.98), rgba(40,119,168,0.94)); }
      .price { font-size:3rem; margin:8px 0; }
      .layout { display:grid; grid-template-columns:0.95fr 1.05fr; gap:18px; margin-top:22px; }
      form { display:grid; gap:14px; }
      label { display:grid; gap:8px; font-size:0.96rem; }
      input, textarea { width:100%; font:inherit; color:var(--ink); padding:14px 16px; border-radius:18px; border:1px solid rgba(32,49,59,0.12); background:rgba(255,255,255,0.94); }
      textarea { min-height:190px; resize:vertical; }
      button, .ghost { appearance:none; border:0; border-radius:999px; padding:14px 18px; font:inherit; cursor:pointer; }
      button { background:var(--brand); color:white; }
      .ghost { background:rgba(217,119,50,0.12); color:var(--accent); }
      button[disabled] { opacity:0.72; cursor:progress; }
      .results { display:grid; gap:14px; }
      .promo { margin-top:16px; padding-top:16px; border-top:1px solid rgba(32,49,59,0.08); }
      .promo:first-of-type { margin-top:0; padding-top:0; border-top:0; }
      .ad-image { width:100%; display:block; border-radius:18px; border:1px solid rgba(32,49,59,0.08); margin-top:12px; }
      .storyboard { margin:10px 0 0; padding-left:20px; }
      .storyboard li + li, ol li + li { margin-top:8px; }
      .loading, .error { display:none; }
      .loading { color:var(--brand); }
      .error { color:#a52518; }
      @media (max-width:920px) { .hero-grid, .layout, .points { grid-template-columns:1fr; } h1 { max-width:none; } }
    </style>
  </head>
  <body>
    <div class="page">
      <section class="hero">
        <div class="topbar">
          <div class="brand">WaterDamagePromoLab</div>
          <div class="chip">Emergency water mitigation, flood cleanup, drying, restoration campaigns</div>
        </div>
        <div class="hero-grid">
          <div>
            <div class="chip">Built for local water mitigation and restoration companies</div>
            <h1>Turn one mitigation offer into three booked-job campaigns.</h1>
            <p class="lead">WaterDamagePromoLab creates three high-intent ad angles, three vertical visual concepts, and three short-form video prompts for water mitigation crews, flood cleanup operators, and restoration contractors. Add a public property image URL to reshape a real damage photo into ad-ready creative.</p>
            <div class="points">
              <div class="point"><strong>High-urgency local demand</strong><span class="mini">Built for burst pipes, storm intrusion, flood cleanup, structural drying, and insurance-friendly restoration leads.</span></div>
              <div class="point"><strong>Creative plus offer strategy</strong><span class="mini">Outputs concepts for Meta, Reels, landing pages, Google local campaigns, and emergency-call funnels.</span></div>
              <div class="point"><strong>Easy to resell</strong><span class="mini">Package this as a monthly creative engine for restoration operators who need urgent local leads and better close rates.</span></div>
            </div>
          </div>
          <aside class="aside">
            <small>Suggested pricing</small>
            <div class="price">$399<span style="font-size:1rem">/month</span></div>
            <p class="mini" style="color: rgba(249,253,255,0.84)">Charge per territory. Upsell emergency-call funnels, insurance-claim landing pages, review capture, and realtor referral pages.</p>
          </aside>
        </div>
      </section>
      <section class="layout">
        <section class="panel">
          <h2>Build Promo Pack</h2>
          <p class="sub">Paste the water-damage offer brief. Add an optional public property image URL to turn a real damage photo into a polished campaign concept.</p>
          <form id="promoForm">
            <label>
              Offer brief
              <textarea name="notes" required placeholder="A local water damage company wants three campaign angles: one emergency water extraction offer, one structural drying and mitigation campaign, and one insurance-friendly restoration or rebuild coordination offer. Highlight rapid response, documentation, drying technology, and clean communication."></textarea>
            </label>
            <label>
              Optional property image URL
              <input name="imageUrl" type="url" placeholder="https://..." />
            </label>
            <div class="row">
              <button id="submitBtn" type="submit">Generate Promo Pack</button>
              <button id="demoBtn" type="button" class="ghost">Load demo brief</button>
            </div>
            <div class="loading" id="loading">Writing mitigation angles, visuals, and short-form video prompts...</div>
            <div class="error" id="error"></div>
          </form>
        </section>
        <section class="panel">
          <h2>Live Output</h2>
          <p class="sub">Each pack returns 3 offer angles, 3 image concepts, 3 video prompts, rollout ideas, and a package you can sell to mitigation and restoration companies.</p>
          <div id="empty" class="results"><div class="card"><h3>No promo pack yet</h3><p class="mini">Generate one to get three local restoration campaign concepts.</p></div></div>
          <div id="results" class="results" hidden></div>
        </section>
      </section>
    </div>
    <script>
      const form = document.getElementById("promoForm");
      const submitBtn = document.getElementById("submitBtn");
      const demoBtn = document.getElementById("demoBtn");
      const loading = document.getElementById("loading");
      const error = document.getElementById("error");
      const empty = document.getElementById("empty");
      const results = document.getElementById("results");
      demoBtn.addEventListener("click", () => {
        form.notes.value = "A local water damage company wants three campaign angles: one emergency water extraction offer, one structural drying and mitigation campaign, and one insurance-friendly restoration or rebuild coordination offer. Highlight rapid response, documentation, drying technology, and clean communication.";
        form.imageUrl.value = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80";
      });
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        submitBtn.disabled = true;
        loading.style.display = "block";
        error.style.display = "none";
        try {
          const response = await fetch("/api/promo-pack", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
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
        const promos = (data.promos || []).map((item) => {
          const image = item.imageUrl ? '<img class="ad-image" src="' + escapeHtml(item.imageUrl) + '" alt="Water damage promo" />' : "";
          const shots = Array.isArray(item.storyboard) && item.storyboard.length ? '<ol class="storyboard">' + item.storyboard.map((shot) => '<li>' + escapeHtml(shot) + '</li>').join("") + '</ol>' : '<p class="mini">No storyboard returned.</p>';
          const status = item.statusNote ? '<p class="mini"><strong>Status:</strong> ' + escapeHtml(item.statusNote) + '</p>' : "";
          return '<div class="promo">' +
            '<strong>' + escapeHtml(item.name || "Promo") + '</strong>' +
            '<p class="mini"><strong>Headline:</strong> ' + escapeHtml(item.headline || "") + '</p>' +
            '<p class="mini"><strong>Subcopy:</strong> ' + escapeHtml(item.subcopy || "") + '</p>' +
            '<p class="mini"><strong>CTA:</strong> ' + escapeHtml(item.cta || "") + '</p>' +
            '<p class="mini"><strong>Image prompt:</strong> ' + escapeHtml(item.visualPrompt || "") + '</p>' +
            '<p class="mini"><strong>Video prompt:</strong> ' + escapeHtml(item.videoPrompt || "") + '</p>' +
            '<p class="mini"><strong>3-shot storyboard:</strong></p>' + shots + status + image + '</div>';
        }).join("");
        results.innerHTML = '<section class="card"><h3>Summary</h3>' +
          '<p class="mini"><strong>Target buyer:</strong> ' + escapeHtml(data.summary?.targetBuyer || "") + '</p>' +
          '<p class="mini"><strong>Positioning:</strong> ' + escapeHtml(data.summary?.positioning || "") + '</p>' +
          '<p class="mini"><strong>Best use:</strong> ' + escapeHtml(data.summary?.bestUse || "") + '</p>' +
          '<p class="mini"><strong>Promo count:</strong> ' + escapeHtml(data.promoCount || 0) + '</p>' +
          '<p class="mini"><strong>Image count:</strong> ' + escapeHtml(data.imageCount || 0) + '</p>' +
          '<p class="mini"><strong>Video-ready count:</strong> ' + escapeHtml(data.videoReadyCount || 0) + '</p></section>' +
          '<section class="card"><h3>Promo Directions</h3>' + (promos || "<p class=mini>No promos returned.</p>") + '</section>' +
          '<section class="card"><h3>Launch Moves</h3>' + renderList(data.launchMoves) + '</section>' +
          '<section class="card"><h3>Service Offer</h3>' +
          '<p class="mini"><strong>Package:</strong> ' + escapeHtml(data.serviceOffer?.packageName || "") + '</p>' +
          '<p class="mini"><strong>Price idea:</strong> ' + escapeHtml(data.serviceOffer?.priceIdea || "") + '</p>' +
          '<p class="mini"><strong>Upsell:</strong> ' + escapeHtml(data.serviceOffer?.upsell || "") + '</p></section>';
      }
      function renderList(items) {
        if (!Array.isArray(items) || !items.length) return '<p class="mini">No notes returned.</p>';
        return '<ol>' + items.map((item) => '<li>' + escapeHtml(item) + '</li>').join("") + '</ol>';
      }
      function escapeHtml(value) {
        return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
      }
    </script>
  </body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/") {
      return new Response(APP_HTML, { headers: { "content-type": "text/html; charset=utf-8" } });
    }
    if (request.method === "POST" && url.pathname === "/api/promo-pack") {
      try {
        const { notes, imageUrl } = await request.json();
        if (!notes?.trim()) return json({ error: "Offer brief is required." }, 400);
        const strategy = fallbackStrategy(notes.trim(), "Stable local strategy mode");
        const promos = await Promise.all((strategy.promos || []).slice(0, 3).map((promo) => renderPromo(promo, imageUrl?.trim())));
        return json({
          summary: strategy.summary,
          promos,
          launchMoves: strategy.launchMoves || [],
          serviceOffer: strategy.serviceOffer || {},
          promoCount: promos.length,
          imageCount: promos.filter((item) => item.imageUrl).length,
          videoReadyCount: promos.filter((item) => item.videoPrompt).length
        });
      } catch (error) {
        return json({ error: error.message || "Failed to generate promo pack." }, 500);
      }
    }
    return new Response("Not found", { status: 404 });
  }
};

async function renderPromo(promo, imageUrl) {
  if (imageUrl) {
    try {
      return await editPromo(promo, imageUrl);
    } catch (error) {
      try {
        const fallback = await generatePromo(promo);
        return { ...fallback, statusNote: `Source-image edit failed, used generation fallback: ${error.message}` };
      } catch (fallbackError) {
        return { ...pickPromoFields(promo), imageUrl: "", statusNote: `Source-image edit failed, and generation fallback failed: ${fallbackError.message}` };
      }
    }
  }
  try {
    return await generatePromo(promo);
  } catch (error) {
    return { ...pickPromoFields(promo), imageUrl: "", statusNote: `Image generation was unavailable: ${error.message}` };
  }
}

async function editPromo(promo, imageUrl) {
  const sourceResponse = await fetch(imageUrl, { signal: AbortSignal.timeout(10000) });
  if (!sourceResponse.ok) throw new Error(`Unable to fetch source image (${sourceResponse.status})`);
  const contentType = sourceResponse.headers.get("content-type") || "image/jpeg";
  const extension = contentType.includes("png") ? "png" : "jpg";
  const imageBlob = await sourceResponse.blob();
  const form = new FormData();
  form.append("model", "grok-imagine-1.0-edit");
  form.append("prompt", promo.editPrompt || promo.visualPrompt || promo.headline || "Create a polished water damage marketing poster.");
  form.append("size", "1024x1792");
  form.append("image", new File([imageBlob], `source.${extension}`, { type: contentType }));
  const response = await fetch("https://wuju.de5.net/v1/images/edits", {
    method: "POST",
    signal: AbortSignal.timeout(15000),
    headers: { authorization: `Bearer ${FALLBACK_WUJU_API_KEY}` },
    body: form
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Edit failed (${response.status}): ${text.slice(0, 220)}`);
  }
  const data = await response.json();
  const resultUrl = data?.data?.[0]?.url || data?.data?.[0]?.b64_json;
  if (!isUsableImageValue(resultUrl)) return { ...pickPromoFields(promo), imageUrl: "", statusNote: "Image edit request completed, but the gateway did not return a usable image." };
  return { ...pickPromoFields(promo), imageUrl: normalizeImage(resultUrl), statusNote: "Used source image edit flow." };
}

async function generatePromo(promo) {
  const response = await fetch("https://wuju.de5.net/v1/images/generations", {
    method: "POST",
    signal: AbortSignal.timeout(15000),
    headers: { "content-type": "application/json", authorization: `Bearer ${FALLBACK_WUJU_API_KEY}` },
    body: JSON.stringify({
      model: "grok-imagine-1.0",
      prompt: promo.visualPrompt || promo.editPrompt || promo.headline || "Create a premium water damage marketing poster.",
      size: "1024x1792"
    })
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Generation failed (${response.status}): ${text.slice(0, 220)}`);
  }
  const data = await response.json();
  const resultUrl = data?.data?.[0]?.url || data?.data?.[0]?.b64_json;
  if (!isUsableImageValue(resultUrl)) return { ...pickPromoFields(promo), imageUrl: "", statusNote: "Image generation request completed, but the gateway did not return a usable image." };
  return { ...pickPromoFields(promo), imageUrl: normalizeImage(resultUrl), statusNote: "Used text-to-image generation flow." };
}

function pickPromoFields(promo) {
  return {
    name: promo.name || "Promo direction",
    headline: promo.headline || "",
    subcopy: promo.subcopy || "",
    cta: promo.cta || "",
    visualPrompt: promo.visualPrompt || "",
    editPrompt: promo.editPrompt || "",
    videoPrompt: promo.videoPrompt || "",
    storyboard: Array.isArray(promo.storyboard) ? promo.storyboard.slice(0, 3) : []
  };
}

function normalizeImage(value) {
  if (value.startsWith("http")) return value;
  return `data:image/png;base64,${value}`;
}

function isUsableImageValue(value) {
  if (!value || typeof value !== "string") return false;
  const normalized = value.trim().toLowerCase();
  return normalized !== "error" && normalized !== "null" && normalized !== "undefined";
}

function fallbackStrategy(notes, reason) {
  const brief = (notes || "").toLowerCase();
  const mentionsDrying = brief.includes("dry") || brief.includes("mitigation");
  const mentionsInsurance = brief.includes("insurance") || brief.includes("restoration");
  return {
    summary: {
      targetBuyer: "Homeowners and property managers facing sudden water intrusion, burst pipes, flooding, or restoration follow-up after damage.",
      positioning: "Rapid-response local mitigation crews with clean communication, drying technology, documentation support, and insurance-friendly processes.",
      bestUse: "Use for emergency paid social, local landing pages, insurance-friendly quote funnels, and short-form video ads."
    },
    promos: [
      {
        name: "Rapid Water Rescue",
        headline: "Water Damage? Get Fast Extraction and Cleanup",
        subcopy: "Stop damage from spreading with rapid local response, extraction equipment, and a crew that gets your property under control fast.",
        cta: "Call Emergency Crew",
        visualPrompt: "Emergency water damage crew extracting water from a residential room with professional drying equipment, realistic urgent cleanup scene.",
        editPrompt: "Transform the property image into a professional emergency mitigation scene and add text 'Emergency Water Cleanup'.",
        videoPrompt: "Vertical ad showing standing water, emergency extraction, and safer drying setup with text 'Fast Water Damage Response'.",
        storyboard: [
          "Shot 1: Water-damaged room with text 'Water Everywhere?'",
          "Shot 2: Extraction team at work with overlay 'Rapid Local Response'",
          "Shot 3: Controlled drying setup with text 'Call Before Damage Spreads'"
        ]
      },
      {
        name: mentionsDrying ? "Structural Drying Control" : "Mitigation Stabilize",
        headline: mentionsDrying ? "Dry Out the Structure Before Bigger Problems Start" : "Professional Water Mitigation That Stabilizes the Property Fast",
        subcopy: "Use professional drying, dehumidification, and monitoring to bring moisture down quickly and protect the next phase of repair.",
        cta: "Book Drying Assessment",
        visualPrompt: "Water mitigation technicians placing dehumidifiers and air movers through a residential property, clean professional restoration style.",
        editPrompt: "Add drying equipment, moisture-readout overlays, and text 'Structural Drying & Monitoring' to the property image.",
        videoPrompt: "Vertical ad showing moisture checks, drying equipment placement, and stabilized property with text 'Professional Drying Fast'.",
        storyboard: [
          "Shot 1: Moisture meter reading with text 'Hidden Moisture?'",
          "Shot 2: Air movers and dehumidifiers set up with overlay 'Drying Technology'",
          "Shot 3: Dry stabilized room with text 'Schedule Mitigation Now'"
        ]
      },
      {
        name: mentionsInsurance ? "Claim-Ready Restoration Help" : "Restoration Pathway",
        headline: mentionsInsurance ? "Need Clean Documentation for Insurance and Restoration?" : "Move from Damage to Restoration with One Clear Plan",
        subcopy: "Make the next step easier with clean reporting, photos, moisture logs, and restoration coordination that keeps the process moving.",
        cta: "Get Restoration Review",
        visualPrompt: "Restoration project manager reviewing water damage documentation inside a home with clean dry restored area visible, trustworthy professional scene.",
        editPrompt: "Overlay insurance-friendly documentation visuals and add text 'Restoration Coordination + Reporting'.",
        videoPrompt: "Vertical ad showing documented damage, drying complete, and restoration planning with text 'From Water Damage to Recovery'.",
        storyboard: [
          "Shot 1: Damage photos and notes with text 'Need a Clear Next Step?'",
          "Shot 2: Coordinator reviews documentation with overlay 'Clean Reporting'",
          "Shot 3: Restored-ready space with text 'Start Your Recovery Plan'"
        ]
      }
    ],
    launchMoves: [
      "Run geo-targeted emergency ads split by extraction, structural drying, and insurance-friendly restoration support intent.",
      "Build dedicated landing sections for emergency response, drying and mitigation, and restoration coordination with call-now and quote-request flows.",
      "Send follow-up email and SMS to past customers, plumbers, and real estate contacts promoting rapid response and documentation-ready mitigation services."
    ],
    serviceOffer: {
      packageName: "DryGuard Revenue Pack",
      priceIdea: "$250 emergency dispatch, drying and mitigation quoted by severity, restoration coordination priced by project scope",
      upsell: `Add insurance-claim pages, emergency funnels, referral pages, and review capture. Fallback reason: ${reason}`
    }
  };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8" } });
}
