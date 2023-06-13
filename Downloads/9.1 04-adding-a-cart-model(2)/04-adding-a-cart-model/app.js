
const Cart = require('./models/cart');

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize=require('./util/database');
const Product=require('./models/product');
const User=require('./models/user');
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
app.use((req, res, next)=>{
    User.findById(1)
    .then(user=>{
        req.user=user;
        next()
    })
    .catch(err=>{
        console.log(err)
    })
})
app.use(cors());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints:true, onDelete:'CASCADE'});
User.hasMany(Product)

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return User.findById(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });

