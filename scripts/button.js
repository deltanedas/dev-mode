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
