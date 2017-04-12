var React = require('react');
var reactDOM = require('react-dom');
var io = require('socket.io-client');
var socket = io.connect();

var Container = React.createClass({
	render: function(){
		return (
			<h1>hi</h1>
		)
	}
})

reactDOM.render(<Container />, document.getElementById('app'))
