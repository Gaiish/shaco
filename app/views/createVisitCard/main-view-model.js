var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
var dialogs = require("ui/dialogs");
var frame = require("ui/frame");

function createViewModel(database){
  var viewModel = new Observable();
  viewModel.names = "";
  viewModel.tel = "";
  viewModel.email = "";
  viewModel.occupation = "";
  viewModel.officeAddress = "";

  viewModel.save = function() {
    if(this.names =='' || this.tel =='' || this.email =='' || this.occupation =='' || this.officeAddress ==''){
      dialogs.alert({
        message: "All fields are required!!",
        okButtonText: "OK"
      });
      frame.topmost().navigate("views/createVisitCard/main");
    }
    else {
      database.execSQL("INSERT INTO cards (names, tel, email, occupation, officeAddress) VALUES (?, ?, ?, ?, ?)", [this.names, this.tel, this.email, this.occupation, this.officeAddress])
      .then(id => {
        if (id > 1)
        {
          dialogs.alert({
              message : "Your card has been saved\nYou have "+id+" cards saved",
              okButtonText:"OK"
          });
        }
        else {
          dialogs.alert({
              message : "Your card has been saved\nYou have "+id+" card saved",
              okButtonText:"OK"
          });
        }

        frame.topmost().navigate("views/card_display/main");
      }, error => {
        dialogs.alert({
          message : "Error while creating your card",
          okButtonText:"OK"
        });
      });
    }
  }

  return viewModel;
}

exports.createViewModel = createViewModel;
