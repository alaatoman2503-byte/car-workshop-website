const showRepairBtn = document.getElementById("showRepair");
const showSpecialBtn = document.getElementById("showSpecial");

const repairServices = document.getElementById("repairServices");
const specialServices = document.getElementById("specialServices");

if (showRepairBtn && showSpecialBtn) {

    showRepairBtn.addEventListener("click", () => {
        repairServices.style.display = "block";
        specialServices.style.display = "none";
    });

    showSpecialBtn.addEventListener("click", () => {
        specialServices.style.display = "block";
        repairServices.style.display = "none";
    });

}