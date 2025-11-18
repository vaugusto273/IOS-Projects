function adicionarTarefa(){

    const input = document.getElementById("inputAddTask");
    const inputValue = input.value.trim()
    const listElement = document.createElement("li");
    const insertTextOnListElement = document.createTextNode(input.value);
    const
     paraText = document.getElementById("msgresponse")

    if (inputValue == ""){
        paraText.textContent = "";
        input.value = "";
        return alert("Caixa de entrada vazia")
    }
    else{
        listElement.appendChild(insertTextOnListElement)
    document.getElementById("tasklist").appendChild(listElement);
        input.value = ""
        paraText.textContent = "Tarefa adicionada"
    }
}