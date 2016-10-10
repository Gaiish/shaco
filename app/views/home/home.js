var frameModule=require("ui/frame");
//var observable=require("data/observable")
exports.create=function(){
      frameModule.topmost().navigate("views/createVisitCard/main");
};
exports.search=function(){
      frameModule.topmost().navigate("views/searchForContact/main");
};

exports.display=function(){
      frameModule.topmost().navigate("views/card_display/main");
};
