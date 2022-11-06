const core = require("@actions/core");
const AppParser = require("app-info-parser");
const fs = require("fs");

(async () => {
	try{
		const parser = new AppParser(core.getInput("path", { required: true }));
		const result = await parser.parse();
		core.setOutput("code", result.versionCode);
		core.setOutput("name", result.versionName);
	}catch(err){
		core.setFailed(error.message);
	}
})();
