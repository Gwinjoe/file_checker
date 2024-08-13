const filesRaw = {
  html: Math.round(Math.random() * 10000),
  css: Math.round(Math.random() * 10000),
  js: Math.round(Math.random() * 10000),
  react: Math.round(Math.random() * 10000),
  tailwind: Math.round(Math.random() * 10000),
};

const randomColors = [
  "teal",
  "blue",
  "gold",
  "slategray",
  "purple",
  "indigo",
  "violet",
  "red",
  "pink",
];

function getRandomColor(colors) {
  const randomIndex = Math.round(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(getRandomColor(randomColors));

const container = document.querySelector(".container");
const filesvalue = document.querySelector(".files-value");
const reminderContainer = document.querySelector(".reminder-container");

function graph(files) {
  const filesObj = Object.keys(files);
  const totalfilesSize = filesObj.reduce((acc, val) => {
    return acc + files[val];
  }, 0);
  let html = "";
  let filehtml = "";
  filesObj.map((file, index, arr) => {
    const randomColor = getRandomColor(randomColors);

    html += `<div class="files ${file}" style="background-color: ${
      randomColors[index]
    }; width:${
      (files[file] / totalfilesSize) * 100
    }%; border-right: 0.5px solid slategray"></div>`;

    filehtml += `<div style="display: flex; gap: 0.5rem; align-items: center; font-size: 1.2rem; transform: translateY(1.2rem);"><span>${
      file[0].toUpperCase() + file.slice(1)
    }</span> - <div style="background-color: ${
      randomColors[index]
    }; width: 0.9rem; height: 0.9rem; border: 0.5px solid white; border-radius: 50%; display: inline-block"></div><span>${Math.round(
      (files[file] / totalfilesSize) * 100
    )}%</span></div>`;
  });
  container.innerHTML = html;
  filesvalue.innerHTML = filehtml;
}

graph(filesRaw);

setTimeout(() => {
  reminderContainer.classList = "reminder-container";
}, 2000);

document.body.addEventListener("click", () => {
  reminderContainer.classList = "reminder-container hidden";
});
