import Controller from '@ember/controller';

export default Controller.extend({

    model1: [
        {
            name:"Shoes",
            startPrice: 35,
            imgURL: "assets/images/shoes.png"
        },
        {
            name:"Minions",
            startPrice: 10,
            imgURL: "assets/images/min.jpg"
        },
        {
            name:"Patika",
            startPrice:25,
            imgURL: "assets/images/patika.jpg"
        }
    ],
    model2: [
        {
            name:"Car-Porsche",
            startPrice: 100000,
            imgURL: "assets/images/porse.jpg"
        },
        {
            name:"Minions",
            startPrice: 10,
            imgURL: "assets/images/min.jpg"
        },
        {
            name:"Ball for soccer",
            startPrice:30,
            imgURL: "assets/images/lopta.jpg"
        },
        {
            name:"Desktop computer",
            startPrice: 500,
            imgURL: "assets/images/komp.png"
        }
    ]
});
