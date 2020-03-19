import React from 'react';

import ChannelListItem from './ChannelListItem';

export default class ChannelList extends React.Component {
    constructor(props) {
        super(props);


    }

    renderChannelListItem(channelName, channelID) {
        return (
            <ChannelListItem
                channelName={channelName}
                channelID={channelID}
                handleClick={() => this.props.handleClick(channelID)}
            />
        );
    }

    render() {
        return (
            <div className="ChannelList">
                {this.renderChannelListItem("Public", "1234")}
            </div>
        );
    }
}