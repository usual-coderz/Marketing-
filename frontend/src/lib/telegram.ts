export function telegramLogin() {
  console.log("Telegram Login");
}

export function openTelegram(username: string) {
  window.open(`https://t.me/${username}`);
}