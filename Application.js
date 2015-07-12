import React from 'react';
import AutoSuggest from 'react-auto-suggest';
import SplitPane from 'react-split-pane';
import Calendar from 'react-calendar-pane';
import TreePane from 'react-tree-pane';
import {Layout, Flex, Fixed} from 'react-layout-pane';



const model = {
    name: 'Default',
    children: [
        { name: 'react-tree-pane', children:[
            {name: 'demo', children: [
                {name: 'bundle.js'},
                {name: 'Example.js'}
            ]},
            {name: 'src', children: [
                {name: 'TreePane.js'}
            ]},
            {name: 'test', children: [
                {name: 'TreePane-test.js'}
            ]},
            {name: 'package.json'}
        ]}
    ]
};


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
                            <SplitPane split="vertical" minSize="50">
                                <div>
                                    <TreePane model={model} />
                                </div>
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