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

