/*
    Função responsável por fazer scroll baseado no ID do elemento escolhido
*/
function ScrollTo(id) {
    document.getElementById(id).scrollIntoView();
}

/*
    Função responsável por adicionar a class 'Open' no Menu Lateral
    OBS: Quando estiver em ecrã de menor dimensão
*/
function OpenMenu() {
    document.getElementById('menu').classList.add('open');
}

/*
    Função responsável por remover a class 'Open' no Menu Lateral
*/
function CloseMenu() {
    document.getElementById('menu').classList.remove('open');
}

/*
    Função responsável por adicionar a Data atual ao input do tipo Date
*/
function GetDate() {
    document.getElementById("data").valueAsDate = new Date();
}