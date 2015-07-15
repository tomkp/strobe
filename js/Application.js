import React from 'react';

import {Layout, Flex, Fixed} from 'react-layout-pane';

import Sidebar from './Sidebar.js';
import Header from './Header.js';
import Content from './Content.js';



let Application = React.createClass({


    onSuggestion(suggestion) {
        console.info('suggested', suggestion);
    },

    onSelect(date) {
        console.info('selected date', date);
    },

    render() {
        return (
            <Layout type="columns">

                <Sidebar />

                <Flex>
                    <Layout type="rows">

                        <Header onSuggestion={this.onSuggestion} />

                        <Content onSelect={this.onSelect} />

                    </Layout>
                </Flex>
            </Layout>
        );
    }
});

React.render(<Application />, document.getElementById('react'));