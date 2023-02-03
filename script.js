function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 22//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
            img.src = 'fotomanha.png'
            document.body.style.background = '#fbca91'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
            img.scr = 'fototarde.png'
            document.body.style.background = '#faae6a'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#d4a6bf'
    }
}
