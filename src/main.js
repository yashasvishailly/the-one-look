import './style.css';

document.querySelector('#app').innerHTML = `
<header class="site-header"><a class="wordmark" href="#top">yashasvi<span>.shailly</span></a><nav class="desktop-nav"><a href="https://yashasvishailly.com/products/">Products</a><a href="https://yashasvishailly.com/media/">Media</a><a href="https://yashasvishailly.com/testimonials/">Testimonials</a><a href="https://yashasvishailly.com/about/">About</a><details><summary>More</summary><div class="more-menu"><a href="https://yashasvishailly.com/work/">How I work</a><a href="https://yashasvishailly.com/projects/">Projects</a><a href="https://yashasvishailly.com/blog/">Writing</a></div></details></nav><a class="hello-link" href="mailto:hello@yashasvishailly.com">Say hello <span>↗</span></a></header>
<main id="top"><section class="hero"><div class="eyebrow"><span class="dot"></span> Interface preview</div><h1>The One Look</h1><p class="intro">One look shows what a first time customer trusts, what they miss, and what makes them leave before they ever meet you.</p><form id="look-form" class="look-form"><p class="demo-note">This is an interactive design preview. It shows a fixed sample score and sample content; no website is fetched and no email is collected.</p><p><a class="text-link" href="https://yashasvishailly.com/one-look/">Open the live One Look tool →</a></p><button class="primary-button" type="submit">Show sample result <span>↗</span></button><p class="form-note" id="form-note" role="status"></p></form></section>
<section class="results" id="results" aria-live="polite"><div class="score-wrap"><div class="score" id="score">0<span>/100</span></div><p>Sample score</p></div><div class="signals"><article><span class="signal-number">01</span><h2>What a first time visitor trusts</h2><p>What makes the business feel credible before a new visitor takes a risk.</p></article><article><span class="signal-number">02</span><h2>What they miss</h2><p>The value, proof, or next step that disappears on a fast first read.</p></article><article><span class="signal-number">03</span><h2>What makes them leave</h2><p>The quiet friction that stops momentum before a conversation begins.</p></article><article><span class="signal-number">04</span><h2>Newest public signal</h2><p>The most recent visible signal a first-time visitor can find.</p></article><article><span class="signal-number">05</span><h2>What is costing you the most</h2><p>The single outside-read issue with the greatest effect on momentum.</p></article></div></section>
<section class="after-read" id="about"><p class="eyebrow">The outside read</p><h2>Want a read of your actual website?</h2><p>This preview shows the result layout. Use the live tool for a read of your public website.</p><a class="text-link" href="https://yashasvishailly.com/one-look/">Open The One Look <span>→</span></a></section><section class="privacy-note" id="privacy"><h2>Preview privacy</h2><p>This prototype does not submit or store website addresses or email addresses. Its score is fixed sample data. Fonts load from Google Fonts. The live tool has its own data handling.</p></section></main>
<footer><a href="#top" class="wordmark">yashasvi<span>.shailly</span></a><p>This repository is a frontend design preview of The One Look. Its sample score is not an assessment of a website.</p><a href="#privacy">Privacy</a></footer>`;

const form = document.querySelector('#look-form'); const note = document.querySelector('#form-note'); const results = document.querySelector('#results'); const score = document.querySelector('#score');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  if (button.disabled) return;
  button.disabled = true;
  note.textContent = 'Showing a sample result…';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finish = () => {
    score.innerHTML = '80<span>/100</span>';
    note.textContent = 'Sample result shown. No website was fetched.';
    button.disabled = false;
    results.classList.add('is-ready');
    results.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  };
  if (reduced) { finish(); return; }
  let value = 0;
  const timer = setInterval(() => {
    value += 5; score.innerHTML = `${value}<span>/100</span>`;
    if (value >= 80) { clearInterval(timer); finish(); }
  }, 25);
});
