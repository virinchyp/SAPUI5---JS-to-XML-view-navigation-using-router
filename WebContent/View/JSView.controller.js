sap.ui.controller("sap.ui.demo.View.JSView", {
	onPress: function(oController){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("XMLView");

	}
	
}			
	
	
);