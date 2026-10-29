
document.addEventListener("DOMContentLoaded", function () {
    // Fecha automaticamente os avisos após 5 segundos.
    const alerts = document.querySelectorAll(".alert-auto-dismiss");

    alerts.forEach(function (alertElement) {
        window.setTimeout(function () {
            if (alertElement && alertElement.isConnected) {
                alertElement.remove();
            }
        }, 5000);
    });

    // Confirmação antes de uma ação de exclusão.
    const deleteForms = document.querySelectorAll("[data-confirm]");

    deleteForms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            const message =
                form.getAttribute("data-confirm") ||
                "Deseja realmente continuar?";

            if (!window.confirm(message)) {
                event.preventDefault();
            }
        });
    });
});
