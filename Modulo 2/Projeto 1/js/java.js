
let img = ['https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/1/7/2/6/1726461f28caf13e781f94b68f8dd790.jpg', 'https://m.media-amazon.com/images/I/71Hjo-ThqNL._AC_SX466_.jpg','https://rihappy.vtexassets.com/arquivos/ids/410804/playset-e-boneca-barbie-maquina-de-macarrao-mattel-GHK43_Detalhe1.jpg?v=637165066322030000', 'https://rihappy.vtexassets.com/arquivos/ids/388020/Mattel---BB-EXPL-E-DESC-VIAJEIRA-FWV25_Frente.jpg?v=636971545227900000']
let texto = ['Nome:Barbie Situação:Normal', 'Nome: Barbie Veterinária Situação: Veterinária', 'Nome: Barbie Cosinheira Situação: Cosinheira', 'Nome: Barbie Exploradora Situação: Exploradora']

const imge = document.querySelector('img')
let text = document.querySelector('ul')
let button = document.querySelector('button')

console.log(text)

// console.log(button)

// img.src = 'https://m.media-amazon.com/images/I/71Hjo-ThqNL._AC_SX466_.jpg'

function www() {
    let index = Math.floor(4 * Math.random())
    imge.src = img[index]
    text.innerHTML = texto[index]
}