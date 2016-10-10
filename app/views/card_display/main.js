var frame = require("ui/frame");
var cameraModule = require("camera");
var imageModule = require("ui/image");
var view = require("ui/core/view");
//var createViewModel = require("./main-view-model").createViewModel;
var dialogs = require("ui/dialogs");
var Sqlite = require("nativescript-sqlite");
var platform = require("platform");

var imageContainer;
var photo;
//var db = "shaco.db";
var namesLabl;
var officeAddressLabl;
var emailLabl;
var telLabl;
var occupationLabl;
var details;

/*function.onShowingModally(args){
  var page = args.object;

}*/

/*
  code for screen display: dealing with elements size to make a good display
*/
var screenWidth = platform.screen.mainScreen.widthPixels;
var screenHeight = platform.screen.mainScreen.heightPixels;
var gridLay;
//start screen code

//end screen code

function onPageLoaded(args) {
   var page = args.object;
   imageContainer = view.getViewById(page, "profile_pic");
   photo=view.getViewById(page,"company_logo");

   namesLabl = view.getViewById(page, "names");
   officeAddressLabl = view.getViewById(page, "officeAddress");
   emailLabl = view.getViewById(page, "email");
   telLabl = view.getViewById(page, "tel");
   occupationLabl = view.getViewById(page, "occupation");

   //start screen code
   gridLay = view.getViewById(page, "grid");
   console.log(gridLay[0]);
   //gridLay.column = "auto,*";
   //console.log();
   //end screen code


   (new Sqlite("my.db")).then(db => {
     db.get("SELECT * FROM cards WHERE id=?", [1]).then(row => {
       namesLabl.text = row[1];
       telLabl.text = row[2];
       emailLabl.text = row[3];
       occupationLabl.text = row[4];
       officeAddressLabl.text = row[5];

     }, error => {
       console.log("SELECT ERROR", error);
     });

   }, error => {
     console.log("OPEN DB ERROR", error);
   });
}

function tapAction() {
   cameraModule.takePicture().then(function (picture) {
       imageContainer.imageSource = picture;
   });
}
function go() {
   cameraModule.takePicture().then(function (picture) {
       photo.imageSource = picture;
   });
}
exports.onPageLoaded = onPageLoaded;
//exports.onShowingModally = onShowingModally;
exports.tapAction = tapAction;
exports.go=go;

exports.back=function(){
  frame.topmost().navigate("views/home/home");
};
