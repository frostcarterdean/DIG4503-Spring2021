import Express from 'express';

const App = Express();

const port = 45030;

const objectExample = {
    name: "Carter",
	color: "orange"
};

App.post('/', function (request, response) {
	res.send('Hello world!');
});

App.get('/person', function(request, response) {
	res.json(objectExample);
});

// Listen (and start server)
App.listen(port, function(){
    console.log('Server running!');
});