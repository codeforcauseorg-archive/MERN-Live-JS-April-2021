const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anuj:happy@cluster0.x36ik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });

// kitty.save().then(() => console.log('meow'));

Cat.find().then(function(responses){
    console.log(responses);
})