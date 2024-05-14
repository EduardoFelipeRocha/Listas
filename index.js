const lista = []

function enviar() {
    let texto = document.getElementById("texto");
    if (texto.value) {
        let cubo = document.getElementById("cubo");
        lista.push(`${texto.value}`)
        cubo.innerText = lista.join("\n")
        texto.value = ""
    } else {
        alert("Você deve adicionar um texto.")
    }

}
function remover() {
    lista.pop()
    let cubo = document.getElementById("cubo");
    cubo.innerText = lista.join("\n")
}
function imprimir(){
    window.print();
}