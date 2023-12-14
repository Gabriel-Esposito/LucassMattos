function animar(){
    const btn = document.getElementById("btn-menu")
    btn.classList.toggle('ativar')
    menu()
}

let abrir = false
function menu(){
    let links = document.getElementById('links-menu')
    if (abrir == false){
        links.style.display = 'flex'
        abrir = true
    }else if (abrir == true){
        links.style.display = 'none'
        abrir = false
    }
}

