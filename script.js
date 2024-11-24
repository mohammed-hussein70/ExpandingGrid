let box = document.querySelectorAll(".row .col");
let div = document.querySelector(".cont");

box.forEach((item) => {
  item.addEventListener("click", function () {
    // remove content from div
    div.innerHTML = " ";
    // create element h1
    let h1 = document.createElement("h1");
    // Add text to Element
    h1.textContent = item.textContent;
    // append Element to Div
    div.appendChild(h1);

    div.style.backgroundColor = item.style.backgroundColor;

    //  create Element  p
    let p = document.createElement("p");
    //  Add text to element
    p.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora error illo temporibus, explicabo, officiis incidunt dolor, culpa sit saepe numquam quas repellendus reiciendis. Animi fugit possimus quo ipsum tempora.";
    //   append Element to Div
    div.appendChild(p);

    //   create  Element span
    let close = document.createElement("span");
    // Add icon
    close.innerHTML = "&times";
    // append Element to Div
    div.appendChild(close);

    //  add Event to icon close
    close.addEventListener("click", () => {
      div.innerHTML = "";
      div.style.backgroundColor = "";
    });
  });
});
