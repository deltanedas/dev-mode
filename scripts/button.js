/*
	Copyright (c) DeltaNedas 2020

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

const ui = require("ui-lib/library");

// Android also doesn't load the logger automatically in 6.0
Vars.loadLogger();

var shown = false;

const toggle = () => {
	shown = !shown;
};

/* button for poor mobile users */
ui.addButton("console", "terminal", toggle);

/* or if you don't want to start a game */
ui.addMenuButton("$console", "terminal", toggle);

// Always show console - even outside of a game
ui.addArea("console", {
	init(console) {
		Core.scene.add(console.bottom().left());
		console.visibility = () => shown;
	},
	post() {},

	group: null
});

ui.addTable("console", "console", console => {
	console.bottom().left();
	console.background(Tex.buttonTrans);
	console.defaults().margin(8);

	// Clear the console
	console.button(Icon.refresh, Styles.cleari, 40, () => {
		Vars.ui.consolefrag.clearMessages();
	});

	// Prompt for a line of JS
	console.button(Icon.terminal, Styles.cleari, 40, () => {
		Vars.ui.consolefrag.toggle();
	}).marginRight(8);

	console.add("$console").marginLeft(8);
});

ui.onLoad(() => {
	Vars.ui.consolefrag.visibility = () => shown;
});
