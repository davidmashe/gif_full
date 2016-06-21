module.exports = {
 // entry: ["./public/script/ajax.js" , "./public/script/app.jsx"],
entry: "./public/script/app.jsx",
 output: {
   filename: "public/bundle.js"
 },
 module: {

   loaders: [
     {
       test: [/\.js$/, /\.es6$/, /\.jsx$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6',]
 }
}
