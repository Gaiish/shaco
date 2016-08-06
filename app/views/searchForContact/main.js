var contacts = require("nativescript-contacts");
//var ObservableArray = require("data/observable-array").ObservableArray;
//var Observable = require("data/observable").Observable;
var model = require("./main_model");

contacts.getContact().then(function(args){
  if (args.response === "selected") {
    var contact = args.data;
    model.name = contact.name.given;
    console.log (contact.name.given+" "+contact.name.family);
    model.phone = contact.phoneNumbers[0];
  }
});

exports.pageLoaded = function (args) {
  var page = args.object;
  page.bindingContext = model;

  //var pageData = new Observable({
  //  contactList:
  //});
};

exports.getContact = function (){
  contacts.getContact().then(function(result){
    var contact = result.data;
    model.name= contact.name.given;
    if (contact.phoneNumbers.length > 0){
      model.phone = contact.phoneNumbers[0];
    }
  });
}
