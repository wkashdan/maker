import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
	state: () => ({
		theme: {
			colors: {
				background: '#ffffff',
				body: '#000000',
				heading: '#000000',
				primary: '#000000',
			},
			fonts: {
				baseSize: 16,
				sizeScale: 1.17,
				heading: {
					fontFamily: 'inherit',
					fontWeight: 'inherit',
				},
				body: {
					fontFamily: 'inherit',
					fontWeight: 'inherit',
				},
			},
			shape: {},
		},
	}),
});
