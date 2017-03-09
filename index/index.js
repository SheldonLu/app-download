import React from 'react';
import { Button, Radio, Icon } from 'antd';

class ButtonSize extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    console.log(1)
    this.setState({ size: e.target.value });
  }
  onButtonClick = (e) => {
    window.location.href = "/a";
  }

  render() {
    const size = this.state.size;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" icon="download" size={size}>Download</Button>
        <Button type="primary" size={size}>Normal</Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />Backward
          </Button>
          <Button type="primary" onClick={this.onButtonClick}>
            Forward<Icon type="right" />
          </Button>
        </Button.Group>
      </div>
    );
  }
}


module.exports = ButtonSize;
