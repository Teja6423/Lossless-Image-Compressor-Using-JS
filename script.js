const uploadBox = document.querySelector(".upload-box"),
previewImg = uploadBox.querySelector("img"),
fileInput = uploadBox.querySelector("input"),
downloadBtn = document.querySelector(".download-btn");

const loadFile = (e) => {
    const file = e.target.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
        document.querySelector(".wrapper").classList.add("active");
    });
}
const resizeAndDownload = () => {
    a.href = canvas.toDataURL("image/jpeg", imgQuality);
    a.download = new Date().getTime(); 
    a.click();
  }

fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());

function compressImage() {
  var fileInput = document.getElementById('file-input');
  

  if (fileInput.files.length > 0) {
    var fileReader = new FileReader();

    fileReader.onload = function(event) {
      var image = new Image();

      image.onload = function() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        
        context.filter = 'brightness(110%) contrast(110%)';

        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);

        var imageData = canvas.toDataURL("image/jpeg", 0.5);

        document.getElementById('compressed-image').src = imageData;
      }

      image.src = event.target.result;
    }

    fileReader.readAsDataURL(fileInput.files[0]);
  }
}
function downloadImage() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = document.getElementById('compressed-image');
  
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
  
    const link = document.createElement('a');
    link.download = 'compressed-image.jpg';
    link.href = canvas.toDataURL('image/jpeg', 0.5);
    link.click();
  }
  