import type { Preview } from "@storybook/react";
import "./styles.css";
import "../src/components/shared/variables.css";
import "../src/components/shared/styles.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			disable: true,
		},
		themes: {
			default: "light",
			list: [
				{ name: "light", class: "light", color: "#fff" },
				{ name: "dark", class: "dark", color: "#000" },
			],
		},
	},
};

export default preview;
