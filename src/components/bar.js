import React from "react";
import Sidebar from "react-sidebar";
import Menu from "./menu"


const mql = typeof window !== 'undefined' && window.matchMedia(`(min-width: 800px)`)

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    typeof window !== 'undefined' && mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    typeof window !== 'undefined' && mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    typeof window !== 'undefined' && this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <Sidebar
        sidebar={<Menu/>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      > 
        {this.props.children}
      </Sidebar>
    );
  }
}

export default Bar;