const dancingEmojiLady = "\u{1F483}";
const FLIPPED_dancingEmojiLady = "\u{1F483}\u{FE0F}";

function dancingLady() {
  setInterval(() => {
    console.log("\u{1B}[2J"); // clear the console
    console.log(dancingEmojiLady);
    setTimeout(() => {
      console.log(FLIPPED_dancingEmojiLady);
    }, 500)
  }, 1000);
}

// Call the function to start displaying the dancing emoji
dancingLady();