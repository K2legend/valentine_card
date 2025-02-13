document.addEventListener("DOMContentLoaded", () => {
  const loveMessages = [
    "You're the peanut butter to my jelly! 🥰",
    "Every love story is beautiful, but ours is my favorite. 💖",
    "You're the reason I smile every day! 😊",
    "Love you to the moon and back! 🌙✨",
    "You make my heart skip a beat! 💓",
    "With you, every moment is special. 💕",
    "I’d press CTRL+S on us forever. 💾💘",
  ];

  const generateBtn = document.getElementById("generate-btn");
  const loveMessageDisplay = document.getElementById("love-message");

  generateBtn.addEventListener("click", () => {
    const randomMessage =
      loveMessages[Math.floor(Math.random() * loveMessages.length)];
    loveMessageDisplay.textContent = randomMessage;
  });

  const downloadBtn = document.getElementById("download-btn");
  const customMessage = document.getElementById("custom-message");

  downloadBtn.addEventListener("click", () => {
    const text = customMessage.value || "Happy Valentine's Day! 💖";
    createCard(text);
  });

  function createCard(message) {
    const cardCanvas = document.createElement("canvas");
    const ctx = cardCanvas.getContext("2d");

    cardCanvas.width = 600;
    cardCanvas.height = 400;

    const bg = new Image();
    bg.src = "images/23191.jpg";

    bg.onload = function () {
      ctx.drawImage(bg, 0, 0, 600, 400);
      ctx.fillStyle = "#ff0000";
      ctx.font = "24px Arial";
      ctx.fillText(message, 50, 200);

      const link = document.createElement("a");
      link.download = "valentine_card.png";
      link.href = cardCanvas.toDataURL();
      link.click();
    };
  }
});
