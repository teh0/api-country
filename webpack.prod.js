const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
module.exports = {
	// Mode can be 'development' or 'production'
	mode: 'production',
	entry: './src/js/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', {
					loader: 'postcss-loader',
					options: {
						config: {
							ctx: {
								env: 'production'
							}
						}
					}
				}, 'sass-loader']
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}]
			},
			{
				test: /\.php$/,
				loaders: [
				  'html-minify-loader',
				  'php-loader'
				]
			},

			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [{
						loader: 'url-loader',
						options: {
							context: path.join(__dirname, '/src'),
							limit: 0,
							name(file) {
								return '[path][name].[ext]'
							},
						}
					},
					'img-loader',
				]
			}
		],
	},
	plugins: [
		new HtmlwebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery'",
			"window.$": "jquery"
		})
	]
};