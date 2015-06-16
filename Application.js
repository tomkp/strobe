import React from 'react';
import AutoSuggest from 'react-auto-suggest';
import SplitPane from 'react-split-pane';
import Calendar from 'react-calendar-pane';
import {Layout, Flex, Fixed} from 'react-layout-pane';


let Application = React.createClass({

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
            <Layout type="rows">
                <Fixed className="header">
                    <AutoSuggest suggestions={this.suggestions} onSuggestion={this.suggested} />
                </Fixed>
                <Flex className="content">
                    <Layout type="columns">
                        <Fixed>
                            <Calendar onSelect={this.selectedDate}/>
                        </Fixed>
                        <Flex>
                            <SplitPane>
                                <div>left</div>
                                <div>right</div>
                            </SplitPane>
                        </Flex>
                    </Layout>
                </Flex>
            </Layout>
        );
    }
});

React.render(<Application />, document.body);