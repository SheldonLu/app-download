import React from 'react';
import { Button } from 'antd';

class ButtonSize2 extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
    delayLoading: false,
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }
  delayLoading = () => {
    this.setState({
      delayLoading: true,
    });

    setTimeout(() => this.setState({
      delayLoading: false,
    }), 150);
  }

  backClick = function(){
    window.location.href = "/"
  }

  render() {
    return (
      <div>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          Click me!
        </Button>
        <Button type="primary" loading={this.state.delayLoading} onClick={this.delayLoading}>
          Won&apos;t show loading
        </Button>
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
        <Button type="primary"  onClick={this.backClick}>
           Back!
        </Button>
      </div>
    );
  }
}

module.exports = ButtonSize2;
