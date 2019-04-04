const express =  require('express');
const request = require('request');
const cors = require('cors') ;
const app = express()
const path = require('path');
const router = express.Router()
const PORT = process.env.PORT || 4000;




app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());
app.use(router);



//production mode
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    //
    router.get('*', (req, res) => {
      res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
  }
  //build mode
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
  })

  router.get('/holidays', (req, res) => {
    request('https://holidayapi.com/v1/holidays?key=c78cd450-3899-4702-ae55-1907e3211e66&country=NG&year=2019&month=04&day=04&previous=true',  (error, response, body) => {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          res.send(body)
    });
  })
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
