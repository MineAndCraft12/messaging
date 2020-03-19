import React from 'react';

export default class InputPanel extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className="InputPanel">
                <input className="InputPanelTextarea"></input>
                <div className="InputPanelSendButton"></div>
            </div>
        );
    }
}