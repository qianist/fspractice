const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello Express');
	console.log('Receiving request...');
});

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});

