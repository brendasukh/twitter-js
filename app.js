const express = require( 'express' );
const app = express();

app.use(function(req,res,next){
  console.log()
  next();
})
app.get('/',function(req,res){
  res.send('This works!')
})
app.listen(3000,function(){
  console.log("listening on 3000")
})
