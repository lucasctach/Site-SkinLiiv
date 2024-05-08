var input = document.getElementById("id-datetime");

    // Adiciona um ouvinte de evento para detectar mudanças no valor do input
    input.addEventListener("change", function() {
        // Divide o valor do input em horas e minutos
        var valueParts = this.value.split(":");
        var hours = parseInt(valueParts[0], 10);
        var minutes = parseInt(valueParts[1], 10);

        // Arredonda os minutos para o incremento mais próximo de 30 minutos
        var roundedMinutes = Math.round(minutes / 30) * 30;

        // Se os minutos forem iguais a 60, ajusta para 0 e incrementa uma hora
        if (roundedMinutes === 60) {
            hours++;
            roundedMinutes = 0;
        }

        // Formata os minutos para sempre exibirem dois dígitos (00, 15, 30, 45)
        var formattedMinutes = roundedMinutes < 10 ? "0" + roundedMinutes : roundedMinutes;

        // Atualiza o valor do input com os minutos arredondados
        this.value = hours.toString().padStart(2, "0") + ":" + formattedMinutes;
    })