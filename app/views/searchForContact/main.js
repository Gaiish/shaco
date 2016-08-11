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
var frame = require("ui/frame");
var Page = require("ui/page").Page;
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var SearchBar = require("ui/search-bar").SearchBar;
var Label = require("ui/label").Label;
var contacts = require("nativescript-contacts");

exports.createPage = function(){
  var page = new Page();
  var layout = new StackLayout();
  var search = new SearchBar();
  var label1 = new Label();

  search.hint = "search a contact";
  label1.text = "Contact1";
  layout.addChild(search);
  layout.addChild(label1);

  page.content = layout;

  return page;
};
