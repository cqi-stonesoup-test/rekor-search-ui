import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000",
		experimentalStudio: true,
		setupNodeEvents(_on, _config) {
			// implement node event listeners here
		},
	},
});
