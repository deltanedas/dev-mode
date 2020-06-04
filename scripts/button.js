var ui = require("ui-lib/library");

var shown = false;

// button for poor mobile users
ui.addButton("console", "terminal", () => {
	shown = !shown;
	// Prompt for command
	if (shown) {
		Vars.ui.scriptfrag.toggle();
	}
});

ui.once(() => {
	Vars.ui.scriptfrag.visible(boolp(() => shown));
});
