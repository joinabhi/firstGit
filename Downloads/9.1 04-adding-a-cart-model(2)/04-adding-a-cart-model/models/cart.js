const Sequelize=require('sequelize');
const seqelize=require('../util/database');

const Cart=seqelize.define('cart',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  }
});
module.exports=Cart;