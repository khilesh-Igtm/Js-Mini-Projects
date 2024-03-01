const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea.classList.add("active");
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    dropArea.classList.remove("active");
    const files = event.dataTransfer.files;
    handleFiles(files);
});

fileInput.addEventListener("change", () => {
    const files = fileInput.files;
    handleFiles(files);
});

function handleFiles(files) {
    fileList.innerHTML = "";
    for (const file of files) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.width = 100;
        img.height = 100;
        li.appendChild(img);
        const span = document.createElement("span");
        span.textContent = file.name;
        li.appendChild(span);
        fileList.appendChild(li);
    }
}
