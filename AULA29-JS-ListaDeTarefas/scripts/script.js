function adicionarTarefa(){

    let input = document.getElementById("inputAddTask");
    const listElement = document.createElement("li");
    const insertTextOnListElement = document.createTextNode(input.value);
    let paraText = document.getElementById("msgresponse")

    if (input.value == ""){
        paraText.textContent = ""
        return alert("Caixa de entrada vazia")
    }
    else{
        listElement.appendChild(insertTextOnListElement)
    document.getElementById("tasklist").appendChild(listElement);
        input.value = ""
        paraText.textContent = "Tarefa adicionada"
    }
}