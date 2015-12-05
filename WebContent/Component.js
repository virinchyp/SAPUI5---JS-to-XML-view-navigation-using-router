jQuery.sap.declare("sap.ui.demo.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.Component", {

    metadata: {
    	libs:["sap.m"],
        routing: {

            config: {
                viewType: "JS",
                viewPath: "sap.ui.demo.View",
                targetControl: "idAppJS",
                clearTarget: false,
                transition: "slide",
                byPassed:"NotFound"
            },

            routes: [
                {
                    pattern: "",
                    name: "JSView",
                    view: "JSView",
                    viewId:"idjsview",
                    targetControl: "idAppJS",
                    viewPath: "sap.ui.demo.View",
                    targetAggregation: "pages"
                }, {
                    pattern: "XMLView",
                    name: "XMLView",
                    viewId:"idxmlview",
                    view: "XMLView",
                    targetControl: "idAppJS",
                    viewPath: "sap.ui.demo.View",
                    viewType: "XML",
                    targetAggregation: "pages"
                }
            ]
        }
    },

    init: function() {
        jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
        jQuery.sap.require("sap.ui.demo.Router");
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
        var router = this.getRouter();
        this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
        router.initialize();

    },

    destroy: function() {
        if (this.routeHandler) {
            this.routeHandler.destroy();
        }
        sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
    },

    createContent: function() {

        var oView = sap.ui.view({
            viewName: "sap.ui.demo.View.App",
            type: "JS",
        });

        return oView;

    }


});
