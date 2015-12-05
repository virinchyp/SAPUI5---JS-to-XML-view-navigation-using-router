sap.ui.jsview("View.NotFound", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf View.NotFound
	*/ 
	getControllerName : function() {
		return "View.NotFound";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf View.NotFound
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Not Found(by passed case)",
			content: [
			
			]
		});
	}

});