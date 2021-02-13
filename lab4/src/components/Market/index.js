import React from 'react';
import MarketItem from '../MarketItem/index.js';

class Market extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [""],
      count: 0,
      key: 0
    };
	}

  render () {
    return (
      <div>
        <button onClick={() => {
          {/* this.setState ({count: this.state.count + 1}); */}
          this.setState ({items: this.state.items.concat(MarketItem(this.state))});
          this.setState ({count: this.state.items.length});
          this.setState ({key: this.state.items.length});
        }}>Add Item</button>
        {/* <p>Count: {this.state.count}</p> */}
        <p>Items: {this.state.items.map(x => x)}</p>
      </div>
    )
  }
}

export default Market;
