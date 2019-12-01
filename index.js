const express = require('express');

const app = express();

const cats = {
    cats: [
        {
            id: 1,
            name: 'Spike',
            images: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
            furColor: {
                paws:"green",
                tail:"black",
                ears:"white"
             }
        },
        {
            id: 2,
            name: 'Pinky',
            images: "https://i.guim.co.uk/img/media/22791e56a4a122df3532652f2812c4cb4da8d0ff/0_312_7360_4418/master/7360.jpg?width=1920&quality=85&auto=format&fit=max&s=dc4759562e2fbd772b33ce8fecc44dbf",
            furColor: {
                paws:"black",
                tail:"black",
                ears:"black"
             }
        },        {
            id: 3,
            name: 'Miezi',
            images: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            furColor: {
                paws:"white",
                tail:"white",
                ears:"white"
             }
        }
      ]
};

// Collection of records (all data)
app.get('/cats', (req, res) => {
    console.log(cats);
    res.json(cats.cats);
});

// Displays a single record that corresponds to an ID
app.get('/cats/:catId', (req, res) => {
    let catId = req.params.catId
    let cat = cats.cats.find(item => item.id == catId)
    console.log(cat);
    res.json(cat);
});

// Collection of records for given entity
app.get('/cats/:catId/furColor', (req, res) => {
    let catId = req.params.catId
    console.log("enteredGet");
    let cat = cats.cats.find(item => item.id == catId)
    console.log(cat.furColor);
    res.json(cat.furColor);
});

// One that displays a single record from a collection of a given entity
app.get('/cats/:catId/furColor/:bodyPart', (req, res) => {
    let catId = req.params.catId;
    let bodyPart = req.params.bodyPart;
    console.log(bodyPart);
    let cat = cats.cats.find(item => item.id == catId);
   
    if(bodyPart == 'tail'){
        console.log("in if: " + cat.furColor.tail);
        res.json(cat.furColor.tail);
    }
    if(bodyPart == 'paws'){
        console.log("in if: " + cat.furColor.paws);
        res.json(cat.furColor.paws);
    }
    if(bodyPart == 'ears'){
        console.log("in if: " + cat.furColor.ears);
        res.json(cat.furColor.ears);
    }
    
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
