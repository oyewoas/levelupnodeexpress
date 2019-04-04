const express =  require('express');
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
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
  })
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
