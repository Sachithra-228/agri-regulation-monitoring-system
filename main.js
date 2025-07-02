import './style.css';

// Section content as functions for future routing
function heroSection() {
  return `
    <section class="relative min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-primary/80 to-secondary/60 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Paddy Field" class="absolute inset-0 w-full h-full object-cover opacity-30 -z-10" />
      <div class="relative z-10 py-16 px-4">
        <h1 class="text-4xl md:text-6xl font-bold text-primary drop-shadow-lg">Revolutionizing Sri Lanka's Agriculture with AI</h1>
        <p class="mt-4 text-lg md:text-2xl text-gray-700 font-medium">A centralized, AI-powered platform to monitor, regulate, and optimize the agricultural supply chain</p>
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#benefits" class="px-8 py-3 bg-primary text-white rounded shadow hover:bg-green-700 transition">See Benefits</a>
          <a href="#overview" class="px-8 py-3 bg-white text-primary border border-primary rounded shadow hover:bg-secondary transition">Learn More</a>
        </div>
      </div>
    </section>
  `;
}

function overviewIntroSection() {
  return `
    <section class="max-w-4xl mx-auto py-12 px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-primary mb-4">What is the Agriculture Regulation & Monitoring System?</h1>
      <p class="text-lg text-gray-700">A centralized, AI-powered platform designed to transform Sri Lanka's agriculture by enabling efficient land usage, accurate predictions, minimal food wastage, fair pricing, export control, and digital transactions.</p>
    </section>
  `;
}

function overviewObjectivesSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Key Objectives</h2>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>Modernize agriculture management</li>
        <li>Ensure food security</li>
        <li>Enable data-driven decision making</li>
        <li>Promote fair trade and pricing</li>
        <li>Support sustainable practices</li>
      </ul>
    </section>
  `;
}

function overviewCoreModulesSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Core Modules / Components</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow p-4">Land & Crop Registration</div>
        <div class="bg-white rounded-lg shadow p-4">Supply Chain Management</div>
        <div class="bg-white rounded-lg shadow p-4">Market Analytics</div>
        <div class="bg-white rounded-lg shadow p-4">Digital Payments</div>
        <div class="bg-white rounded-lg shadow p-4">Export Control</div>
        <div class="bg-white rounded-lg shadow p-4">AI & Automation</div>
      </div>
    </section>
  `;
}

function overviewArchitectureSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">System Architecture</h2>
      <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <img src="https://dummyimage.com/600x200/ededed/388e3c&text=System+Architecture+Diagram" alt="System Architecture Diagram" class="w-full max-w-xl mb-2" />
        <span class="text-gray-500 text-sm">(Infographic: Data flow from farmers to government, banks, exporters, etc.)</span>
      </div>
    </section>
  `;
}

function overviewStakeholderMapSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Stakeholder Map</h2>
      <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <img src="https://dummyimage.com/600x200/ededed/388e3c&text=Stakeholder+Map" alt="Stakeholder Map" class="w-full max-w-xl mb-2" />
        <span class="text-gray-500 text-sm">(Visual: Stakeholders and their interactions with the system)</span>
      </div>
    </section>
  `;
}

function overviewBenefitsSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Benefits Overview</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow p-4">
          <h3 class="font-semibold mb-2">For Farmers</h3>
          <ul class="list-disc pl-5 text-gray-700"><li>AI suggestions</li><li>Guaranteed payments</li></ul>
        </div>
        <div class="bg-white rounded-lg shadow p-4">
          <h3 class="font-semibold mb-2">For Government</h3>
          <ul class="list-disc pl-5 text-gray-700"><li>Food security</li><li>Economic boost</li></ul>
        </div>
        <div class="bg-white rounded-lg shadow p-4">
          <h3 class="font-semibold mb-2">For Transporters</h3>
          <ul class="list-disc pl-5 text-gray-700"><li>AI logistics</li><li>Transparent pricing</li></ul>
        </div>
        <div class="bg-white rounded-lg shadow p-4">
          <h3 class="font-semibold mb-2">For Consumers</h3>
          <ul class="list-disc pl-5 text-gray-700"><li>Fair prices</li><li>Fresh local food</li></ul>
        </div>
      </div>
    </section>
  `;
}

function overviewComparisonSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">How It Differs from Traditional Systems</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow text-left">
          <thead><tr class="bg-secondary"><th class="p-3">Feature</th><th class="p-3">Traditional</th><th class="p-3">AgriReg Monitor</th></tr></thead>
          <tbody>
            <tr><td class="p-3">Data Entry</td><td class="p-3">Manual, Paper-based</td><td class="p-3">Digital, Automated</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Pricing</td><td class="p-3">Unregulated, Opaque</td><td class="p-3">Market-driven, Transparent</td></tr>
            <tr><td class="p-3">Traceability</td><td class="p-3">None</td><td class="p-3">Full, End-to-end</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Payments</td><td class="p-3">Cash, Delayed</td><td class="p-3">Digital, Instant</td></tr>
            <tr><td class="p-3">Export Control</td><td class="p-3">Manual, Prone to Error</td><td class="p-3">Automated, Regulated</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function overviewSecuritySection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Security & Compliance</h2>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>End-to-end encryption for all transactions</li>
        <li>Multi-factor authentication for users</li>
        <li>Regular government audits and monitoring</li>
        <li>Compliance with national and international standards</li>
      </ul>
    </section>
  `;
}

function overviewRoadmapSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Implementation Roadmap</h2>
      <div class="flex flex-col gap-2">
        <div><span class="font-semibold">Phase 1:</span> Research & Legal Setup (6 months)</div>
        <div><span class="font-semibold">Phase 2:</span> System Development (12 months)</div>
        <div><span class="font-semibold">Phase 3:</span> Pilot Testing (6 months)</div>
        <div><span class="font-semibold">Phase 4:</span> National Expansion (2 years)</div>
        <div><span class="font-semibold">Phase 5:</span> Continuous Optimization</div>
      </div>
    </section>
  `;
}

function overviewFAQSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <div class="bg-white rounded-lg shadow p-4">
          <div class="font-semibold mb-1">Who can use the system?</div>
          <div class="text-gray-700">Farmers, government agencies, transporters, exporters, banks, and other stakeholders in the agriculture supply chain.</div>
        </div>
        <div class="bg-white rounded-lg shadow p-4">
          <div class="font-semibold mb-1">Is my data secure?</div>
          <div class="text-gray-700">Yes, all data is encrypted and access is strictly controlled according to best practices.</div>
        </div>
        <div class="bg-white rounded-lg shadow p-4">
          <div class="font-semibold mb-1">How do I register?</div>
          <div class="text-gray-700">You can register through the official portal or contact your local agriculture office for assistance.</div>
        </div>
      </div>
    </section>
  `;
}

function overviewContactSection() {
  return `
    <section class="max-w-2xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Contact for More Information</h2>
      <form class="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <input type="text" placeholder="Your Name" class="border rounded px-3 py-2" required />
        <input type="email" placeholder="Your Email" class="border rounded px-3 py-2" required />
        <textarea placeholder="Your Message" class="border rounded px-3 py-2" rows="4" required></textarea>
        <button type="submit" class="bg-primary text-white font-semibold rounded px-6 py-2 hover:bg-green-700 transition">Send Inquiry</button>
      </form>
    </section>
  `;
}

function overviewSection() {
  return [
    overviewIntroSection(),
    overviewObjectivesSection(),
    overviewCoreModulesSection(),
    overviewArchitectureSection(),
    overviewStakeholderMapSection(),
    overviewBenefitsSection(),
    overviewComparisonSection(),
    overviewSecuritySection(),
    overviewRoadmapSection(),
    overviewFAQSection(),
    overviewContactSection()
  ].join('');
}

function stakeholdersOverviewSection() {
  return `
    <section class="max-w-4xl mx-auto py-12 px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-primary mb-4">Stakeholders in the Agriculture Regulation & Monitoring System</h1>
      <p class="text-lg text-gray-700">The system brings together all key players in Sri Lanka's agriculture sector, enabling collaboration, transparency, and efficiency across the supply chain.</p>
    </section>
  `;
}

function stakeholdersGroupsGridSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Stakeholder Groups</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center"><span class="font-semibold">Farmers & Landowners</span><p class="text-gray-600 text-center text-sm mt-2">Grow crops, register land, and supply produce.</p></div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center"><span class="font-semibold">Government Agencies</span><p class="text-gray-600 text-center text-sm mt-2">Regulate, monitor, and support the agriculture sector.</p></div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center"><span class="font-semibold">Transport Providers</span><p class="text-gray-600 text-center text-sm mt-2">Move goods from farms to markets and storage.</p></div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center"><span class="font-semibold">Storage Providers</span><p class="text-gray-600 text-center text-sm mt-2">Store and preserve harvested crops.</p></div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center"><span class="font-semibold">Factories/Processors</span><p class="text-gray-600 text-center text-sm mt-2">Process raw crops into value-added products.</p></div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center"><span class="font-semibold">Exporters</span><p class="text-gray-600 text-center text-sm mt-2">Export agricultural products to global markets.</p></div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center"><span class="font-semibold">Banks/Financial Institutions</span><p class="text-gray-600 text-center text-sm mt-2">Provide financial services and digital payments.</p></div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center"><span class="font-semibold">Consumers</span><p class="text-gray-600 text-center text-sm mt-2">Purchase and consume agricultural products.</p></div>
      </div>
    </section>
  `;
}

function stakeholdersRolesTableSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Roles & Responsibilities</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow text-left">
          <thead><tr class="bg-secondary"><th class="p-3">Stakeholder</th><th class="p-3">Role</th></tr></thead>
          <tbody>
            <tr><td class="p-3">Farmers & Landowners</td><td class="p-3">Register land/crops, follow AI recommendations, supply produce</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Government Agencies</td><td class="p-3">Monitor, regulate, provide support, ensure compliance</td></tr>
            <tr><td class="p-3">Transport Providers</td><td class="p-3">Logistics, ensure timely delivery</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Storage Providers</td><td class="p-3">Store, preserve, and manage inventory</td></tr>
            <tr><td class="p-3">Factories/Processors</td><td class="p-3">Process crops, add value</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Exporters</td><td class="p-3">Handle export logistics, compliance</td></tr>
            <tr><td class="p-3">Banks/Financial Institutions</td><td class="p-3">Provide loans, digital payments</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Consumers</td><td class="p-3">Purchase, provide feedback</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function stakeholdersBenefitsSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Benefits for Stakeholders</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Farmers & Landowners</h3><ul class="list-disc pl-5 text-gray-700"><li>AI crop suggestions</li><li>Guaranteed payments</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Government Agencies</h3><ul class="list-disc pl-5 text-gray-700"><li>Real-time data</li><li>Regulatory control</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Transport Providers</h3><ul class="list-disc pl-5 text-gray-700"><li>Optimized logistics</li><li>Transparent pricing</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Storage Providers</h3><ul class="list-disc pl-5 text-gray-700"><li>Efficient inventory</li><li>Reduced spoilage</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Factories/Processors</h3><ul class="list-disc pl-5 text-gray-700"><li>Reliable supply</li><li>Market access</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Exporters</h3><ul class="list-disc pl-5 text-gray-700"><li>Export control</li><li>Compliance support</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Banks/Financial Institutions</h3><ul class="list-disc pl-5 text-gray-700"><li>Digital transactions</li><li>New customer base</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Consumers</h3><ul class="list-disc pl-5 text-gray-700"><li>Fair prices</li><li>Fresh local food</li></ul></div>
      </div>
    </section>
  `;
}

function stakeholdersInteractionMapSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Interaction Map</h2>
      <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <img src="https://dummyimage.com/600x200/ededed/388e3c&text=Stakeholder+Interaction+Map" alt="Stakeholder Interaction Map" class="w-full max-w-xl mb-2" />
        <span class="text-gray-500 text-sm">(Infographic: How stakeholders interact through the platform)</span>
      </div>
    </section>
  `;
}

function stakeholdersTestimonialsSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Stakeholder Testimonials</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow p-6 flex flex-col"><div class="text-gray-700 italic mb-4">"The system made it easy to get paid and plan my crops.”</div><div class="font-semibold text-primary">R. Jayasinghe</div><div class="text-sm text-gray-500">Farmer</div></div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col"><div class="text-gray-700 italic mb-4">"We now have real-time data for better policy decisions."</div><div class="font-semibold text-primary">D. Perera</div><div class="text-sm text-gray-500">Government Official</div></div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col"><div class="text-gray-700 italic mb-4">"Logistics are more efficient and transparent."</div><div class="font-semibold text-primary">S. Fernando</div><div class="text-sm text-gray-500">Transport Provider</div></div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col"><div class="text-gray-700 italic mb-4">"We can now access new markets and buyers."</div><div class="font-semibold text-primary">M. Silva</div><div class="text-sm text-gray-500">Exporter</div></div>
      </div>
    </section>
  `;
}

function stakeholdersOnboardingSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Onboarding Process</h2>
      <ol class="list-decimal pl-6 text-gray-700 space-y-2">
        <li>Register online or at a local office</li>
        <li>Verify identity and role</li>
        <li>Complete onboarding training (if required)</li>
        <li>Start using the platform and access features</li>
      </ol>
    </section>
  `;
}

function stakeholdersFAQSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Stakeholder FAQs</h2>
      <div class="space-y-4">
        <div class="bg-white rounded-lg shadow p-4"><div class="font-semibold mb-1">How do I join as a stakeholder?</div><div class="text-gray-700">Register online or visit your local agriculture office for assistance.</div></div>
        <div class="bg-white rounded-lg shadow p-4"><div class="font-semibold mb-1">What support is available?</div><div class="text-gray-700">Dedicated support teams and online resources are available for all stakeholders.</div></div>
        <div class="bg-white rounded-lg shadow p-4"><div class="font-semibold mb-1">Can I access the system on mobile?</div><div class="text-gray-700">Yes, the platform is mobile-friendly and accessible from any device.</div></div>
      </div>
    </section>
  `;
}

function stakeholdersContactSection() {
  return `
    <section class="max-w-2xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Contact for Stakeholder Support</h2>
      <form class="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <input type="text" placeholder="Your Name" class="border rounded px-3 py-2" required />
        <input type="email" placeholder="Your Email" class="border rounded px-3 py-2" required />
        <textarea placeholder="Your Message" class="border rounded px-3 py-2" rows="4" required></textarea>
        <button type="submit" class="bg-primary text-white font-semibold rounded px-6 py-2 hover:bg-green-700 transition">Send Inquiry</button>
      </form>
    </section>
  `;
}

function stakeholdersSection() {
  return [
    stakeholdersOverviewSection(),
    stakeholdersGroupsGridSection(),
    stakeholdersRolesTableSection(),
    stakeholdersBenefitsSection(),
    stakeholdersInteractionMapSection(),
    stakeholdersTestimonialsSection(),
    stakeholdersOnboardingSection(),
    stakeholdersFAQSection(),
    stakeholdersContactSection()
  ].join('');
}

function howItWorksOverviewSection() {
  return `
    <section class="max-w-4xl mx-auto py-12 px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-primary mb-4">How the System Works</h1>
      <p class="text-lg text-gray-700">A step-by-step, AI-powered workflow that connects all stakeholders and optimizes Sri Lanka's agricultural supply chain from field to export.</p>
    </section>
  `;
}

function howItWorksStepsVisualSection() {
  return `
    <section class="max-w-6xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Step-by-Step Visual Guide</h2>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div class="flex flex-col items-center">
          <div class="mb-3"><svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#A5D6A7"/><path d="M16 34v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="#388e3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="20" r="6" stroke="#388e3c" stroke-width="2"/></svg></div>
          <div class="font-semibold text-center">Land & Crop Registration</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="mb-3"><svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#A5D6A7"/><path d="M16 32h16M16 24h16M16 16h16" stroke="#388e3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="font-semibold text-center">Supply Chain Optimization</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="mb-3"><svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#A5D6A7"/><path d="M24 16v16M16 24h16" stroke="#388e3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="font-semibold text-center">Market Pricing & Transactions</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="mb-3"><svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#A5D6A7"/><path d="M24 32V16M24 16l-6 6M24 16l6 6" stroke="#388e3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="font-semibold text-center">Value Addition & Export Control</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="mb-3"><svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#A5D6A7"/><circle cx="24" cy="24" r="8" stroke="#388e3c" stroke-width="2"/><path d="M24 16v-4M24 36v-4M16 24h-4M36 24h-4" stroke="#388e3c" stroke-width="2" stroke-linecap="round"/></svg></div>
          <div class="font-semibold text-center">AI Learning & Automation</div>
        </div>
      </div>
    </section>
  `;
}

function howItWorksDetailedStepsSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Detailed Step Explanations</h2>
      <ol class="list-decimal pl-6 text-gray-700 space-y-4">
        <li><span class="font-semibold">Land & Crop Registration:</span> Farmers register their land and planned crops, providing data for AI analysis and government oversight.</li>
        <li><span class="font-semibold">Supply Chain Optimization:</span> The system matches supply with demand, optimizes logistics, and tracks produce from field to market.</li>
        <li><span class="font-semibold">Market Pricing & Transactions:</span> Real-time market data and AI-driven pricing ensure fair, transparent transactions for all parties.</li>
        <li><span class="font-semibold">Value Addition & Export Control:</span> Factories process crops, and exporters manage compliance and logistics for international trade.</li>
        <li><span class="font-semibold">AI Learning & Automation:</span> The platform continuously learns from data, improving recommendations and automating routine tasks.</li>
      </ol>
    </section>
  `;
}

function howItWorksInfographicSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Infographic: System Flow</h2>
      <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <img src="https://dummyimage.com/600x200/ededed/388e3c&text=System+Flow+Infographic" alt="System Flow Infographic" class="w-full max-w-xl mb-2" />
        <span class="text-gray-500 text-sm">(Visual: Data and goods flow through the system)</span>
      </div>
    </section>
  `;
}

function howItWorksUserJourneySection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">User Journey Examples</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Farmer</h3><p class="text-gray-700 text-sm">Registers land, receives AI crop suggestions, tracks produce, and receives digital payments.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Government Official</h3><p class="text-gray-700 text-sm">Monitors supply chain, enforces regulations, and accesses real-time analytics.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Exporter</h3><p class="text-gray-700 text-sm">Manages export compliance, logistics, and market access through the platform.</p></div>
      </div>
    </section>
  `;
}

function howItWorksTechnologiesSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Key Technologies Used</h2>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>Artificial Intelligence (AI) for recommendations and automation</li>
        <li>Internet of Things (IoT) for real-time data collection</li>
        <li>Blockchain for secure, transparent transactions</li>
        <li>Cloud infrastructure for scalability and reliability</li>
        <li>Mobile and web apps for accessibility</li>
      </ul>
    </section>
  `;
}

function howItWorksBenefitsSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Benefits at Each Step</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Land & Crop Registration</h3><ul class="list-disc pl-5 text-gray-700"><li>Accurate data for planning</li><li>Eligibility for government support</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Supply Chain Optimization</h3><ul class="list-disc pl-5 text-gray-700"><li>Reduced wastage</li><li>Efficient logistics</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Market Pricing & Transactions</h3><ul class="list-disc pl-5 text-gray-700"><li>Fair, transparent prices</li><li>Instant digital payments</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Value Addition & Export Control</h3><ul class="list-disc pl-5 text-gray-700"><li>Market access</li><li>Regulatory compliance</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">AI Learning & Automation</h3><ul class="list-disc pl-5 text-gray-700"><li>Continuous improvement</li><li>Reduced manual work</li></ul></div>
      </div>
    </section>
  `;
}

function howItWorksFAQSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">FAQs About the Process</h2>
      <div class="space-y-4">
        <div class="bg-white rounded-lg shadow p-4"><div class="font-semibold mb-1">How does the system ensure fair pricing?</div><div class="text-gray-700">AI-driven analytics and real-time market data set transparent, fair prices for all parties.</div></div>
        <div class="bg-white rounded-lg shadow p-4"><div class="font-semibold mb-1">Can I track my produce in real time?</div><div class="text-gray-700">Yes, the platform provides end-to-end tracking from farm to market or export.</div></div>
        <div class="bg-white rounded-lg shadow p-4"><div class="font-semibold mb-1">Is the system secure?</div><div class="text-gray-700">All transactions are encrypted and monitored for fraud and compliance.</div></div>
      </div>
    </section>
  `;
}

function howItWorksContactSection() {
  return `
    <section class="max-w-2xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Contact for Demo or More Info</h2>
      <form class="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <input type="text" placeholder="Your Name" class="border rounded px-3 py-2" required />
        <input type="email" placeholder="Your Email" class="border rounded px-3 py-2" required />
        <textarea placeholder="Your Message" class="border rounded px-3 py-2" rows="4" required></textarea>
        <button type="submit" class="bg-primary text-white font-semibold rounded px-6 py-2 hover:bg-green-700 transition">Request Demo</button>
      </form>
    </section>
  `;
}

function howItWorksSection() {
  return [
    howItWorksOverviewSection(),
    howItWorksStepsVisualSection(),
    howItWorksDetailedStepsSection(),
    howItWorksInfographicSection(),
    howItWorksUserJourneySection(),
    howItWorksTechnologiesSection(),
    howItWorksBenefitsSection(),
    howItWorksFAQSection(),
    howItWorksContactSection()
  ].join('');
}

function whyNeededSection() {
  return `
    <section class="bg-secondary/30 py-16 px-4">
      <h2 class="text-3xl font-bold text-primary mb-4 text-center">Why It's Needed</h2>
      <ul class="max-w-3xl mx-auto text-lg text-gray-700 space-y-2">
        <li>Poor planning & resource allocation</li>
        <li>Price fluctuations & market instability</li>
        <li>Unregulated exports</li>
        <li>No traceability or transparency</li>
      </ul>
    </section>
  `;
}

function howSolvesSection() {
  return `
    <section class="max-w-4xl mx-auto py-16 px-4">
      <h2 class="text-3xl font-bold text-primary mb-4">How It Solves Those Problems</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li class="flex items-center gap-3">AI crop recommendations</li>
        <li class="flex items-center gap-3">Automated supply tracking</li>
        <li class="flex items-center gap-3">Market-driven pricing</li>
        <li class="flex items-center gap-3">QR-based payments</li>
        <li class="flex items-center gap-3">Export regulation</li>
      </ul>
    </section>
  `;
}

function timelineOverviewSection() {
  return `
    <section class="max-w-4xl mx-auto py-12 px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-primary mb-4">Implementation Timeline</h1>
      <p class="text-lg text-gray-700">See the key phases, milestones, and progress of the Agriculture Regulation & Monitoring System rollout across Sri Lanka.</p>
    </section>
  `;
}

function timelinePhasesSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Project Phases</h2>
      <div class="flex flex-col md:flex-row gap-6 justify-between items-center">
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary mb-2">1</div>
          <div class="font-semibold">Research & Legal Setup</div>
          <div class="text-gray-500 text-sm">6 months</div>
        </div>
        <div class="h-8 w-1 bg-primary md:h-1 md:w-8"></div>
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary mb-2">2</div>
          <div class="font-semibold">System Development</div>
          <div class="text-gray-500 text-sm">12 months</div>
        </div>
        <div class="h-8 w-1 bg-primary md:h-1 md:w-8"></div>
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary mb-2">3</div>
          <div class="font-semibold">Pilot Testing</div>
          <div class="text-gray-500 text-sm">6 months</div>
        </div>
        <div class="h-8 w-1 bg-primary md:h-1 md:w-8"></div>
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary mb-2">4</div>
          <div class="font-semibold">National Expansion</div>
          <div class="text-gray-500 text-sm">2 years</div>
        </div>
        <div class="h-8 w-1 bg-primary md:h-1 md:w-8"></div>
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary mb-2">5</div>
          <div class="font-semibold">Continuous Optimization</div>
        </div>
      </div>
    </section>
  `;
}

function timelineMilestonesSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Milestones & Key Dates</h2>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>2023 Q1: Project Initiation & Funding Secured</li>
        <li>2023 Q3: Legal Framework Established</li>
        <li>2024 Q2: Core System Development Complete</li>
        <li>2024 Q4: Pilot Testing Launched</li>
        <li>2025 Q2: National Rollout Begins</li>
        <li>2026 Q1: First Export via System</li>
      </ul>
    </section>
  `;
}

function timelineProgressSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Progress Tracker</h2>
      <div class="w-full bg-secondary rounded-full h-4 mb-4">
        <div class="bg-primary h-4 rounded-full" style="width: 60%"></div>
      </div>
      <div class="flex justify-between text-sm text-gray-600">
        <span>Initiation</span>
        <span>Legal</span>
        <span>Development</span>
        <span>Pilot</span>
        <span>National</span>
        <span>Ongoing</span>
      </div>
    </section>
  `;
}

function timelinePhaseDetailsSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Phase Details</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Research & Legal Setup</h3><p class="text-gray-700 text-sm">Stakeholder analysis, legal groundwork, and project planning.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">System Development</h3><p class="text-gray-700 text-sm">Building the core platform, modules, and integrations.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Pilot Testing</h3><p class="text-gray-700 text-sm">Initial rollout in select regions, feedback, and optimization.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">National Expansion</h3><p class="text-gray-700 text-sm">Scaling to all regions, onboarding, and support.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Continuous Optimization</h3><p class="text-gray-700 text-sm">Ongoing improvements, new features, and monitoring.</p></div>
      </div>
    </section>
  `;
}

function timelineUpcomingEventsSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Upcoming Events</h2>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>2024-07-15: National Stakeholder Workshop</li>
        <li>2024-09-01: Pilot Region Field Day</li>
        <li>2024-11-10: Exporters' Forum</li>
        <li>2025-01-20: National Launch Event</li>
      </ul>
    </section>
  `;
}

function timelineAchievementsSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Historical Achievements</h2>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>2023: Project officially launched with government and international partners</li>
        <li>2024: Core modules completed and tested</li>
        <li>2024: First successful digital transaction</li>
        <li>2025: 10,000+ farmers onboarded</li>
        <li>2026: Recognized as a model for digital agriculture in South Asia</li>
      </ul>
    </section>
  `;
}

function timelineSection() {
  return [
    timelineOverviewSection(),
    timelinePhasesSection(),
    timelineMilestonesSection(),
    timelineProgressSection(),
    timelinePhaseDetailsSection(),
    timelineUpcomingEventsSection(),
    timelineAchievementsSection()
  ].join('');
}

function financialOverviewSection() {
  return `
    <section class="max-w-4xl mx-auto py-12 px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-primary mb-4">Financial Model</h1>
      <p class="text-lg text-gray-700">A sustainable, transparent, and inclusive financial model powers the Agriculture Regulation & Monitoring System for long-term impact.</p>
    </section>
  `;
}

function financialModelSummarySection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Financial Model Summary</h2>
      <p class="text-gray-700">The system is funded through a public-private partnership, combining government support with revenue from transaction and subscription fees, ensuring both accessibility and sustainability.</p>
    </section>
  `;
}

function financialRevenueStreamsSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Revenue Streams</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Transaction Fees</h3><p class="text-gray-700 text-sm">A small fee on digital transactions between stakeholders.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Subscription Fees</h3><p class="text-gray-700 text-sm">Monthly/annual fees for premium analytics and services.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Data Services</h3><p class="text-gray-700 text-sm">Revenue from anonymized data insights for research and policy.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Export Facilitation</h3><p class="text-gray-700 text-sm">Fees for export compliance and logistics support.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Government Grants</h3><p class="text-gray-700 text-sm">Initial and ongoing funding from government programs.</p></div>
      </div>
    </section>
  `;
}

function financialCostStructureSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Cost Structure</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">System Development</h3><p class="text-gray-700 text-sm">Initial design, engineering, and integration of modules.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Cloud Infrastructure</h3><p class="text-gray-700 text-sm">Hosting, storage, and computing resources.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Support & Training</h3><p class="text-gray-700 text-sm">User onboarding, helpdesk, and training programs.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Security & Compliance</h3><p class="text-gray-700 text-sm">Data protection, audits, and regulatory compliance.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Ongoing Optimization</h3><p class="text-gray-700 text-sm">Continuous updates, AI learning, and improvements.</p></div>
      </div>
    </section>
  `;
}

function financialValuePropositionSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Value Proposition</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">For Farmers</h3><ul class="list-disc pl-5 text-gray-700"><li>Higher, more stable income</li><li>Lower costs through efficiency</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">For Government</h3><ul class="list-disc pl-5 text-gray-700"><li>Better policy decisions</li><li>Food security</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">For Exporters</h3><ul class="list-disc pl-5 text-gray-700"><li>Faster, compliant exports</li><li>Access to new markets</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">For Banks</h3><ul class="list-disc pl-5 text-gray-700"><li>New customer base</li><li>Digital transaction growth</li></ul></div>
      </div>
    </section>
  `;
}

function financialCostBenefitSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Cost-Benefit Analysis</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow text-left">
          <thead><tr class="bg-secondary"><th class="p-3">Aspect</th><th class="p-3">Cost</th><th class="p-3">Benefit</th></tr></thead>
          <tbody>
            <tr><td class="p-3">System Development</td><td class="p-3">High (initial)</td><td class="p-3">Long-term efficiency, lower manual labor</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Cloud Infrastructure</td><td class="p-3">Medium (ongoing)</td><td class="p-3">Scalability, reliability</td></tr>
            <tr><td class="p-3">Support & Training</td><td class="p-3">Medium</td><td class="p-3">Higher adoption, fewer errors</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Security & Compliance</td><td class="p-3">Medium</td><td class="p-3">Trust, regulatory approval</td></tr>
            <tr><td class="p-3">Ongoing Optimization</td><td class="p-3">Low (per year)</td><td class="p-3">Continuous improvement, future-proofing</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function financialSustainabilitySection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Sustainability Plan</h2>
      <p class="text-gray-700">The system is designed for long-term sustainability through diversified revenue, cost control, and continuous innovation. Public-private collaboration ensures ongoing support and adaptation to future needs.</p>
    </section>
  `;
}

function financialPartnersSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Funding Partners</h2>
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Emblem_of_Sri_Lanka.svg" alt="Ministry of Agriculture" class="h-12 object-contain" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/FAO_logo.svg" alt="UN FAO" class="h-12 object-contain" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/World_Bank_logo.svg" alt="World Bank" class="h-12 object-contain" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Microsoft_logo_%282012%29.svg" alt="Microsoft" class="h-12 object-contain" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Logo_of_the_International_Finance_Corporation.svg" alt="IFC" class="h-12 object-contain" />
      </div>
    </section>
  `;
}

function financialModelSection() {
  return [
    financialOverviewSection(),
    financialModelSummarySection(),
    financialRevenueStreamsSection(),
    financialCostStructureSection(),
    financialValuePropositionSection(),
    financialCostBenefitSection(),
    financialSustainabilitySection(),
    financialPartnersSection()
  ].join('');
}

function challengesSolutionsOverviewSection() {
  return `
    <section class="max-w-4xl mx-auto py-12 px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-primary mb-4">Challenges & Solutions</h1>
      <p class="text-lg text-gray-700">Sri Lanka's agriculture sector faces several challenges, from poor planning and price instability to lack of traceability. The Agriculture Regulation & Monitoring System addresses these with modern, AI-powered solutions.</p>
    </section>
  `;
}

function challengesListSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Key Challenges</h2>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>Poor planning & resource allocation</li>
        <li>Price fluctuations & market instability</li>
        <li>Unregulated exports</li>
        <li>No traceability or transparency</li>
        <li>Manual processes & inefficiency</li>
        <li>Lack of data-driven decision making</li>
      </ul>
    </section>
  `;
}

function challengesImpactSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Impact of Challenges</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Farmers</h3><ul class="list-disc pl-5 text-gray-700"><li>Unstable income</li><li>Wasted crops</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Government</h3><ul class="list-disc pl-5 text-gray-700"><li>Poor policy decisions</li><li>Difficulty in regulation</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Economy</h3><ul class="list-disc pl-5 text-gray-700"><li>Lost export revenue</li><li>Inefficient supply chain</li></ul></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Consumers</h3><ul class="list-disc pl-5 text-gray-700"><li>Price volatility</li><li>Lack of food security</li></ul></div>
      </div>
    </section>
  `;
}

function solutionsOverviewSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">System Solutions Overview</h2>
      <p class="text-gray-700">The Agriculture Regulation & Monitoring System uses AI, automation, and real-time data to address these challenges and create a more efficient, transparent, and fair agricultural sector.</p>
    </section>
  `;
}

function challengeSolutionMappingSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Challenge-to-Solution Mapping</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow text-left">
          <thead><tr class="bg-secondary"><th class="p-3">Challenge</th><th class="p-3">System Solution</th></tr></thead>
          <tbody>
            <tr><td class="p-3">Poor planning & resource allocation</td><td class="p-3">AI crop recommendations, real-time analytics</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Price fluctuations & market instability</td><td class="p-3">Market-driven pricing, digital transactions</td></tr>
            <tr><td class="p-3">Unregulated exports</td><td class="p-3">Export control & compliance tools</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">No traceability or transparency</td><td class="p-3">End-to-end supply chain tracking</td></tr>
            <tr><td class="p-3">Manual processes & inefficiency</td><td class="p-3">Automation, digital workflows</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Lack of data-driven decision making</td><td class="p-3">Centralized data platform, analytics</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function solutionFeaturesSection() {
  return `
    <section class="max-w-5xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Solution Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">AI Crop Recommendations</h3><p class="text-gray-700 text-sm">Suggests optimal crops and planting schedules for each region and season.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Automated Supply Tracking</h3><p class="text-gray-700 text-sm">Tracks produce from field to market, ensuring transparency and efficiency.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Market-Driven Pricing</h3><p class="text-gray-700 text-sm">Uses real-time data and AI to set fair, transparent prices.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">QR-Based Payments</h3><p class="text-gray-700 text-sm">Enables secure, cashless transactions for all stakeholders.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Export Regulation</h3><p class="text-gray-700 text-sm">Controls and optimizes agricultural exports with compliance tools.</p></div>
        <div class="bg-white rounded-lg shadow p-4"><h3 class="font-semibold mb-2">Real-Time Analytics</h3><p class="text-gray-700 text-sm">Provides actionable insights for all stakeholders.</p></div>
      </div>
    </section>
  `;
}

function beforeAfterSection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Before & After Comparison</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow text-left">
          <thead><tr class="bg-secondary"><th class="p-3">Aspect</th><th class="p-3">Before (Traditional)</th><th class="p-3">After (With System)</th></tr></thead>
          <tbody>
            <tr><td class="p-3">Planning</td><td class="p-3">Manual, guesswork</td><td class="p-3">AI-driven, data-based</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Pricing</td><td class="p-3">Unpredictable, unfair</td><td class="p-3">Transparent, fair</td></tr>
            <tr><td class="p-3">Payments</td><td class="p-3">Cash, delayed</td><td class="p-3">Digital, instant</td></tr>
            <tr class="bg-secondary/20"><td class="p-3">Traceability</td><td class="p-3">None</td><td class="p-3">End-to-end tracking</td></tr>
            <tr><td class="p-3">Export Control</td><td class="p-3">Manual, error-prone</td><td class="p-3">Automated, regulated</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function caseStudySection() {
  return `
    <section class="max-w-4xl mx-auto py-8 px-4">
      <h2 class="text-2xl font-bold text-primary mb-4">Case Study: Farmer Success</h2>
      <div class="bg-white rounded-lg shadow p-6">
        <p class="text-gray-700 mb-2">"Before the system, I struggled with unpredictable prices and wasted crops. Now, I get AI recommendations, track my produce, and receive instant payments. My income is stable and I waste less."</p>
        <div class="font-semibold text-primary">K. Bandara</div>
        <div class="text-sm text-gray-500">Farmer, Kurunegala</div>
      </div>
    </section>
  `;
}

function challengesCtaSection() {
  return `
    <section class="w-full bg-primary text-white py-12 px-4 mt-8">
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 class="text-2xl md:text-3xl font-bold mb-2">Ready to Transform Agriculture?</h2>
        <p class="mb-4 text-lg">Contact us to learn more, partner, or join the digital agriculture revolution.</p>
        <a href="#/contact" class="px-8 py-3 bg-white text-primary font-semibold rounded shadow hover:bg-secondary transition">Contact Us</a>
      </div>
    </section>
  `;
}

function challengesSolutionsSection() {
  return [
    challengesSolutionsOverviewSection(),
    challengesListSection(),
    challengesImpactSection(),
    solutionsOverviewSection(),
    challengeSolutionMappingSection(),
    solutionFeaturesSection(),
    beforeAfterSection(),
    caseStudySection(),
    challengesCtaSection()
  ].join('');
}

// Navigation bar
function navBar() {
  return `
    <nav class="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div class="text-xl font-bold text-primary">AgriReg Monitor</div>
        <ul class="flex flex-wrap gap-4 text-sm md:text-base font-medium">
          <li><a href="#/" class="hover:text-primary transition">Home</a></li>
          <li><a href="#/overview" class="hover:text-primary transition">Overview</a></li>
          <li><a href="#/stakeholders" class="hover:text-primary transition">Stakeholders</a></li>
          <li><a href="#/how-it-works" class="hover:text-primary transition">How It Works</a></li>
          <li><a href="#/challenges-solutions" class="hover:text-primary transition">Challenges & Solutions</a></li>
          <li><a href="#/timeline" class="hover:text-primary transition">Timeline</a></li>
          <li><a href="#/financial" class="hover:text-primary transition">Financial</a></li>
        </ul>
        <button id="user-login-btn" class="ml-6 p-2 rounded-full hover:bg-secondary/40 focus:outline-none" aria-label="Login">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#388e3c" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V19.5z" />
          </svg>
        </button>
      </div>
    </nav>
    <div class="h-16"></div> <!-- Spacer for fixed navbar -->
  `;
}

function farmerPageSection() {
  return `
    <section class="max-w-5xl mx-auto py-12 px-4">
      <div class="bg-white rounded-lg shadow p-8 flex flex-col items-center mb-8">
        <h2 class="text-3xl font-bold text-primary mb-2">Welcome, Farmer!</h2>
        <p class="text-lg text-gray-700 mb-4">Your personalized dashboard for smarter, more profitable farming.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Crops Overview -->
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Crops Overview</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Rice (2 acres) – Growing</li>
            <li>Maize (1 acre) – Harvested</li>
          </ul>
          <button class="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-700 transition text-sm">Add Crop</button>
        </div>
        <!-- Farm Activities & Tasks -->
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Farm Activities & Tasks</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Water paddy field (Today)</li>
            <li>Apply fertilizer to maize (Tomorrow)</li>
            <li>Inspect for pests (This week)</li>
          </ul>
          <button class="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-700 transition text-sm">View All Tasks</button>
        </div>
        <!-- Market Prices & Analytics -->
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Market Prices & Analytics</h3>
          <div class="text-gray-700 text-sm mb-2">Rice: Rs. 85/kg (↑2%)<br>Maize: Rs. 60/kg (↓1%)</div>
          <div class="text-xs text-gray-500">Updated: Today, 9:00 AM</div>
          <button class="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-700 transition text-sm">View Price Trends</button>
        </div>
        <!-- Sales & Transactions -->
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Sales & Transactions</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Sold 500kg Rice – Rs. 42,500 (Paid)</li>
            <li>Sold 200kg Maize – Rs. 12,000 (Pending)</li>
          </ul>
          <button class="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-700 transition text-sm">View All Transactions</button>
        </div>
        <!-- AI Recommendations -->
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">AI Recommendations</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Consider planting green gram next season for higher returns.</li>
            <li>Apply organic fertilizer to paddy for improved yield.</li>
          </ul>
        </div>
        <!-- Weather & Alerts -->
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Weather & Alerts</h3>
          <div class="text-gray-700 text-sm mb-2">Today: 32°C, Partly Cloudy<br>Rain expected in 2 days.</div>
          <ul class="list-disc pl-5 text-red-600 text-xs">
            <li>Alert: Heavy rain forecast for Friday.</li>
          </ul>
        </div>
        <!-- Supply Chain Tracking -->
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Supply Chain Tracking</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Rice shipment to Colombo – In Transit</li>
            <li>Maize delivery to local market – Delivered</li>
          </ul>
          <button class="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-700 transition text-sm">Track Shipments</button>
        </div>
        <!-- Subsidies & Support -->
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Subsidies & Support</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Fertilizer subsidy – Approved</li>
            <li>Equipment grant – Pending</li>
          </ul>
          <button class="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-700 transition text-sm">Apply for Support</button>
        </div>
        <!-- Community & Knowledge Base -->
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Community & Knowledge Base</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li><a href="#" class="text-primary underline">How to improve soil health</a></li>
            <li><a href="#" class="text-primary underline">Best practices for pest control</a></li>
            <li><a href="#" class="text-primary underline">Join the farmer forum</a></li>
          </ul>
        </div>
        <!-- Profile & Settings -->
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Profile & Settings</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Name: R. Jayasinghe</li>
            <li>Email: farmer@gmail.com</li>
            <li>Farm Location: Kurunegala</li>
          </ul>
          <button class="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-700 transition text-sm">Edit Profile</button>
        </div>
      </div>
    </section>
  `;
}

function loginPageSection() {
  return `
    <section class="max-w-md mx-auto py-16 px-4">
      <div class="bg-white rounded-lg shadow p-8 flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#388e3c" class="w-16 h-16 mb-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V19.5z" />
        </svg>
        <h2 class="text-2xl font-bold text-primary mb-4">User Login</h2>
        <form id="login-form" class="w-full flex flex-col gap-4">
          <input id="login-username" type="text" placeholder="Username" class="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
          <input id="login-password" type="password" placeholder="Password" class="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
          <button type="submit" class="bg-primary text-white font-semibold rounded px-4 py-2 hover:bg-green-700 transition">Login</button>
        </form>
        <div id="login-error" class="text-red-600 mt-4 hidden">Invalid credentials. Please try again.</div>
      </div>
    </section>
  `;
}

function governmentPageSection() {
  return `
    <section class="max-w-5xl mx-auto py-12 px-4">
      <div class="bg-white rounded-lg shadow p-8 flex flex-col items-center mb-8">
        <h2 class="text-3xl font-bold text-primary mb-2">Welcome, Government Agency!</h2>
        <p class="text-lg text-gray-700 mb-4">Monitor, regulate, and support the agriculture sector with real-time data and analytics.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Regulatory Dashboard</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Compliance status by region</li>
            <li>Pending regulatory actions</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Analytics & Reports</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Production trends by crop</li>
            <li>Export/import statistics</li>
          </ul>
          <button class="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-700 transition text-sm">Download Reports</button>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Policy Tools</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Set minimum support prices</li>
            <li>Issue new regulations</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Stakeholder Management</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>View registered farmers</li>
            <li>Approve/deny subsidy requests</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Alerts & Notifications</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Weather alerts for regions</li>
            <li>Compliance deadlines</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function transportPageSection() {
  return `
    <section class="max-w-5xl mx-auto py-12 px-4">
      <div class="bg-white rounded-lg shadow p-8 flex flex-col items-center mb-8">
        <h2 class="text-3xl font-bold text-primary mb-2">Welcome, Transport Provider!</h2>
        <p class="text-lg text-gray-700 mb-4">Manage logistics, routes, and deliveries for agricultural produce.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Logistics Overview</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Active shipments: 3</li>
            <li>Pending pickups: 2</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Route Management</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Optimize delivery routes</li>
            <li>Assign drivers</li>
          </ul>
          <button class="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-700 transition text-sm">View Map</button>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Delivery Tracker</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Rice to Colombo – In Transit</li>
            <li>Maize to Kandy – Delivered</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Fleet Management</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Vehicle status: 5 active, 1 maintenance</li>
            <li>Schedule service</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Notifications & Support</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>New delivery requests</li>
            <li>Contact support</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function storagePageSection() {
  return `
    <section class="max-w-5xl mx-auto py-12 px-4">
      <div class="bg-white rounded-lg shadow p-8 flex flex-col items-center mb-8">
        <h2 class="text-3xl font-bold text-primary mb-2">Welcome, Storage Provider!</h2>
        <p class="text-lg text-gray-700 mb-4">Manage inventory, storage conditions, and shipments for agricultural produce.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Inventory Overview</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Rice: 10 tons</li>
            <li>Maize: 4 tons</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Storage Conditions</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Temperature: 24°C</li>
            <li>Humidity: 60%</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Shipment Management</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Next shipment: 2024-07-10</li>
            <li>Pending pickups: 1</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Quality Control</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Last inspection: Passed</li>
            <li>Next inspection: 2024-08-01</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Support & Maintenance</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Request maintenance</li>
            <li>Contact support</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function factoryPageSection() {
  return `
    <section class="max-w-5xl mx-auto py-12 px-4">
      <div class="bg-white rounded-lg shadow p-8 flex flex-col items-center mb-8">
        <h2 class="text-3xl font-bold text-primary mb-2">Welcome, Factory/Processor!</h2>
        <p class="text-lg text-gray-700 mb-4">Manage processing, production, and quality control for agricultural products.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Production Overview</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Rice flour: 2 tons processed</li>
            <li>Maize meal: 1 ton processed</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Quality Control</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Last batch: Passed</li>
            <li>Next test: 2024-07-15</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Supply Chain Integration</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Incoming: 3 shipments</li>
            <li>Outgoing: 2 shipments</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Production Planning</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Next run: 2024-07-12</li>
            <li>Raw material status: Sufficient</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Reports & Analytics</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Production efficiency: 92%</li>
            <li>Downtime: 1 hour last week</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function exporterPageSection() {
  return `
    <section class="max-w-5xl mx-auto py-12 px-4">
      <div class="bg-white rounded-lg shadow p-8 flex flex-col items-center mb-8">
        <h2 class="text-3xl font-bold text-primary mb-2">Welcome, Exporter!</h2>
        <p class="text-lg text-gray-700 mb-4">Manage export compliance, documentation, and shipments for agricultural products.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Export Compliance</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Pending certificates: 1</li>
            <li>Last audit: Passed</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Documentation</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Bill of lading: Ready</li>
            <li>Export license: Valid</li>
          </ul>
          <button class="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-700 transition text-sm">Download Docs</button>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Shipment Tracker</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Rice to Dubai – In Transit</li>
            <li>Maize to India – Delivered</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Market Access</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>New buyers: 2</li>
            <li>Market trends: Positive</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Support & Helpdesk</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Contact export advisor</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function bankPageSection() {
  return `
    <section class="max-w-5xl mx-auto py-12 px-4">
      <div class="bg-white rounded-lg shadow p-8 flex flex-col items-center mb-8">
        <h2 class="text-3xl font-bold text-primary mb-2">Welcome, Bank/Financial Institution!</h2>
        <p class="text-lg text-gray-700 mb-4">Manage loans, payments, and financial analytics for the agriculture sector.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Loan Management</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Active loans: 12</li>
            <li>Pending applications: 3</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Payments Overview</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Recent payments: Rs. 1,200,000</li>
            <li>Overdue: Rs. 50,000</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Financial Analytics</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Loan approval rate: 85%</li>
            <li>Default rate: 2%</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Customer Management</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Registered farmers: 8,000</li>
            <li>Support tickets: 5 open</li>
          </ul>
        </div>
        <div class="bg-secondary/20 rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold text-primary mb-2">Support & Helpdesk</h3>
          <ul class="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Contact loan officer</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

// Simple router
function renderPage() {
  const hash = window.location.hash || '#/';
  let content = '';
  switch (hash) {
    case '#/overview':
      content = overviewSection();
      break;
    case '#/stakeholders':
      content = stakeholdersSection();
      break;
    case '#/how-it-works':
      content = howItWorksSection();
      break;
    case '#/challenges-solutions':
      content = challengesSolutionsSection();
      break;
    case '#/timeline':
      content = timelineSection();
      break;
    case '#/financial':
      content = financialModelSection();
      break;
    case '#/login':
      content = loginPageSection();
      break;
    case '#/farmer':
      content = farmerPageSection();
      break;
    case '#/government':
      content = governmentPageSection();
      break;
    case '#/transport':
      content = transportPageSection();
      break;
    case '#/storage':
      content = storagePageSection();
      break;
    case '#/factory':
      content = factoryPageSection();
      break;
    case '#/exporter':
      content = exporterPageSection();
      break;
    case '#/bank':
      content = bankPageSection();
      break;
    case '#/':
    default:
      content = heroSection() + quickStatsSection() + keyFeaturesSection() + howItWorksVisualSection() + testimonialsSection() + ctaBannerSection() + latestNewsSection() + partnersSection();
      break;
  }
  document.getElementById('app').innerHTML = navBar() + content;
  // Add event listener for login icon
  const loginBtn = document.getElementById('user-login-btn');
  if (loginBtn) {
    loginBtn.onclick = () => { window.location.hash = '#/login'; };
  }
  // Add login form handler
  if (hash === '#/login') {
    const form = document.getElementById('login-form');
    if (form) {
      form.onsubmit = function(e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        let route = null;
        if (username === 'farmer@gmail.com' && password === '123') route = '#/farmer';
        else if (username === 'government@gmail.com' && password === '123') route = '#/government';
        else if (username === 'transport@gmail.com' && password === '123') route = '#/transport';
        else if (username === 'storage@gmail.com' && password === '123') route = '#/storage';
        else if (username === 'factory@gmail.com' && password === '123') route = '#/factory';
        else if (username === 'exporter@gmail.com' && password === '123') route = '#/exporter';
        else if (username === 'bank@gmail.com' && password === '123') route = '#/bank';
        if (route) {
          window.location.hash = route;
        } else {
          document.getElementById('login-error').classList.remove('hidden');
        }
      };
    }
  }
}

window.addEventListener('hashchange', renderPage);
window.addEventListener('DOMContentLoaded', renderPage);

function quickStatsSection() {
  return `
    <section class="max-w-5xl mx-auto py-12 px-4">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div class="bg-white rounded-lg shadow p-8">
          <div class="text-3xl font-bold text-primary mb-2">10,000+</div>
          <div class="text-gray-700">Farmers Onboarded</div>
        </div>
        <div class="bg-white rounded-lg shadow p-8">
          <div class="text-3xl font-bold text-primary mb-2">50,000+</div>
          <div class="text-gray-700">Hectares Managed</div>
        </div>
        <div class="bg-white rounded-lg shadow p-8">
          <div class="text-3xl font-bold text-primary mb-2">20%</div>
          <div class="text-gray-700">Reduction in Food Wastage</div>
        </div>
      </div>
    </section>
  `;
}

function keyFeaturesSection() {
  return `
    <section class="max-w-6xl mx-auto py-12 px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Key Features</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div class="text-xl font-semibold mb-2">AI Crop Recommendations</div>
          <p class="text-gray-600 text-center">Leverage artificial intelligence to suggest optimal crops and planting schedules for each region and season.</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div class="text-xl font-semibold mb-2">Real-time Supply Chain Tracking</div>
          <p class="text-gray-600 text-center">Monitor the movement of goods from farm to market, ensuring transparency and efficiency at every step.</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div class="text-xl font-semibold mb-2">Digital Payments</div>
          <p class="text-gray-600 text-center">Enable secure, cashless transactions for all stakeholders, reducing risk and increasing convenience.</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div class="text-xl font-semibold mb-2">Export Management</div>
          <p class="text-gray-600 text-center">Control and optimize agricultural exports with real-time data and regulatory compliance tools.</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div class="text-xl font-semibold mb-2">Market Price Analytics</div>
          <p class="text-gray-600 text-center">Access up-to-date market prices and analytics to make informed selling and buying decisions.</p>
        </div>
      </div>
    </section>
  `;
}

function howItWorksVisualSection() {
  return `
    <section class="max-w-6xl mx-auto py-12 px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">How It Works</h2>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div class="flex flex-col items-center">
          <div class="mb-3"> <!-- Registration Icon -->
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#A5D6A7"/><path d="M16 34v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="#388e3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="20" r="6" stroke="#388e3c" stroke-width="2"/></svg>
          </div>
          <div class="font-semibold text-center">Land & Crop Registration</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="mb-3"> <!-- Supply Chain Icon -->
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#A5D6A7"/><path d="M16 32h16M16 24h16M16 16h16" stroke="#388e3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="font-semibold text-center">Supply Chain Optimization</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="mb-3"> <!-- Pricing Icon -->
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#A5D6A7"/><path d="M24 16v16M16 24h16" stroke="#388e3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="font-semibold text-center">Market Pricing & Transactions</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="mb-3"> <!-- Export Icon -->
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#A5D6A7"/><path d="M24 32V16M24 16l-6 6M24 16l6 6" stroke="#388e3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="font-semibold text-center">Value Addition & Export Control</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="mb-3"> <!-- AI Icon -->
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#A5D6A7"/><circle cx="24" cy="24" r="8" stroke="#388e3c" stroke-width="2"/><path d="M24 16v-4M24 36v-4M16 24h-4M36 24h-4" stroke="#388e3c" stroke-width="2" stroke-linecap="round"/></svg>
          </div>
          <div class="font-semibold text-center">AI Learning & Automation</div>
        </div>
      </div>
    </section>
  `;
}

function testimonialsSection() {
  return `
    <section class="max-w-6xl mx-auto py-12 px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Testimonials & Endorsements</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow p-6 flex flex-col">
          <div class="text-gray-700 italic mb-4">"This system has helped me plan my crops better and get fair prices for my harvest. It's a game changer for farmers like me."</div>
          <div class="font-semibold text-primary">S. Perera</div>
          <div class="text-sm text-gray-500">Farmer, Anuradhapura</div>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col">
          <div class="text-gray-700 italic mb-4">"The platform brings much-needed transparency and efficiency to Sri Lanka's agricultural sector."</div>
          <div class="font-semibold text-primary">A. Fernando</div>
          <div class="text-sm text-gray-500">Ministry of Agriculture</div>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col">
          <div class="text-gray-700 italic mb-4">"A model for digital transformation in agriculture. The data-driven approach benefits all stakeholders."</div>
          <div class="font-semibold text-primary">Dr. R. Silva</div>
          <div class="text-sm text-gray-500">AgriTech Industry Expert</div>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col">
          <div class="text-gray-700 italic mb-4">"We are proud to support this initiative, which sets a new standard for sustainable agriculture in the region."</div>
          <div class="font-semibold text-primary">J. Smith</div>
          <div class="text-sm text-gray-500">UN Food & Agriculture Organization</div>
        </div>
      </div>
    </section>
  `;
}

function ctaBannerSection() {
  return `
    <section class="w-full bg-primary text-white py-12 px-4 mt-8">
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 class="text-2xl md:text-3xl font-bold mb-2">Join the Digital Agriculture Revolution</h2>
        <p class="mb-4 text-lg">Be part of a smarter, fairer, and more sustainable future for Sri Lanka's agriculture sector.</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="#" class="px-6 py-3 bg-white text-primary font-semibold rounded shadow hover:bg-secondary hover:text-primary transition">Register Interest</a>
          <a href="#" class="px-6 py-3 bg-secondary text-primary font-semibold rounded shadow hover:bg-white hover:text-primary transition">Subscribe for Updates</a>
          <a href="#" class="px-6 py-3 bg-white text-primary font-semibold rounded shadow hover:bg-secondary hover:text-primary transition">Download Brochure</a>
          <a href="#" class="px-6 py-3 bg-secondary text-primary font-semibold rounded shadow hover:bg-white hover:text-primary transition">Contact for Partnership</a>
        </div>
      </div>
    </section>
  `;
}

function latestNewsSection() {
  return `
    <section class="max-w-5xl mx-auto py-12 px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Latest News & Updates</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow p-6 flex flex-col">
          <div class="text-xs text-gray-400 mb-2">2024-06-01</div>
          <div class="font-semibold text-lg mb-2">National Pilot Launch</div>
          <div class="text-gray-600">The Agriculture Regulation & Monitoring System launches its national pilot, onboarding 2,000+ farmers in three provinces.</div>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col">
          <div class="text-xs text-gray-400 mb-2">2024-05-15</div>
          <div class="font-semibold text-lg mb-2">Partnership with UN FAO</div>
          <div class="text-gray-600">Official partnership announced with the UN Food & Agriculture Organization to support sustainable agriculture initiatives.</div>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col">
          <div class="text-xs text-gray-400 mb-2">2024-04-20</div>
          <div class="font-semibold text-lg mb-2">AI Module Update</div>
          <div class="text-gray-600">Major update to the AI crop recommendation engine, now supporting 10 new crop types and regional weather data integration.</div>
        </div>
      </div>
    </section>
  `;
}

function partnersSection() {
  return `
    <section class="max-w-5xl mx-auto py-12 px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Partners & Supporters</h2>
      <div class="flex flex-wrap justify-center items-center gap-8">
        <div class="bg-white rounded-lg shadow p-4 flex items-center justify-center w-40 h-24">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Emblem_of_Sri_Lanka.svg" alt="Ministry of Agriculture" class="h-12 object-contain mx-auto" />
        </div>
        <div class="bg-white rounded-lg shadow p-4 flex items-center justify-center w-40 h-24">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/FAO_logo.svg" alt="UN FAO" class="h-12 object-contain mx-auto" />
        </div>
        <div class="bg-white rounded-lg shadow p-4 flex items-center justify-center w-40 h-24">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/World_Bank_logo.svg" alt="World Bank" class="h-12 object-contain mx-auto" />
        </div>
        <div class="bg-white rounded-lg shadow p-4 flex items-center justify-center w-40 h-24">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Microsoft_logo_%282012%29.svg" alt="Microsoft" class="h-12 object-contain mx-auto" />
        </div>
        <div class="bg-white rounded-lg shadow p-4 flex items-center justify-center w-40 h-24">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Logo_of_the_International_Finance_Corporation.svg" alt="IFC" class="h-12 object-contain mx-auto" />
        </div>
      </div>
    </section>
  `;
}