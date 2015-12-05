
jQuery.sap.declare("sap.ui.demo.Router");  

sap.ui.demo.Router = {
    NavBack : function (route, data) {  
		  var history = sap.ui.core.routing.History.getInstance();  
		  var url = this.getURL(route, data);  
		  var direction = history.getDirection(url);  
		  if ("Backwards" === direction) {  
		       window.history.go(-1);  
		  } else {  
			  var replace = true; 
			  this.navTo(route, data, replace);  
		  }  
		  },  
};  