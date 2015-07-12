import React from 'react';
import AutoSuggest from 'react-auto-suggest';
import SplitPane from 'react-split-pane';
import Calendar from 'react-calendar-pane';
import TreePane from 'react-tree-pane';
import {Layout, Flex, Fixed} from 'react-layout-pane';


import jsonp from 'jsonp';



let Custom = React.createClass({

    render() {
        var suggestion = this.props.suggestion;
        let classes = ['Suggestion'];
        if (this.props.selected) {
            classes.push('selected');
        }
        return (
            <div className={classes.join(' ')} data-suggestion={suggestion.title}>
                <span className="titles">
                    <div className="series-title">{suggestion.seriesName?suggestion.seriesName:''}</div>
                    <div className="title">{suggestion.title}</div>
                </span>
            </div>
        );
    }
});


let DemoSuggest = React.createClass({

    suggestions: function(value, callback) {
        jsonp('http://api.search.sky.com/query.json?category=newtv&term=' + value, function(err, data) {
            if (!err) {
                if (data.searchResults) {
                    var results = data.searchResults.map(function (result) {
                        return result;
                    });
                    callback(results);
                }
            }

        })
    },

    onSuggestion: function(suggestion) {
        this.props.onSuggestion(suggestion);
    },

    onSelect: function(suggestion) {
        return suggestion.title;
    },


    render: function() {
        return (
            <AutoSuggest suggestions={this.suggestions} onSuggestion={this.onSuggestion} onSelect={this.onSelect}>
                <Custom />
            </AutoSuggest>
        );
    }

});


let DemoTree = React.createClass({

    getInitialState() {
        return {
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
        }
    },


    render() {
        return <TreePane model={this.state} />
    }
}); 


let Application = React.createClass({


    onSuggestion(suggestion) {
        console.info('suggested', suggestion);
    },

    selectedDate(date) {
        console.info('selected date', date);
    },

    render() {
        return (
            <Layout type="rows">
                <Fixed className="header">
                    <DemoSuggest onSuggestion={this.onSuggestion} />
                </Fixed>
                <Flex className="content">
                    <Layout type="columns">
                        <Fixed>
                            <Calendar onSelect={this.selectedDate}/>
                        </Fixed>
                        <Flex>
                            <SplitPane split="vertical" minSize="50">
                                <div>
                                    <DemoTree />
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