// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithWrapperDiv =
      React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          className: this.props.theme
        })
      })

    return <div>
      {childrenWithWrapperDiv}
    </div>
  }
}

export default ThemedDecorations
