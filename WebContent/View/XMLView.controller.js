sap.ui.controller("sap.ui.demo.View.XMLView", {
onPress:function(){
	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	oRouter.navTo('');
}
});