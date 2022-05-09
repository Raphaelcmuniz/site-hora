function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var minutos = data.getMinutes()
    var hora = 18
    var ap = parseFloat(minutos.toFixed(2))
    msg.innerHTML = `Agora são ${hora}:${ap}`
    if(hora >= 0 && hora <12) {
        //bom dia
        img.src = 'foto_manhã.jpg'
        document.body.style.background = '#fcad46'
    }
    else if(hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'foto_tarde.jpg'
        document.body.style.background = '#f5a907'
    }
    else {
        //boa noite
        img.src = 'foto_noite.jpg'
        document.body.style.background = '#302e2e'
    }
}