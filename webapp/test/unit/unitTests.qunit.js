/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsapktflow/flowchart1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
