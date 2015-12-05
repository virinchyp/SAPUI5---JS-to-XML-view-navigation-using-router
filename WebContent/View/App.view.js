sap.ui.jsview("sap.ui.demo.View.App", {
	getControllerName : function() {
		return "sap.ui.demo.View.App";
	},
	createContent : function(oController) {
		 return new sap.m.App("idAppJS");  
		
	}

});