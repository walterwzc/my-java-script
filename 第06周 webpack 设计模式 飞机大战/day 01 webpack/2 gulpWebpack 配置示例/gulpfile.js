const gulp = require("gulp");
const webpack = require("webpack-stream");

gulp.task("webpack", () => {
	return gulp
		.src('src/scripts/index.js')
		.pipe(webpack({
			output: {
				filename: "bundle.js"
			},
			module: {
				loaders: [
					{
						test: /\.css$/,
						loader: "style-loader!css-loader"
					}
				]
			}
		}))
		.pipe(gulp.dest('dist/'));
});