import React from "react";
import Sidebar from "react-sidebar";
import Menu from "./menu"

let window = require("global/window")
const mql = window.matchMedia(`(min-width: 800px)`);

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
      width: 200
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <Sidebar
        sidebar={<Menu/>}
        open={this.state.sidebarOpen}
        defaultSidebarWidth={this.state.width}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      > 
        {this.props.children}
      </Sidebar>
    );
  }
}

export default Bar;