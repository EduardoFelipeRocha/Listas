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
function imprimir() {
    let conteudo = document.getElementById("cubo").innerHTML;
    let janelaImprimir = window.open('', '', 'width=600,height=600');
    janelaImprimir.document.write('<html><head><title>Imprimir</title></head><body>');
    janelaImprimir.document.write(conteudo);
    janelaImprimir.document.write('</body></html>');
    janelaImprimir.document.close();
    janelaImprimir.print();
}
