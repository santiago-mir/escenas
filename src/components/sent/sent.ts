export function initSent(container) {
  const div = document.createElement("div");
  div.innerHTML = `
          
              <h1 class="title">Sent</h1>
              <div class="emails-conteiner">
              <div class="email">Primer Email</div>
              <div class="email">Segundo Email</div>
              <div class="email">Tercer Email</div>
              </div>
        
      `;
  div.classList.add("sent-section");
  container.appendChild(div);
}
