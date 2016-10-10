/*var camera = require("camera");

exports.capture = function(){
  //var cam = new camera();
  camera.takePicture();
};
*/
var frame = require("ui/frame");
var Sqlite = require("nativescript-sqlite");
var createViewModel = require("./main-view-model").createViewModel;
var dialogs = require("ui/dialogs");

function onNavigatingTo(args){
  var page = args.object;
  (new Sqlite("my.db")).then(db => {
    db.execSQL("CREATE TABLE IF NOT EXISTS cards (id INTEGER PRIMARY KEY AUTOINCREMENT, names TEXT, tel TEXT, email TEXT, occupation TEXT, officeAddress TEXT )")
    .then(id => {
      page.bindingContext = createViewModel(db);
    }, error => {
      console.log("CREATE TABLE ERROR "+error);
    });
  }, error => {
      console.log("OPEN DB Error "+error);
  });
}

exports.onNavigatingTo = onNavigatingTo;

exports.back=function(){
  frame.topmost().goBack();
};
