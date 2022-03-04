var robot = require("robotjs");
var Jimp = require('jimp');
var Jimp11 = require('jimp');
var fs = require('fs'); 

const { windowManager } = require ("node-window-manager");


windowManager.requestAccessibility(); 


function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

  function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

  function getwindow(title) {

    let windows = windowManager.getWindows();

    for (let index = 0; index < windows.length; index++) {

      console.log(windows[index].getTitle().toLowerCase());
      console.log(index);

      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
        console.log(index);
        return windows[27];
      }
    
    }
  
    return null;
    
  }


  function getwindow_888(title) {

    let windows = windowManager.getWindows();

    for (let index = 0; index < windows.length; index++) {

      const finestra = windows[index].getTitle().toLowerCase().toString();

      if(finestra.includes("888")){

        console.log(windows[index].getTitle().toLowerCase());
        console.log(index);
        return windows[index];
      }

      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
        
        return windows[index];
      }
    
    }
  
    return null;
    
  }

  function getwindow_spy(title) {

    let windows = windowManager.getWindows();

    for (let index = 0; index < windows.length; index++) {

      const finestra = windows[index].getTitle().toLowerCase().toString();

      if(finestra.includes("spy")){

        console.log(windows[index].getTitle().toLowerCase());
        console.log(index);
        return windows[index];
      }

      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
        
        return windows[index];
      }
    
    }
  
    return null;
    
  }

  function getwindow_masterdef(title) {

    let windows = windowManager.getWindows();

    for (let index = 0; index < windows.length; index++) {

      const finestra = windows[index].getTitle().toLowerCase().toString();

      if(finestra.includes("masterdef")){

        console.log(windows[index].getTitle().toLowerCase());
        console.log(index);
        return windows[index];
      }

      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
        
        return windows[index];
      }
    
    }
  
    return null;
    
  }


  function getwindow_exec(title) {

    let windows = windowManager.getWindows();

    for (let index = 0; index < windows.length; index++) {

      const finestra = windows[index].getTitle().toLowerCase().toString();

      if(finestra.includes("exec")){

        console.log(windows[index].getTitle().toLowerCase());
        console.log(index);
        return windows[index];
      }

      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
        
        return windows[index];
      }
    
    }
  
    return null;
    
  }




  function captureImage({ x, y, w, h }) {
    const pic = robot.screen.capture(x, y, w, h)
    const width = pic.byteWidth / pic.bytesPerPixel // pic.width is sometimes wrong!
    const height = pic.height
    const image = new Jimp(width, height)
    let red, green, blue
    pic.image.forEach((byte, i) => {
      switch (i % 4) {
        case 0: return blue = byte
        case 1: return green = byte
        case 2: return red = byte
        case 3: 
          image.bitmap.data[i - 3] = red
          image.bitmap.data[i - 2] = green
          image.bitmap.data[i - 1] = blue
          image.bitmap.data[i] = 255
      }
    })

    image.greyscale();                // remove colour from the image
    image.invert(); 

    return image
  }
  


  function captureImage_prev({ x, y, w, h }) {
    const pic = robot.screen.capture(x, y, w, h)
    const width = pic.byteWidth / pic.bytesPerPixel // pic.width is sometimes wrong!
    const height = pic.height
    const image = new Jimp(width, height)
    let red, green, blue
    pic.image.forEach((byte, i) => {
      switch (i % 4) {
        case 0: return blue = byte
        case 1: return green = byte
        case 2: return red = byte
        case 3: 
          image.bitmap.data[i - 3] = red
          image.bitmap.data[i - 2] = green
          image.bitmap.data[i - 1] = blue
          image.bitmap.data[i] = 255
      }
    })

    //image.greyscale();                // remove colour from the image
    //image.invert(); 








    return image
  }




  function tomafoto2(x1,y1,w1,h1){
    const x = x1;
    const y = y1;
    const w = w1;
    const h = h1;
    captureImage({ x, y, w, h }).write(`${Date.now()}.png`)
    
  }


  function tomafoto(x1,y1,w1,h1){
    const x = x1;
    const y = y1;
    const w = w1;
    const h = h1;
    captureImage({ x, y, w, h }).write('last.png')
    
  }

  function tomafoto_prev(x1,y1,w1,h1){
    const x = x1;
    const y = y1;
    const w = w1;
    const h = h1;
    captureImage_prev({ x, y, w, h }).write('prev.png')


    sleep(2000);







      

for (let index = 0; index < prev_coord.length; index++) {
  const element = prev_coord[index];
    Jimp.read('prev.png', (err, img) => {
      if (err) throw err;
      img.crop( element[0], element[1], element[2], element[3] ); 
      img.write(`${index}.png`)        // crop to the given region
    });

}

}








 
  exports.sleep = sleep,
  exports.randomInt = randomInt,
  exports.getwindow = getwindow,
  exports.getwindow_888 = getwindow_888,
  exports.getwindow_spy = getwindow_spy,
  exports.getwindow_masterdef = getwindow_masterdef,
  exports.getwindow_exec = getwindow_exec,
  
  exports.tomafoto = tomafoto,
  exports.tomafoto2 = tomafoto2,
  exports.tomafoto_prev = tomafoto_prev,

 


  exports.captureImage = captureImage

