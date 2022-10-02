import { initInbox } from "./components/inbox/inbox";
import { initSent } from "./components/sent/sent";
const container = document.querySelector(".content-conteiner");

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}

function handleRoute(route) {
  const routes = [
    {
      path: /\/inbox/,
      handler: () => initInbox(container),
    },
    {
      path: /\/sent/,
      handler: () => initSent(container),
    },
  ];
  for (const r of routes) {
    if (r.path.test(route)) {
      if (container?.firstChild) {
        container.removeChild(container.firstChild);
      }
      r.handler();
    }
  }
}

function main() {
  const inboxButton = document.getElementById("inbox-button");
  const sentButton = document.getElementById("sent-button");

  inboxButton?.addEventListener("click", () => goTo("/inbox"));
  sentButton?.addEventListener("click", () => goTo("/sent"));
}

main();
