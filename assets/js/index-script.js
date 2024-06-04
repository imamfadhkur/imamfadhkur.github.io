document.addEventListener("mousemove", (e) => {
  const hexagon = document.createElement("div");
  hexagon.classList.add("hexagon");
  hexagon.style.left = `${e.clientX}px`;
  hexagon.style.top = `${e.clientY}px`;

  document.body.appendChild(hexagon);

  // Hapus elemen setelah animasi selesai
  hexagon.addEventListener("animationend", () => {
    document.body.removeChild(hexagon);
  });
});
