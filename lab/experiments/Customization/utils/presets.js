// Don't need weights for this demo because their variable fonts
export const presets = {
	resetStyles: {
		name: 'Reset styles',
		fonts: {
			baseSize: 16,
			sizeScale: 1.12,
			heading: {
				fontFamily: 'Work Sans',
				fontWeight: '700',
			},
			body: {
				fontFamily: 'Open Sans',
				fontWeight: '500',
			},
		},
		section: {
			custom: {
				maxWidth: '1000px',
			},
		},
		button: {
			custom: {
				fontFamily: 'Open Sans',
				fontWeight: '500',
				borderRadius: 0,
				borderWidth: 1,
			},
		},
		card: {
			custom: {
				color: '#ffffff',
				borderRadius: 0,
				borderWidth: 1,
				borderColor: '#e1e1e1',
			},
		},
		image: {
			custom: {
				borderRadius: 0,
				borderWidth: 0,
				borderColor: '#ffffff',
			},
		},
		form: {
			custom: {
				borderRadius: 0,
				borderWidth: 1,
			},
		},
	},
	presetOne: {
		name: 'Preset one',
		shapes: {
			imageBorderRadius: '8px',
		},
		colors: {
			primary: '#f50f7e',
			background: '#c7f4f4',
			heading: '#0061bd',
			body: '#0051a8',
		},
		fonts: {
			heading: {
				fontFamily: 'Rubik',
				fontWeight: '800',
			},
			body: {
				fontFamily: 'Karla',
				fontWeight: '500',
			},
		},
		section: {
			custom: {
				maxWidth: '1000px',
			},
		},
		button: {
			textColor: '#33fcff',
			custom: {
				fontFamily: 'Rubik',
				fontWeight: '500',
				borderRadius: '4',
				borderWidth: '2',
				borderColor: '#36fbff',
				boxShadowHorizontal: '1',
				boxShadowVertical: '1',
				boxShadowBlurRadius: '0',
				boxShadowSpreadRadius: '1',
				boxShadowColor: '#f50f7e',
				hoverBoxShadowHorizontal: '3',
				hoverBorderColor: '#38faff',
				hoverBorderWidth: '2',
				hoverBoxShadowVertical: '3',
				hoverBoxShadowSpreadRadius: '2',
				hoverBoxShadowColor: '#0160bd',
				hoverBoxShadowBlurRadius: '0',
				hoverColor: '#ff3898',
			},
		},
		card: {
			custom: {
				color: '#c7f4f4',
				borderRadius: '4',
				borderWidth: '2',
				borderColor: '#f60e7e',
				boxShadowHorizontal: '2',
				boxShadowVertical: '2',
				boxShadowBlurRadius: '0',
				boxShadowSpreadRadius: '2',
				boxShadowColor: 'transparent',
				titleColor: '#f60e7e',
				hoverColor: '#ebffff',
				hoverBoxShadowHorizontal: '3',
				hoverBorderColor: '#f70d7e',
				hoverBorderWidth: '2',
				hoverBoxShadowVertical: '3',
				hoverBoxShadowSpreadRadius: '2',
				hoverBoxShadowColor: '#0160bd',
				hoverBoxShadowBlurRadius: '0',
			},
		},
		image: {
			custom: {
				borderRadius: '8',
				borderWidth: '2',
				borderColor: '#c7f4f4',
				boxShadowHorizontal: '0',
				boxShadowVertical: '0',
				boxShadowBlurRadius: '0',
				boxShadowSpreadRadius: '2',
				boxShadowColor: '#0160bd',
			},
		},
		form: {
			custom: {
				borderRadius: '4',
				borderWidth: '0',
				bgColor: '#c7f4f4',
				textColor: '#f60e7e',
				borderColor: '#c7f4f4',
				boxShadowHorizontal: '0',
				boxShadowVertical: '0',
				boxShadowBlurRadius: '0',
				boxShadowSpreadRadius: '2',
				boxShadowColor: '#f60e7e',
				hoverBgColor: '#f60e7e',
				hoverTextColor: '#37f4f9',
				hoverBorderWidth: '0',
				hoverBorderColor: '#36fbff',
				hoverBoxShadowHorizontal: '0',
				hoverBoxShadowVertical: '0',
				hoverBoxShadowBlurRadius: '0',
				hoverBoxShadowSpreadRadius: '2',
				hoverBoxShadowColor: '#f60e7e',
			},
		},
	},
	presetTwo: {
		name: 'Preset two',
		colors: {
			background: '#292928',
			heading: '#83b498',
			body: '#aaaa96',
			primary: '#9d9d85',
		},
		fonts: {
			heading: {
				fontFamily: 'Playfair Display',
				fontWeight: '600',
			},
			body: {
				fontFamily: 'Libre Franklin',
				fontWeight: '400',
			},
		},
		button: {
			color: '@colors.primary',
			textColor: '#292928',
			custom: {
				fontFamily: 'Libre Franklin',
				fontWeight: '400',
				borderRadius: '2',
				borderWidth: '1',
				borderColor: '#2d2c25',
				hoverColor: '#c3c497',
				hoverTextColor: '#292928',
				hoverBorderWidth: '1',
				hoverBorderColor: '#2d2c25',
			},
		},
		card: {
			custom: {
				color: '#3e3e3c',
				borderRadius: '4',
				borderWidth: '0',
				borderColor: '#c5c5a9',
				boxShadowHorizontal: '0',
				boxShadowVertical: '0',
				boxShadowBlurRadius: '0',
				boxShadowSpreadRadius: '0',
				boxShadowColor: '#292928',
				titleColor: '#d0d0be',
				hoverColor: '#5a5a58',
				hoverBoxShadowHorizontal: '0',
				hoverBoxShadowVertical: '1',
				hoverBoxShadowBlurRadius: '10',
				hoverBoxShadowColor: '#141414',
				hoverBoxShadowSpreadRadius: '2',
				textColor: '#aaaa96',
				hoverTitleColor: '#e6e6d2',
				hoverTextColor: '#c8c8b4',
			},
		},
		image: {
			custom: {
				borderRadius: '4',
				borderWidth: '1',
				borderColor: '#5d5e50',
			},
		},
		form: {
			custom: {
				borderRadius: '0',
				borderWidth: '2',
				borderColor: '#535350',
				bgColor: '#292928',
				textColor: '#93936c',
				hoverBorderColor: '#93936c',
			},
		},
		section: {
			custom: {
				maxWidth: '5000px',
			},
		},
	},
	presetThree: {
		name: 'Preset three',
		colors: {
			primary: '#25007a',
			background: '#fff6f5',
			heading: '#d62471',
			body: '#982557',
		},
		fonts: {
			heading: {
				fontFamily: 'Comfortaa',
				fontWeight: '700',
			},
			body: {
				fontFamily: 'Karla',
				fontWeight: '500',
			},
		},
		button: {
			color: '@colors.primary',
			textColor: '#fef6f5',
			custom: {
				fontFamily: 'Comfortaa',
				fontWeight: '700',
				borderRadius: '32',
				borderWidth: '3',
				hoverBorderWidth: '3',
				hoverColor: '#6c46c3',
			},
		},
		card: {
			custom: {
				color: '#f4d0cd',
				borderRadius: '28',
				borderWidth: '0',
				titleColor: '#25007a',
				textColor: '#25007a',
				hoverColor: '#ffe8e5',
				hoverBoxShadowVertical: '2',
				hoverBoxShadowBlurRadius: '8',
				hoverBoxShadowColor: '#c19d9a',
				hoverBoxShadowSpreadRadius: '1',
				hoverBoxShadowHorizontal: '0',
				hoverTitleColor: '#3502ac',
				hoverTextColor: '#3501ac',
				boxShadowHorizontal: '0',
				boxShadowVertical: '2',
				boxShadowBlurRadius: '4',
				boxShadowSpreadRadius: '1',
			},
		},
		image: {
			custom: {
				borderRadius: '32',
				borderWidth: 0,
				borderColor: '#ffffff',
			},
		},
		form: {
			custom: {
				borderRadius: '32',
				borderWidth: '3',
				bgColor: '#fef6f5',
				textColor: '#25007a',
				hoverBgColor: '#f4d0cd',
				borderColor: '#25007a',
			},
		},
		section: {
			custom: {
				maxWidth: '1000px',
			},
		},
	},
};
