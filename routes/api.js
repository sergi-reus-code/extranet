var express = require('express');
var router = express.Router();

//const Usercontroller= require("../controllers/Usercontroller");

/* GET home page. */
//router.get('/',Usercontroller.index);
//router.get('/login',Usercontroller.login);


router.get('/upload_file',(req,res,next) => {

        //comprovar email
        //comprovar password
        //a la base de dades

        var headers = req.headers

        console.log(req.headers);

        //res.send('HELLO API')
        res.send("OK")
})

router.post('/upload_file',(req,res,next) => {

        

        var headers = req.headers

        console.log(req.headers.rodrigo);

        //res.send('HELLO API')
        res.send("OK")
})

router.post('/upload_file', async (req, res) => {
        try {
            if(!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
                let avatar = req.files.avatar;
                
                //Use the mv() method to place the file in upload directory (i.e. "uploads")
                avatar.mv('./uploads/' + avatar.name);
    
                //send response
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: avatar.name,
                        mimetype: avatar.mimetype,
                        size: avatar.size
                    }
                });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    });




module.exports = router;
