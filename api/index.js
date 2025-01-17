const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const imageDownloader = require('image-downloader')
const User = require('./models/User.js')
const Booking = require ('./models/Booking.js')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require ('fs');
const place = require('./models/Place.js');





const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'dfkjh4509dfjkwer9234thergr90gur';

app.use(express.json());

app.use(cookieParser());

app.use('/uploads', express.static(__dirname+'/uploads'));

app.use(cors({

  credentials : true,

  origin : 'http://localhost:3000',
  
}));

mongoose.connect('mongodb://localhost:27017/Hotelbokking')

const PORT = 4000;


function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}

app.get('/test', (req,res) =>{

  res.json('test ok');
});


app.post('/register', async (req,res) => {

  const {name,email,password} = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password : bcrypt.hashSync(password, bcryptSalt),
    })
    res.json(userDoc);
 
  } catch (e) {
    res.status(422).json(e);
    
  }

});

app.post('/login', async(req,res) =>{

  const {email,password} = req.body;
  const userDoc = await User.findOne({email});

  if (userDoc){

    const passOK = bcrypt.compareSync(password,userDoc.password);

    if(passOK){
      jwt.sign({email:userDoc.email , id:userDoc._id }, jwtSecret, {} ,(err,token)=>{
        if(err) throw err;
        res.cookie('token', token).json(userDoc);
      });
    }else{
      res.status(422).json('pass not Ok'); 
    }
  }
  else{
    res.json('not found');
  }
});

app.get('/profile' , (req,res)=>{

  const {token} = req.cookies;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const {name,email,_id} = await User.findById(userData.id);
      res.json({name,email,_id});
    });
  } else {
    res.json(null);
  }

});

app.post('/logout', (req,res) => {
  res.cookie('token', '').json(true);
})

app.post('/upload-by-link', async(req,res)=>{
  const{link} = req.body;
  const newName = 'photo' + Date.now() + '.jpg';
  await imageDownloader.image({
    url : link,
    dest :__dirname + '/uploads/' + newName
  })
  res.json(newName);
})

const photosMiddleware = multer({dest:'uploads'}); 
app.post('/upload',photosMiddleware.array('photos', 100), async(req,res) =>{
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const {path,originalname} = req.files[i];
    const parts = originalname.split('.');
    const ext = parts[parts.length-1];
    const newPath = path + '.' + ext;
    fs.renameSync(path,newPath);
    uploadedFiles.push(newPath.replace('uploads/',''));
  }
  res.json(uploadedFiles);
})

app.post('/places' , (req,res)=> {
  const {token} = req.cookies;
  const {title,address,addedPhotos,
        description,perks,extraInfo,
        checkIn,checkOut,maxGuest,price,} = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
  const PlaceDoc =  await Place.create({
      owner : userData.id,
              title,address,photos:addedPhotos,
              description,perks,extraInfo,
              checkIn,checkOut,maxGuest,price,
    });
    res.json(PlaceDoc);
  });
});

app.get('/user-places', (req,res)=> {
  const {token} = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) =>{
    const {id} = userData;
    res.json(await place.find({owner:id}));
  });
});

app.get('/places/:id', async(req,res)=>{
  const {id} = req.params;
  res.json(await place.findById(id));
});

app.put('/places', async (req,res) => {
  const {token} = req.cookies;
  const {
    id, title,address,addedPhotos,description,
    perks,extraInfo,checkIn,checkOut,maxGuests,price,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const placeDoc = await place.findbyId(id);
    if (userData.id === placeDoc.owner.toString()) {
      placeDoc.set({
        title,address,photos:addedPhotos,description,
        perks,extraInfo,checkIn,checkOut,maxGuests,price,
      });
      await placeDoc.save();
      res.json('ok');
    }
  });
});

app.get('/places', async (req,res) => {
  res.json( await place.find() );
});

app.post('/booking', async(req,res) => {

  const userData = await getUserDataFromReq(req);
  const {
    place,checkIn,checkOut,numberOfGuests,name,phone,price,
  } = req.body;
  Booking.create({
    place,checkIn,checkOut,numberOfGuests,name,phone,price,
    user:userData.id,
  }).then((doc)=>{
    
    res.json(doc);
  }).catch((err)=>{
    throw err;
  });
});




app.get('/booking', async(req,res) => {
  const userData = await getUserDataFromReq(req);
  res.json( await Booking.find({user:userData.id}).populate('place'));
});

app.listen(PORT, ()=> console.log(`Server started on PORT:${PORT}`))