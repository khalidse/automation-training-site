// app/routes.js
module.exports = function(app) {
	// file system
	var fs       = require('fs');





	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.ejs'); // load the index.ejs file

	});



	// pages
	 app.get('/home', function(req, res) {
		res.sendfile('views/home.html');
	});

    app.get('/inputs', function(req, res) {
		res.sendfile('views/inputs.html');
	});
		app.get('/inputs2', function(req, res) {
		res.sendfile('views/inputs2.html');
	});

	app.get('/inputs3', function(req, res) {
	res.sendfile('views/inputs3.html');
	});

	app.get('/inputsadvanced', function(req, res) {
		res.sendfile('views/inputsadvanced.html');
	});

	app.get('/inputsadvanced2', function(req, res) {
		res.sendfile('views/inputsadvanced2.html');
	});

	app.get('/inputsadvanced3', function(req, res) {
		res.sendfile('views/inputsadvanced3.html');
	});

	app.get('/tables', function(req, res) {
		res.sendfile('views/tables.html');
	});
	app.get('/tables2', function(req, res) {
		res.sendfile('views/tables2.html');
	});
	app.get('/tables3', function(req, res) {
		res.sendfile('views/tables3.html');
	});

	app.get('/dropdown', function(req, res) {
		res.sendfile('views/dropdown-list.html');
	});

	app.get('/dropdown2', function(req, res) {
		res.sendfile('views/dropdown-list2.html');
	});
	app.get('/dropdown3', function(req, res) {
		res.sendfile('views/dropdown-list3.html');
	});

	app.get('/advanced', function(req, res) {
		res.sendfile('views/advanced.html');
	});

	app.get('/labelsandbuttons', function(req, res) {
		res.sendfile('views/labelsandbuttons.html');
	});

	app.get('/labelsandbuttons2', function(req, res) {
		res.sendfile('views/labelsandbuttons2.html');
	});

	app.get('/labelsandbuttons3', function(req, res) {
		res.sendfile('views/labelsandbuttons3.html');
	});

	app.get('/checkbox', function(req, res) {
		res.sendfile('views/checkbox.html');
	});

	app.get('/elements', function(req, res) {
		res.sendfile('views/elements.html');
	});

	app.get('/practice', function(req, res) {
		res.sendfile('views/practice.html');
	});


	app.get('/savedata', function(req, res) {
		res.sendfile('views/savedata.html');
	});

	app.get('/storage', function(req, res) {
		res.sendfile('views/storage.html');
	});

	app.get('/webservices' , function(req ,res){
		res.sendfile('views/webservices.html');
	});

	// API for Testing =============================================================

	var emp = '{"employees":[{"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}],"info":[{"gender":"male", "country":"jordan"},{"gender":"female", "country":"US"},{"gender":"female", "country":"france"}]}'
	app.get('/employees', function(req,res) {
		res.send(emp);
	});


	app.get('/employees/:name', function(req,res) {
		var parsemp = JSON.parse(emp);
		var result = [];
		 for (var i = 0; i < parsemp.employees.length; i++) {
		 	if(parsemp.employees[i].firstName.toLowerCase() == req.params.name.toLowerCase()){
		 		result.push(parsemp.employees[i]);
		 		result.push(parsemp.info[i])
		 		res.send(result);
		 		break;
		 	}else if(parsemp.employees[i].firstName.toLowerCase() != req.params.name.toLowerCase()
		 		&& i == (parsemp.employees.length - 1)){
		 		res.send({message:"sorry , the first name '" + req.params.name + "' is not exists"});
		 	}


		 };
	});

	app.get('/food', function(req,res){
		res.sendfile('assets/food.xml');
	});

};
