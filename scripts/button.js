/*
	Copyright (c) DeltaNedas 2020

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
var ui = require("ui-lib/library");

var shown = false;

// button for poor mobile users
ui.addButton("console", "terminal", () => {
	shown = !shown;
});

ui.addTable("bottom", "console", console => {
	console.background(Tex.buttonTrans);
	console.visible(boolp(() => shown));
	console.defaults().margin(8);

	// Clear the console
	console.addImageButton(Icon.refresh, Styles.clearPartiali, 40, run(() => {
		Vars.ui.scriptfrag.clearMessages();
	}));

	// Prompt for a line of JS
	console.addImageButton(Icon.terminal, Styles.clearPartiali, 40, run(() => {
		Vars.ui.scriptfrag.toggle();
	})).marginRight(8);

	console.label(prov(() => "Console")).marginLeft(8);
});

ui.onLoad(() => {
	Vars.ui.scriptfrag.visible(boolp(() => shown));
});
