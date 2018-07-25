sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel'
], function(jQuery, Controller, JSONModel){
	"use strict";
	
	var PageController = Controller.extend("mysafety.controller.Dashboard", {
		
		onInit: function(evt) {
			var sPath = jQuery.sap.getModulePath("mysafety", "/data/NavigationTileCollection.json");
			var oModel = new JSONModel(sPath);
			console.log(oModel);
			this.getView().setModel(oModel);
		}
	});
	return PageController;
});