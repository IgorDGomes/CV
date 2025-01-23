import type { Config } from "tailwindcss";
import animation from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				hover: '#1E4E8C',
				cardBg: '#AEC7E8',
				divider: '#AEB3B7',
				border: '#F0F5FF',
				cta: '#388DCB',
				secondaryBtn: '#7EC8E3',
			}
		},
		plugins: [animation]
	}
} satisfies Config;
