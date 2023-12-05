// classe que vai conter a logica dos dados
//como os dados serao estruturados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
                login: 'maykbrito',
                name: "Mayk Brito",
                public_repos: '76',
                followers: '120000'
            }, 
            {
                login: 'diego3g',
                name: "Diego Fernandes",
                public_repos: '86',
                followers: '140000'
            }
        ]

    }
}


//classe que vai criar a visualizacao e eventos do HTML
export class FavoritesView extends Favorites {
   constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
   } 

   update() {
    this.removeAllTr()

    entries.forEach( user => {
       const row = this.createRow()

       row.querySelector('.user img').src = `https://github.com/${user.login}.png`
       row.querySelector('.user')

       this.tbody.append(row)
    })


}

createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    
    <td class="user">
        <img src="https://github.com/GBenini.png" alt="Imagem de Guilherme Benini">
        <a href="https://github.com/GBenini" target="_blank">
        <p>Guilherme Benini</p>
        <span>GBenini</span>
        </a>
    </td>
    <td class="repositories">
        100
    </td>
    <td class="followers">
        10000
    </td>
    <td>
        <button class="remove">&times;</button>
    </td>
   
    `

    return tr
}

removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
        tr.remove()
    })
}

}