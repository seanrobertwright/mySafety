sap.ui.jsview("mysafety.view.Dashboard", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mysafety.Dashboard
	*/ 
	getControllerName : function() {
		return "mysafety.controller.Dashboard";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mysafety.Dashboard
	*/ 
	createContent : function(oController) {
 		// Create tile navigation
		var oTileTemp = new sap.m.StandardTile({
			icon:"{navTiles>icon}",
			title:"{navTiles>title}",
			info:"{navTiles>info}"
		});
				
		var oNavTileContainer = new sap.m.TileContainer({
			//tiles:"{NavigationTileCollection}"
		});
		oNavTileContainer.bindAggregation("tiles", "navTiles>NavigationTileCollection", oTileTemp);
				
		var oPage = new sap.m.Page({
			title: "mySafety",
			content: [
				oNavTileContainer
			]
		});
 		return oPage;
	}

});