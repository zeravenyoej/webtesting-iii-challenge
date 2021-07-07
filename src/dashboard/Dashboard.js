import React from 'react';

import Display from '../display/Display';
import Controls from '../controls/Controls';

class Dashboard extends React.Component {
  state = {
    locked: false,
    closed: false,
  };

  render() {
    const { closed, locked } = this.state;

    return (
      <div>
        <Display locked={locked} closed={closed} />
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={this.toggleLocked}
          toggleClosed={this.toggleClosed}
        />
      </div>
    );
  }

  toggleLocked = () => {
    this.setState(prev => ({ locked: !prev.locked }));
  };

  toggleClosed = () => {
    this.setState(prev => ({ closed: !prev.closed }));
  };
}

export default Dashboard;