/*var contacts = require("nativescript-contacts");


exports.pageLoaded = function () {
  contacts.getContact().then(function(args) {
    var contact = args.data;
    console.log(contact.name.given);
    contact.phoneNumbers.forEach(function(phone){
      console.log(phone.value);
    });
  });
};
*/
/*exports.pageLoaded = function(){
  //var c=contacts.getContact();
  //for(var i in c){
  //  console.log(i + "-> "+c[i]);
  console.log("Hii");
};
*/

var frame = require("ui/frame");
var Page = require("ui/page").Page;
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var SearchBar = require("ui/search-bar").SearchBar;
var Label = require("ui/label").Label;
var contacts = require("nativescript-contacts");
var Button = require("ui/button").Button;

exports.createPage = function(){
  var page = new Page();
  var layout = new StackLayout();
  var search = new SearchBar();
  var label1 = new Label();
  var button = new Button();

  search.hint = "search a contact";
  label1.text = "Contact1";
  label1.cssClass="text";
  button.text = "< back";
  button.on("tap", function(){
    frame.topmost().goBack();
  });

  layout.addChild(search);
  layout.addChild(label1);
  layout.addChild(button);

  page.cssClass = "page";
  page.content = layout;
  page.on("loaded", function(){
    //var c=contacts.getContact();
    console.log("Loaded");
    contacts.getContact().then(function(result) {
      var contact = args.data;
      console.log(result);
      contact.phoneNumbers.forEach(function(phone){
        console.log(phone.value);
      });
    });
    //console.log(c);
    //}
  });

  return page;
};
