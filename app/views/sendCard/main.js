var labelModule = require("ui/label");
var gestures = require("ui/gestures");
var view = require("ui/core/view");

function onTap(args) {
  var page = args.object;
  label = view.getViewById(page, 'send');
  label.on(gestures.GesturesTypes.swipe, function (args) {
    console.log("Swipe direction: "+ args.direction);
  });
}

exports.onTap = onTap;
