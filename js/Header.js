import React from 'react';
import AutoSuggest from 'react-auto-suggest';
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


let Header =  React.createClass({

    render() {
        return (
            <Fixed className="header">

                <Layout type="columns">
                    <Flex>

                    </Flex>
                    <Fixed>
                        <DemoSuggest onSuggestion={this.props.onSuggestion} />
                    </Fixed>
                </Layout>
            </Fixed>
        );
    }
});

export default Header;