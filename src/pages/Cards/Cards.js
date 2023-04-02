import Card from 


const cards = [
    {
        id: 1,
        title: 'Hojas de parra',
        image: 'https://static-sevilla.abc.es/media/gurmesevilla/2009/09/742_hojasparra_1253719173.jpg',
        text: 'Hojas de parra rellenas con arroz, carne y especias, cocidas al vapor'
    },
    {
        id: 2,
        title: 'Zapallo relleno',
        image: 'https://i.ytimg.com/vi/fAii_y0lyCA/maxresdefault.jpg',
        text: 'Zapallo italiano relleno con arroz y carne, horneados y servidos en salsa de tomate',
    },
    {
        id: 3,
        title: 'Kebbab',
        image: 'https://www.cronica.com.ar/__export/1627481781067/sites/cronica/img/2021/07/28/kebab_crop1627481431030.jpg_409248029.jpg',
        text: 'Carne marinada y prensada con especias, asada y presentada en brochetas'
    },
    {
        id: 4,
        title: 'Shawarma',
        image: 'https://i.blogs.es/f03b7f/shawarma/1366_2000.jpg',
        text: 'Carne de res, cordero o pollo asada y sazonada, servida con vegetales en pan pita'
    },
    {
        id: 5,
        title: 'Repollitos rellenos',
        image: 'https://www.recetasjudias.com/wp-content/uploads/2014/12/Ni%C3%B1os-Envueltos-en-Repollo-e1462553872575.jpg',
        text: 'Hojas de repollo rellenas de arroz, carne y verduras, cocidas en agua, servidas en yogurt'
    },
    {
        id: 6,
        title: 'Baklava',
        image: 'https://recetinas.com/wp-content/uploads/2022/06/baklava.jpg',
        text: 'Masitas dulces, rellenas de nueces y almendras molidas, maceradas en almíbar'
    },
]

function Cards () {
    return (
        <div className="bg-secondary" id="menu">
            <br />
            <h1 className="text-center fw-bold fst-italic">Menú</h1>
            <br />
        <div className="p-2 container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map((card) => (
                        <div className="col-md-4 p-2" key={card.id}>
                            <Card title ={card.title} 
                            imageURL ={card.image}
                            text={card.text}/>
                        </div>
                    )
                        )
                }
            </div>
        </div>
        <br />
        </div>
    )
}

export default Cards