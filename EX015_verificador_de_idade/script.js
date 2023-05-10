function verificar() {
    var data = new Date();
    var anoatual = data.getFullYear();
    var Fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (Fano.value.length == 0 || Fano.value > anoatual || Fano.value <= 1912 ) {
        alert('[EERO] Verifique os dados e tente novamente!');
    } else {
        var Fsex = document.getElementsByName('radsex');
        var idade = anoatual - Number(Fano.value);
        var gender = 'undefined'
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (Fsex[0].checked) {
            gender = 'homem'
            if (idade >= 0 && idade < 10) { /* Criança */
                img.setAttribute('src', 'bebehomem.png');  
            } else if (idade >= 10 && idade < 20) { /* Adolescente */
                img.setAttribute('src', 'adolescentehomem.png');
            } else if (idade >= 20 && idade < 65) { /* Adulto */
                img.setAttribute('src', 'adultohomem.png');
            } else if (idade >= 65) { /* Idoso */
                img.setAttribute('src', 'idosohomem.png');
            }
        } else if (Fsex[1].checked) {
            gender = 'mulher'
            if (idade >= 0 && idade < 10) { /* Criança */
                img.setAttribute('src', 'bebemulher.png');
            } else if (idade >= 10 && idade < 20) { /* Adolescente */
                img.setAttribute('src', 'adolescentemulher.png');
            } else if (idade >= 20 && idade < 65) { /* Adulto */
                img.setAttribute('src', 'adultamulher.png');
            } else if (idade >= 65) { /* Idoso */
                img.setAttribute('src', 'idosamulher.png');
            }
        }
        if (gender == 'homem') {
            res.innerHTML = `Você é um ${gender} com ${idade} anos.`
        } else {
            res.innerHTML = `Você é uma ${gender} com ${idade} anos.`
        }
        
        res.style.textAlign = 'center';
        res.appendChild(img);

    }
}