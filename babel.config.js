console.warn('In babel.config.js, root.');

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'entry',
				corejs: 3
			}
		]
	]
};
