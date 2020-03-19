import React from 'react';

import ChannelList from './ChannelList';
import ChannelView from './ChannelView';
import InputPanel from './InputPanel';

export default class App extends React.Component {
    constructor(props) {
        super(props);


    }

    selectChannel(channelID) {
        // TODO: pass the channelID to the ChannelView
        alert(channelID);
    }

    render() {
        return (
            <div className="App">
                <ChannelList
                    handleClick={channelID => this.selectChannel(channelID)}
                />
                <ChannelView />
                <InputPanel />
            </div>
        );
    }
}