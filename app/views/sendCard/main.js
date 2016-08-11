var frame = require("ui/frame");
var Page = require("ui/page").Page;
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var Label = require("ui/label").Label;
var gestures = require("ui/gestures");
//var button = require("ui/button").Button;

exports.createPage = function() {
  var page = new Page();
  var layout = new StackLayout();
  var Label1 = new Label();
  var Label2 = new Label();
  //var button1 = new button();
  page.actionBar.title = "Send this contact";
  Label1.text = "Contact1";
  Label2.text = "Swipe to send the contact";
  Label2.on("gestures.GesturesTypes.swipe", function(args){
    console.log("Swipe Direction: "+args.direction);
  });
  //button1.text = "Send me";

  layout.addChild(Label1);
  layout.addChild(Label2);

  page.content = layout;

  return page;
}
