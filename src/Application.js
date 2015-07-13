import React from 'react';

import {Layout, Flex, Fixed} from 'react-layout-pane';

import Sidebar from './Sidebar.js';
import Header from './Header.js';
import Content from './Content.js';


import jsonp from 'jsonp';






let Application = React.createClass({


    onSuggestion(suggestion) {
        console.info('suggested', suggestion);
    },

    selectedDate(date) {
        console.info('selected date', date);
    },

    render() {
        return (
            <Layout type="columns">

                <Sidebar />

                <Flex>
                    <Layout type="rows">

                        <Header onSuggestion={this.onSuggestion} />

                        <Content onSelect={this.selectedDate} />

                    </Layout>
                </Flex>
            </Layout>
        );
    }
});

React.render(<Application />, document.body);