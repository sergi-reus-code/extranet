var conexion = require('../config/conexion');
var user= require("../model/user");


module.exports={

index:function (req, res) { 

    user.obtener(conexion,function (err,datos) {
      
      console.log(datos);
      
      res.render('users/index', { title: 'Aplicación', users:datos });

    });

   
     
  },

  login:function (req, res) { 

    user.obtener(conexion,function (err,datos) {
      
      //console.log(datos);
      
      res.render('users/index', { title: 'Aplicación', users:datos });

    }
    );

   
     
  },




  crear: function (req,res) {
        res.render('users/signup');


  }

}



