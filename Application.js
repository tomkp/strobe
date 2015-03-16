var React = require('react');

var Calendar = require('react-calendar-pane');
var AutoSuggest = require('react-auto-suggest');
var Scrollable = require('react-drag-scroll');

var Application = React.createClass({

    suggestions: function() {
        return ['chicken', 'duck', 'elephant', 'zebra', 'penguin', 'dog', 'cat', 'crocodile'];
    },

    suggested: function(suggestion) {
        console.info('suggested', suggestion);
    },

    selectedDate: function(date) {
        console.info('selected date', date);
    },

    render: function() {
        return (
            <section>
                <div>
                    <AutoSuggest suggestions={this.suggestions} onSuggestion={this.suggested} />
                </div>
                <div>
                    <Calendar onSelect={this.selectedDate}/>
                </div>
            </section>
        );
    }
});

React.render(<Application />, document.body);