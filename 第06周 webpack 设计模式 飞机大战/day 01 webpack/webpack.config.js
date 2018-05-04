const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module:{
  	loaders:[
  		{
  			test:/\.css$/,
  			loader:"style-loader!css-loader"
  		},
  		{
  			test:path.join(__dirname,"es6"),
            loader:"babel-loader",
            query:{
                presets:["env"]//输出的时候用什么规则进行编译;
            }
  		}
  	]
  },
  plugins:[
  		new webpack.BannerPlugin("hello world")
  ]
};
