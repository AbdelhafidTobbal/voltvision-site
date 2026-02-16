// VoltVision landing interactions (no dependencies)

const navbtn = document.getElementById('navbtn');
const mobilenav = document.getElementById('mobilenav');

navbtn?.addEventListener('click', () => {
  const open = mobilenav.classList.toggle('is-open');
  navbtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  mobilenav.setAttribute('aria-hidden', open ? 'false' : 'true');
});

mobilenav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobilenav.classList.remove('is-open');
    navbtn.setAttribute('aria-expanded', 'false');
    mobilenav.setAttribute('aria-hidden', 'true');
  });
});

// App tabs (swap phone screenshot)
const phoneImg = document.getElementById('phoneImg');
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const src = btn.getAttribute('data-img');
    if (src && phoneImg) phoneImg.src = src;
  });
});

// Image modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalCap = document.getElementById('modalCap');

function openModal(src, caption, alt){
  if(!modal || !modalImg) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden','false');
  modalImg.src = src;
  modalImg.alt = alt || caption || 'Preview image';
  if(modalCap) modalCap.textContent = caption || '';
}

function closeModal(){
  if(!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden','true');
  if(modalImg) modalImg.src = '';
}

document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-modal');
    const cap = btn.getAttribute('data-caption') || '';
    openModal(src, cap, cap);
  });
});

modal?.addEventListener('click', (e) => {
  if(e.target && e.target.getAttribute && e.target.getAttribute('data-close') === '1'){
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
});

// Fake send
document.getElementById('fakeSend')?.addEventListener('click', () => {
  alert('Thanks! This demo form is static. Connect a form backend (Formspree/Netlify) to receive messages.');
});
