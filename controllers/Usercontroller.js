var conexion = require('../config/conexion');
var user= require("../model/user");

/*
module.exports={

index:function (req, res) { 

    user.obtener(conexion,function (err,datos) {
      
      console.log(datos);
      
      res.render('users/index', { title: 'Aplicación', users:datos });

    });

   
     
  },

  crear: function (req,res) {
        res.render('users/signup');


  }

}

*/


  function index (req, res) { 
  
      user.obtener(conexion,function (err,datos) {
        
        console.log(datos);
        
        res.render('users/index', { title: 'Aplicación', users:datos });
  
      });
  
     
       
    }
  
    function crear (req,res) {
          res.render('users/signup');
  
  
    }
  
    module.exports = Usercontroller.index, Usercontroller.crear;