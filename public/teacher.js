const select = document.getElementById("floor");
const roomLabels = document.querySelectorAll(".room-label");

select.addEventListener("change", () => {
    const selectedValue = parseInt(select.value); // 1, 2, 3
    if (!selectedValue) return;

    const baseFloor = selectedValue + 1; // 2층, 3층, 4층 → 호실 번호: 200, 300, 400대
    roomLabels.forEach((label, index) => {
        const roomNumber = baseFloor * 100 + index + 1; // ex) 201~215
        label.textContent = `${roomNumber}호`;
    });
});