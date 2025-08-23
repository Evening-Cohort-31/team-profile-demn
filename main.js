// Team Profile Page JavaScript
console.log("Welcome to your team profile page!");

function showFunFact(memberId) {
  const factElement = document.getElementById("fact1");
  if (factElement.style.display === "none") {
    factElement.style.display = "block";
  } else {
    factElement.style.display = "none";
  }
}

function showFunFact(memberId) {
  let factElement;
  if (memberId === 'member2') {
    factElement = document.getElementById('fact2');
  } else {
    factElement = document.getElementById('fact1');
  }

  if (factElement.style.display === 'none') {
    factElement.style.display = 'block';
  } else {
    factElement.style.display = 'none';
  }
}

// Fun extra: Page load animation (already provided for you!)
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".member-card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});
