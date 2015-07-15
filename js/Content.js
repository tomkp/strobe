import React from 'react';
import {Layout, Flex, Fixed} from 'react-layout-pane';

import SplitPane from 'react-split-pane';
import Calendar from 'react-calendar-pane';
import TreePane from 'react-tree-pane';



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



let Content =  React.createClass({
    render() {
        return (
            <Flex className="content">
                <Layout type="columns">
                    <Fixed className="calendar-pane">
                        <Calendar onSelect={this.props.onSelect}/>
                    </Fixed>
                    <Flex>
                        <SplitPane split="vertical" minSize="50">
                            <div>
                                <DemoTree />
                            </div>
                            <div>
                                <SplitPane split="horizontal">
                                    <div>x</div>
                                    <div>y</div>
                                </SplitPane>
                            </div>
                        </SplitPane>
                    </Flex>
                </Layout>
            </Flex>
        )
    }
});

export default Content;