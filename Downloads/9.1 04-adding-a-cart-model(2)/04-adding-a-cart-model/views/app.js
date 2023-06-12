const Product = require('./models/product');
const Cart = require('./models/cart');

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize=require('./util/database');
const { name } = require('ejs');

const app = express();
var cors=require('cors');
const { error } = require('console');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


sequelize.sync().then(result=>{
    // console.log(result);
    app.listen(3333)
})
.catch(err=>{
    console.log(err)})

