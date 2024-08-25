document.addEventListener("DOMContentLoaded", function () {
    const cookieModal = document.getElementById("cookieModal");
    const acceptBtn = document.getElementById("acceptBtn");
    const resetBtn = document.getElementById("resetBtn");

    // Überprüfen, ob der Nutzer bereits Cookies akzeptiert hat
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieModal.style.display = "flex";
        console.log(("schon fertig"))
    }

    acceptBtn.addEventListener("click", function () {
        // Einstellung speichern und Modal ausblenden
        localStorage.setItem("cookiesAccepted", "true");
        console.log("Accepted")
        cookieModal.style.display = "none";
    });

    resetBtn.addEventListener("click", function () {
        // Einstellung löschen und Seite neu laden
        localStorage.removeItem("cookiesAccepted");
        alert("Die Cookie-Einstellung wurde zurückgesetzt.");
        window.location.reload();
    });
});
