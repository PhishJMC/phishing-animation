function highlight(elementId) {
    // Resetear estilos previos
    document.querySelectorAll(".email-box *").forEach(el => {
        if (el.style) {
            el.style.backgroundColor = "";
        }
    });

    // Resaltar elemento seleccionado
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundColor = "#fff3cd";
    }

    // Mostrar mensaje según el botón presionado
    let message = "";

    switch (elementId) {
        case "sender":
            message = "⚠️ El remitente parece falso. Observa que 'paypal-servicio.com' no es el dominio oficial de PayPal.";
            break;
        case "subject":
            message = "🚨 El asunto genera urgencia ('Tu cuenta ha sido bloqueada'). Esto es común en correos de phishing.";
            break;
        case "link":
            message = "🔍 El enlace no lleva al sitio oficial. Nunca hagas clic sin revisar el destino real.";
            break;
        case "attachment":
            message = "🛑 Se incluye un archivo ejecutable (.exe). Evita abrir este tipo de archivos si no esperabas el correo.";
            break;
        case "body":
            message = "👀 Revisa errores gramaticales o diseño poco profesional. Son señales comunes de correos falsos.";
            break;
        default:
            message = "Haz clic en un botón para aprender a identificar señales de phishing.";
    }

    document.getElementById("explanation").textContent = message;
}
