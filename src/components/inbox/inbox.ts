export function initInbox(container) {
  const div = document.createElement("div");
  div.innerHTML = `
        
            <h1 class="title">Inbox</h1>
            <div class="emails-conteiner">
            <div class="email">Primer Email</div>
            <div class="email">Segundo Email</div>
            <div class="email">Tercer Email</div>
            </div>
      
    `;
  div.classList.add("inbox-section");
  container.appendChild(div);
}
