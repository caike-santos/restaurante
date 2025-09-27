function enviar(){
    const name = document.getElementById("input_nome_cli");
    const email = document.getElementById("input_email_cli");
    const telefone = document.getElementById("input_telefone_cli");
    const dataReserva = document.getElementById("input_data_reserva");
    const numPessoas = document.getElementById("input_numero_pessoas");
    const hora = document.getElementById("horas");

    // Remove mensagens anteriores
    const campos = [name, email, telefone, dataReserva, numPessoas, hora];
    campos.forEach(campo => campo.classList.remove("erro"));

    if(name.value.trim() === ""){
        name.classList.add("erro");
        name.value = "Digite seu nome completo";
        name.focus();
        return false;
    }
    if(email.value.trim() === ""){
        email.classList.add("erro");
        email.value = "Digite seu e-mail";
        email.focus();
        return false;
    }
    if(telefone.value.trim() === ""){
        telefone.classList.add("erro");
        telefone.value = "Digite seu telefone";
        telefone.focus();
        return false;
    }
    if(dataReserva.value.trim() === ""){
        dataReserva.classList.add("erro");
        dataReserva.focus();
        window.alert("Selecione a data da reserva");
        return false;
    }
    if(numPessoas.value.trim() === "" || numPessoas.value <= 0){
        numPessoas.classList.add("erro");
        numPessoas.value = "Número de pessoas";
        numPessoas.focus();
        return false;
    }
    if(hora.value.trim() === ""){
        hora.classList.add("erro");
        hora.focus();
        window.alert("Selecione um horário");
        return false;
    }
    window.alert("Reserva realizada com sucesso!");
    return true;
}
// Garante que o código só rode depois que a página carregar
document.addEventListener('DOMContentLoaded', () => {

    // IDs ATUALIZADOS para corresponder ao seu HTML
    const dataInput = document.getElementById('input_data_reserva');
    const horarioSelect = document.getElementById('horas');

    // Se não encontrar os elementos na página, não faz nada.
    if (!dataInput || !horarioSelect) {
        console.error("Não foi possível encontrar os elementos do formulário. Verifique os IDs.");
        return;
    }

    // 1. DEFINA AQUI OS HORÁRIOS DE FUNCIONAMENTO
    // Dias da semana: 0 = Domingo, 1 = Segunda, 2 = Terça, etc.
    // null significa que está fechado.
    const horariosFuncionamento = {
        0: { start: 12, end: 18 }, // Domingo: 12:00 até 17:30
        1: null,                   // Segunda: Fechado
        2: { start: 12, end: 23 }, // Terça: 12:00 até 22:30
        3: { start: 12, end: 23 }, // Quarta: 12:00 até 22:30
        4: { start: 12, end: 23 }, // Quinta: 12:00 até 22:30
        5: { start: 12, end: 23 }, // Sexta: 12:00 até 22:30
        6: { start: 12, end: 23 }  // Sábado: 12:00 até 22:30
    };

    const INTERVALO_MINUTOS = 30; // Intervalo entre os horários

    // 2. FUNÇÃO QUE ATUALIZA OS HORÁRIOS
    function atualizarHorariosDisponiveis() {
        horarioSelect.innerHTML = ''; // Limpa os horários antigos
        const dataSelecionada = dataInput.value;

        if (!dataSelecionada) {
            horarioSelect.innerHTML = '<option value="">Primeiro, escolha uma data</option>';
            horarioSelect.disabled = true;
            return;
        }

        const diaDaSemana = new Date(dataSelecionada + 'T00:00:00').getDay();
        const horariosDoDia = horariosFuncionamento[diaDaSemana];

        horarioSelect.disabled = false;

        if (horariosDoDia === null) {
            // Dia fechado
            horarioSelect.innerHTML = '<option value="">Fechado neste dia</option>';
            horarioSelect.disabled = true;
        } else {
            // Dia aberto
            horarioSelect.innerHTML = '<option value="">Escolha um horário</option>';
            
            for (let hora = horariosDoDia.start; hora < horariosDoDia.end; hora++) {
                for (let minuto = 0; minuto < 60; minuto += INTERVALO_MINUTOS) {
                    const horaFormatada = String(hora).padStart(2, '0');
                    const minutoFormatado = String(minuto).padStart(2, '0');
                    const horario = `${horaFormatada}:${minutoFormatado}`;

                    const option = document.createElement('option');
                    option.value = horario;
                    option.textContent = horario;
                    horarioSelect.appendChild(option);
                }
            }
        }
    }

    // 3. ADICIONA O "OUVINTE" PARA MUDANÇAS NA DATA
    dataInput.addEventListener('change', atualizarHorariosDisponiveis);

    // Inicializa o campo de horário desabilitado
    atualizarHorariosDisponiveis();
});

