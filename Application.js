var React = require('react');

var Calendar = require('react-calendar-pane');
var AutoSuggest = require('react-auto-suggest');
var Scrollable = require('react-drag-scroll');

var Application = React.createClass({

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
                    <AutoSuggest onSuggestion={this.suggested} />
                </div>
                <div>
                    <Calendar onSelect={this.selectedDate}/>
                </div>
                <div>
                    <Scrollable />
                </div>
            </section>

        );
    }
});

React.render(<Application />, document.body);