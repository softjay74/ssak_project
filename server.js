
var express = require('express');
var fs      = require('fs');
var app=express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var session = require('client-sessions');

app.use(session({
    cookieName : 'session',
    secret : 'fjasdklfj374892hfjkyhk##$fhakhoihreow',
    duration : 30*60*1000,
    activeDuration : 10*60*1000
}))

var pool = mysql.createPool({
    host : "localhost",
    user  :"ken",
    password : "mypass100",
    database : "ssakDB"

});

app.use(express.static(__dirname + "/"));
app.use(bodyParser.json());

app.get('/list', function(req, res){

    pool.getConnection(function(error,conn){
        var queryString="select * from Member";
        conn.query(queryString, function(error, result){
            if (error){
                throw error;
            }
            else {
                res.json(result);
            }
        })
        conn.release();
    });

})


app.get('/userlist', function(req, res){
    // console.log("Post Data");
    pool.getConnection(function(error,conn){
        var queryString="select * from Member";
        conn.query(queryString, function(error, result){
            if (error){
                throw error;
            }
            else {
                res.json(result);
            }
        })
        conn.release();
    });

});


app.post('/userlist', function(req, res){
    console.log("user add Data received");
    console.log(req.body);

    pool.getConnection(function(error,conn){
        var queryString="insert into member (user_id, user_fname, user_lname, email, password ) values ( '"  + req.body.userid + "'" +
            ",'" + req.body.fName + "'" +
            ",'" + req.body.lName + "'" +
            ", '" + req.body.email + "'" +
            ", '"+req.body.password +"' ) ";
        console.log(queryString);
        conn.query(queryString, function(error, result){
            if (error){
                throw error;
            }
            else {

                res.json(result);

            }
        })

        conn.release();
    });


})


app.get('/userlist/:id', function(req, res){
    var id=req.params.id;

    pool.getConnection(function(error,conn){
        var queryString="select * from Member where id="+id + " limit 1";
        console.log(queryString);
        conn.query(queryString, function(error, result){
            if (error){
                throw error;
            }
            else {
                data=result[0];
                res.json(data);

            }
        })

        conn.release();
    });

} )


app.delete('/userlist/:id', function (req, res){
    var id=req.params.id;
    console.log(id);

    pool.getConnection(function(error,conn){
        var queryString="delete from  Member where id="+id;
        console.log (queryString);
        conn.query(queryString, function(error, result){
            if (error){
                throw error;
            }
            else {
                res.json(result);
            }
        })

        conn.release();
    });
})

app.put('/userlist/:id', function(req, res ){

    var id = req.params.id;
    console.log(req.body.user_id);
    console.log(id);
    pool.getConnection(function(error,conn){
        var queryString="update member set user_id ='"+req.body.user_id
            + "', user_fname='" + req.body.user_fname
            + "', user_lname='" + req.body.user_lname
            + "', email='" + req.body.user_email
            + "',user_auth='"+req.body.user_auth
            +"' where id ="+id;

        console.log (queryString);
        conn.query(queryString, function(error, result){
            if (error){
                throw error;
            } else {
                data=result[0];
                res.json(data);
            }
        })

        conn.release();
    });

});

app.post('/loginCheck', function (req, res){

    if (req.session && req.session.user) { // Check if session exists

        res.json({ code: 1, user : req.session.user });
    } else {

        res.json({ code: 2, error : "session time out"});
    }
});

app.post('/login1',function(req,res){
    console.log("try login ");
})

app.post('/login', function(req, res){
    // console.log(req.body)
    pool.getConnection(function(error,conn){
        var queryString="select * from Member where user_id='"+req.body.userid + "' and password='" + req.body.password +"' " ;
       //  console.log(queryString);
        conn.query(queryString, function(error, result){
            if (error){
                throw error;
            }
            else {
                user=result[0];

                if (!user){
                    console.log("invalid id or password");
                    res.json( { code: 1, error : "invalid id or password"});
                } else {
                    console.log(user);
                    console.log(user.user_auth)
                    if (user.user_auth === null){
                        console.log("processing now. 3 business days for account approval. ")
                        res.json( { code: 2, error : "processing now. 3 business days for account approval."});
                    } else {
                        req.session.user = user;
                        res.json(req.session.user);
                    }
                }
            }
        })
        conn.release();
    });
})

app.get('/logout', function(req, res) {

    req.session.reset();
    res.send('ok');
});

app.listen(3000);
console.log("Server Start !!");




