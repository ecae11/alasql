/*
//
// HELP for Alasql.js
// Date: 03.11.2014
// (c) 2014, Andrey Gershun
//
*/

yy.Source = function (params) { return yy.extend(this, params); }
yy.Source.prototype.toString = function() {
	var s = 'SOURCE';
	if(this.url) s += ' '+this.url;
	return s;
}

// SOURCE FILE
yy.Source.prototype.execute = function (databaseid) {
//	console.log(this.url);
	loadFile(this.url, function(data){
//		console.log(data);
		alasql(data);
	}, function(err){
		throw err;
	});
	return 1;
};