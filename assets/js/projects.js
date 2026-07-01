const projectData = {
  etmaen: {
    title: 'Etmaen — Home Healthcare Application',
    tags: ['UI/UX Design','Healthcare Service','Graduation Project'],
    body: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
        <div>
          <p style="color:var(--muted);font-size:.875rem;line-height:1.7;margin-bottom:1rem">
            A dual mobile application connecting patients with licensed home healthcare providers.
            Patients can browse providers, compare prices, and book services like nursing and physiotherapy.
            Providers manage requests in real time through a dedicated dashboard.
          </p>
          <p style="color:var(--muted);font-size:.875rem;line-height:1.7">
            Built using SDLC methodology. Tech stack: Android Studio, Kotlin, Java, XML.
            Supervised by Prof. Mahdi Al-Qahtani, King Saud University.
          </p>
          <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:1rem">
            <a href="https://www.figma.com/proto/wBH3HjkrZqHuNHiXcqz8UV?node-id=1-2&starting-point-node-id=1:2&locale=en" target="_blank" class="action-btn primary" style="display:inline-flex;align-items:center;gap:.3em;padding:.4rem .85rem;border-radius:6px;font-size:.78rem;font-weight:600;text-decoration:none;background:var(--blue);color:#fff;border:none">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
              View Figma Prototype
            </a>
          </div>
        </div>
        <img src="assets/projects/etmaen_poster.png" class="modal-img" style="border-radius:8px;width:100%" alt="Etmaen Poster">
      </div>
      <div style="position:relative;padding-bottom:56.25%;border-radius:8px;overflow:hidden;background:#000">
        <video controls style="position:absolute;inset:0;width:100%;height:100%">
          <source src="assets/projects/drug_interaction.mp4" type="video/mp4">
          Your browser does not support video.
        </video>
      </div>
      <p style="color:var(--muted);font-size:.73rem;margin-top:.4rem">Drug Interaction System demo</p>
    `
  },
  drug: {
    title: 'Drug Interaction Detection System',
    tags: ['Healthcare IT','Medication Safety','HL7'],
    body: `
      <p style="color:var(--muted);font-size:.875rem;line-height:1.7;margin-bottom:1rem">
        A healthcare IT system designed to improve medication safety through automated drug-drug interaction detection.
        Identifies potential interactions between previously dispensed medications and newly selected drugs.
        Future integration with Wasfaty and dosage validation was considered.
      </p>
      <div style="position:relative;padding-bottom:56.25%;border-radius:8px;overflow:hidden;background:#000">
        <video controls style="position:absolute;inset:0;width:100%;height:100%">
          <source src="assets/projects/drug_interaction.mp4" type="video/mp4">
          Your browser does not support video.
        </video>
      </div>
    `
  },
  ecg: {
    title: 'ECG Measurement System — Arduino',
    tags: ['Arduino','Signal Processing','Biomedical'],
    body: `
      <p style="color:var(--muted);font-size:.875rem;line-height:1.7">
        Design and implementation of an ECG signal acquisition system using Arduino and biomedical sensors.
        Enables real-time signal visualization and preliminary analysis. Demonstrates hands-on embedded systems
        skills applied directly to clinical monitoring use cases.
      </p>
    `
  },
  ambu: {
    title: 'Ambu Bag Redesign — 3D Modeling',
    tags: ['3D Modeling','Medical Device Design','Ergonomics'],
    body: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
        <img src="assets/projects/ambu_bag.jpg" class="modal-img" style="width:100%;border-radius:8px;object-fit:cover" alt="Ambu Bag 3D">
        <img src="assets/projects/ambu_bag2.png" class="modal-img" style="width:100%;border-radius:8px;object-fit:cover" alt="Ambu Bag Design">
      </div>
      <p style="color:var(--muted);font-size:.875rem;line-height:1.7">
        A 3D-modeled redesign of an Ambu bag with emphasis on ergonomic improvements, better grip,
        and optimized airflow mechanics. Developed to enhance usability for emergency responders
        and clinical staff during manual ventilation scenarios.
      </p>
    `
  },
  astronaut: {
    title: 'Muscle Weakness Solution for Astronauts',
    tags: ['Wearable Tech','Rehabilitation','Conceptual'],
    body: `
      <p style="color:var(--muted);font-size:.875rem;line-height:1.7">
        A conceptual solution addressing muscle atrophy in astronauts through wearable technology and
        rehabilitation-oriented design. The system aims to preserve and monitor muscle strength during
        extended space missions and support recovery post-flight — bridging space medicine and biomedical engineering.
      </p>
    `
  },
};
