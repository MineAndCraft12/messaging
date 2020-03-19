import React from 'react';

export default class ChannelListItem extends React.Component {
    /* props:
        channelName
        channelID
        handleClick
    */

    constructor(props) {
        super(props);
        

    }

    render() {
        return (
            <div className="ChannelListItem"
                onClick={() => this.props.handleClick(this.props.channelID)}
            >
                {this.props.channelName}
            </div>
        );
    }
}