import * as React from "react";
import { Link as RouterLink } from "react-router";
import Radium from "radium";
import Sidebar, { SidebarStyles } from "react-sidebar";
import imageData from "./gravatarImage";

let Link = Radium(RouterLink);

const selfStyle: React.CSSProperties = {
  width: 100,
  height: 100,
  borderRadius: "50%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: 20
};

const linkStyle: React.CSSProperties = {
  flex: 1,
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  marginBottom: 20
};

const contentHeaderMenuLink: React.CSSProperties = {
  textDecoration: "none",
  color: "black",
  padding: 10,
  fontSize: 40
};

const sidebarStyles: SidebarStyles = {
  sidebar: { width: "150px" },
  overlay: { width: "150px", backgroundColor: "white" }
};

export default class Navigation extends React.PureComponent<
  { children: React.ReactNode },
  { side: "right" | "left"; docked: boolean; sidebarOpen: boolean }
> {
  constructor(props) {
    super(props);
    this.state = {
      side: "right",
      docked: window.innerWidth > 650,
      sidebarOpen: false
    };

    window.addEventListener("resize", e => {
      this.setState({ docked: (e.currentTarget as Window).innerWidth > 650 });
    });
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  };

  toggleOpen = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  closeSidebar = () => {
    this.setState({ sidebarOpen: false });
  };

  render() {
    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a onClick={this.toggleOpen} href="#" style={contentHeaderMenuLink}>
            =
          </a>
        )}
      </span>
    );

    const closeButton = (
      <a
        onClick={this.closeSidebar}
        href="#"
        style={{ float: "right", marginTop: "-10px" }}
      >
        X
      </a>
    );

    const sidebarContent = (
      <div>
        {!this.state.docked ? closeButton : null}
        <img style={selfStyle} src={imageData} alt="Me (Amit)" />
        <br />
        <div style={linkStyle}>
          <Link onClick={this.closeSidebar} to="/" className="menu-item">
            <strong>Home</strong>
          </Link>
        </div>
        <div style={linkStyle}>
          <Link onClick={this.closeSidebar} to="/about" className="menu-item">
            <strong>About</strong>
          </Link>
        </div>
        <div style={linkStyle}>
          <Link onClick={this.closeSidebar} to="/blog" className="menu-item">
            <strong>Blog</strong>
          </Link>
        </div>
        <div style={linkStyle}>
          <Link onClick={this.closeSidebar} to="/contact" className="menu-item">
            <strong>Contact</strong>
          </Link>
        </div>
      </div>
    );

    return (
      <Sidebar
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        docked={this.state.docked}
        onSetOpen={this.onSetSidebarOpen}
        styles={sidebarStyles}
        touch={false}
        shadow={false}
      >
        {contentHeader}
        {this.props.children}
      </Sidebar>
    );
  }
}
