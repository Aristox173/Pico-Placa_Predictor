import "@testing-library/jest-dom";

if (!document.getElementById("root")) {
  const div = document.createElement("div");
  div.id = "root";
  document.body.appendChild(div);
}
