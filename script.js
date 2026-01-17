const startBtn = document.getElementById("startBtn");
const homeScreen = document.querySelector(".home-screen");
const storyScreen = document.querySelector(".story-screen");

startBtn.addEventListener("click", function () {
    homeScreen.classList.add("hidden");
    storyScreen.classList.remove("hidden");
});

const storyCards = document.querySelectorAll(".story-card");
const readerScreen = document.querySelector(".reader-screen");
const readerTitle = document.getElementById("readerTitle");
const storyContent = document.getElementById("storyContent");
const homeBtn = document.getElementById("homeBtn");

let currentStory = 0;

storyCards.forEach((card, index) => {
    card.addEventListener("click", () => {
        currentStory = index;

        storyScreen.classList.add("hidden");
        readerScreen.classList.remove("hidden");

        showStory();
    });
});

function showStory() {
    const story = stories[currentStory];

    readerTitle.textContent = story.title;
    storyContent.innerHTML = "";

    story.content.forEach(item => {
        if (item.type === "text") {
            const p = document.createElement("p");
            p.textContent = item.value;
            storyContent.appendChild(p);
        }

        if (item.type === "image") {
            const img = document.createElement("img");
            img.src = item.src;
            storyContent.appendChild(img);
        }
    });
}

homeBtn.addEventListener("click", () => {
    readerScreen.classList.add("hidden");
    storyScreen.classList.remove("hidden");
});

