const Sequelize=require('sequelize');
const seqelize=require('../util/database');

const CartItem=seqelize.define('cartItem',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  quantity:Sequelize.INTEGER
});
module.exports=CartItem;