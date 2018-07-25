sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel'
], function(jQuery, Controller, JSONModel){
	"use strict";
	
	var PageController = Controller.extend("mysafety.controllerDashboard", {
		
		onInit: function(evt) {
			var sPath = jQuery.sap.getModulePath("mysafety", "/data/NavigationTileCollection.json");
			var oModel = new JSONModel(sPath);
			this.getView().setModel(oModel, "navTiles");
		}
	});
	return PageController;
});