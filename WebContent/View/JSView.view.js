sap.ui.jsview("sap.ui.demo.View.JSView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf landing
	*/ 
	getControllerName : function() {
		return "sap.ui.demo.View.JSView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf landing
	*/ 
	createContent : function(oController) {
    var Button=sap.m.Button('idButton',{text:"Click to navigate to the xml view",press:[oController.onPress,oController]})
		return new sap.m.Page({
		 title: "JS View",
			content: [Button]		
		});
	
	}

});