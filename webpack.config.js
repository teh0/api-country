const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
	// Mode can be 'development' or 'production'
	mode: 'development',
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
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', {loader: MiniCssExtractPlugin.loader, options:{ publicPath: '../'}}, 'css-loader','postcss-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', {loader: MiniCssExtractPlugin.loader, options:{ publicPath: '../'}}, 'css-loader','postcss-loader','sass-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					'url-loader?limit=10000',
					'img-loader'
				]
			},
			{
				test: /\.php$/,
				loaders: [
				  'html-minify-loader',
				  'php-loader'
				]
			},
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
	],
};