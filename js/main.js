/* =========================================
   OPEN HOMES — JavaScript
   ========================================= */

// ─── NAV SCROLL EFFECT ───
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav && (nav.classList.toggle('scrolled', window.scrollY > 30));
});

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ─── SMOOTH SCROLL (same page nav) ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ─── MODAL (Past Work) ───
const projectData = {
  villa: {
    type: 'Luxury Residential',
    title: 'G+2 Luxury Villa',
    desc: 'A complete transformation of a ground + 2 floors residential villa in Delhi NCR — from raw structure to a bespoke luxury home with curated imports from Dubai.',
    sections: [
      {
        heading: 'Architecture & Layout',
        tags: ['Open floor plan redesign', 'South-facing maximisation', 'Vaastu-compliant layout', 'Double height living room', 'Glass & iron staircase', 'Terrace landscaping']
      },
      {
        heading: 'Flooring & Surfaces',
        tags: ['Italian marble — Calacatta Gold', 'Herringbone engineered wood (bedrooms)', 'Anti-skid stone (exterior)', 'Heated flooring (master bath)']
      },
      {
        heading: 'Woodwork & Millwork',
        tags: ['Walnut wood wall panelling', 'Custom TV unit with backlit niches', 'Floor-to-ceiling wardrobes', 'Library wall with integrated lighting', 'Lacquered kitchen cabinets']
      },
      {
        heading: 'Imported from Dubai ✦',
        tags: ['Gessi bathroom fittings', 'Porcelain floor tiles (Porcelanosa)', 'Crystal chandelier (Flos)', 'Smart home switches (Legrand Arteor)', 'Kitchen hood & appliances (Franke)', 'Motorised curtains (Silent Gliss)'],
        highlight: true
      },
      {
        heading: 'Wellness & Lifestyle',
        tags: ['Japanese soaking tub', 'Jacuzzi (master bath)', 'Steam room', 'Multipurpose gym + WFH office', 'Bar area with wine cooler', 'PS5 entertainment setup', 'Kids play area']
      },
      {
        heading: 'False Ceiling & Lighting',
        tags: ['Coffered gypsum ceiling (living)', 'Cove LED lighting', 'POP moulding details', 'Recessed spotlights throughout', 'Pendant lighting (dining + island)', 'Smart dimmer controls']
      }
    ]
  },
  flat4: {
    type: 'Premium Residential',
    title: '4-BHK Flat Redesign',
    desc: 'A 4-bedroom flat in Noida restyled with clean contemporary interiors — every room reimagined to feel open, light-filled and uniquely crafted.',
    sections: [
      {
        heading: 'Layout Changes',
        tags: ['Balcony merged into living room', 'Pooja room with acoustic backing', 'Expanded kitchen island', 'Walk-in wardrobe (master)']
      },
      {
        heading: 'Flooring',
        tags: ['Vitrified tiles — large format (living)', 'Oak engineered wood (bedrooms)', 'Terrazzo-look tiles (kitchen)']
      },
      {
        heading: 'Woodwork',
        tags: ['Fluted wood headboard panels', 'Modular wardrobes (all rooms)', 'Study unit with shelving', 'TV feature wall']
      },
      {
        heading: 'Bathrooms',
        tags: ['Rainshower heads', 'Frameless glass shower', 'Floating vanity', 'Backlit mirror', 'Half-height tile cladding + paint above']
      },
      {
        heading: 'Lifestyle Spaces',
        tags: ['Multipurpose gym corner', 'Bar unit in dining room', 'PlayStation + projector setup', 'Balcony café nook']
      }
    ]
  },
  flat3: {
    type: 'Standard Residential',
    title: '3-BHK Flat Interiors',
    desc: 'A family 3-BHK in Ghaziabad given a warm, cohesive look — thoughtful storage solutions, a practical kitchen and a children\'s room that sparks imagination.',
    sections: [
      {
        heading: 'Layout & Civil',
        tags: ['Bedroom door repositioning', 'False wall to hide utilities', 'Expanded kitchen counter']
      },
      {
        heading: 'Flooring',
        tags: ['Vitrified tiles (common areas)', 'Laminate wood flooring (bedrooms)', 'Anti-skid mosaic (bathrooms)']
      },
      {
        heading: 'Woodwork',
        tags: ['Modular wardrobes (3 rooms)', 'Wall-bed + study combo (children\'s room)', 'Kitchen shutters — matte finish', 'TV unit with storage']
      },
      {
        heading: 'Kids Room Highlights ✦',
        tags: ['Themed play area', 'Loft study nook', 'Chalkboard paint wall', 'Soft play mat inset'],
        highlight: true
      },
      {
        heading: 'Finishes',
        tags: ['Luxury emulsion paint', 'Feature wallpaper (master bedroom)', 'POP false ceiling (living room)', 'Cove lights in all rooms']
      }
    ]
  },
  flat1: {
    type: 'Compact Residential',
    title: '1-BHK Studio Transformation',
    desc: 'A compact 1-BHK studio turned into a beautifully functional space — proving that thoughtful design makes every square foot feel like home.',
    sections: [
      {
        heading: 'Space Optimisation',
        tags: ['Murphy bed with sofa conversion', 'Fold-down dining table', 'Under-stair storage', 'Mirrored walls for depth']
      },
      {
        heading: 'Flooring',
        tags: ['Chevron-pattern vinyl planks', 'Large format tiles (bathroom)']
      },
      {
        heading: 'Woodwork',
        tags: ['Full-wall wardrobe + loft shelf', 'Compact modular kitchen', 'Floating desk unit']
      },
      {
        heading: 'Highlights ✦',
        tags: ['Patterned feature tile (kitchen backsplash)', 'Exposed brick accent wall', 'Pendant lighting', 'Indoor plants + built-in planters'],
        highlight: true
      }
    ]
  }
};

function openModal(key) {
  const data = projectData[key];
  if (!data) return;

  const modal = document.getElementById('projectModal');
  const modalType = document.getElementById('modalType');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalContent = document.getElementById('modalContent');

  if (!modal) return;

  modalType.textContent = data.type;
  modalTitle.textContent = data.title;
  modalDesc.textContent = data.desc;

  modalContent.innerHTML = data.sections.map(sec => `
    <div class="modal-section">
      <h4>${sec.heading}</h4>
      <div class="modal-tags">
        ${sec.tags.map(tag => `<span class="modal-tag${sec.highlight ? ' highlight' : ''}">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('click', e => {
  const modal = document.getElementById('projectModal');
  if (e.target === modal) closeModal();
});

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── CONTACT FORM ───
function setupForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const success = form.querySelector('.form-success');

    btn.textContent = 'Sending…';
    btn.disabled = true;

    const data = new FormData(form);
    const payload = {
      name: data.get('name') || '',
      email: data.get('email') || '',
      phone: data.get('phone') || '',
      area: data.get('area') || '',
      package: data.get('package') || '',
      message: data.get('message') || '',
      timestamp: new Date().toISOString(),
      source: window.location.href
    };

    // Google Apps Script Web App URL — replace with your actual URL
    const SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

    try {
      if (SHEET_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        await fetch(SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }
      // Show success
      form.style.display = 'none';
      if (success) success.style.display = 'block';
    } catch (err) {
      btn.textContent = 'Try Again';
      btn.disabled = false;
      alert('Something went wrong. Please try again or call us directly.');
    }
  });
}

// Init both forms
setupForm('contactFormHome');
setupForm('contactFormPage');

// ─── SCROLL REVEAL ───
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(el => io.observe(el));
}
