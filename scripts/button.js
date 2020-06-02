const ui = require("ui-lib/library");

var shown = false;

// button for poor mobile users
ui.addButton("console", "admin", () => {
	shown = !shown;
	// Prompt for command
	if (shown) {
		Vars.ui.scriptfrag.toggle();
	}
});

ui.loadEvents.push(() => {
	Vars.ui.scriptfrag.visible(boolp(() => shown));
});
