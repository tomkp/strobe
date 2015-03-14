var Calendar = require('react-calendar-pane');
var React = require('react');


var Example = React.createClass({

    render: function() {
        return (
            <Calendar />
        );
    }

});

React.render(<Example />, document.body);