const list = document.getElementById("infi-list");

let count = 1;

function addItems(number) {
    for (let i = 0; i < number; i++) {
        const li = document.createElement("li");
        li.textContent = `List Item ${count++}`;
        list.appendChild(li);
    }
}

// Add 10 items initially
addItems(10);
window.addEventListener("scroll", () => {
    const lastItem = list.lastElementChild;

    if (lastItem) {
        const rect = lastItem.getBoundingClientRect();

        if (rect.bottom <= window.innerHeight) {
            addItems(2);
        }
    }
});