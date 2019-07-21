import * as React from 'react';
import { Link as RouterLink } from 'react-router';
import Radium from 'radium';
import Sidebar, { SidebarStyles } from 'react-sidebar';
import imageData from './gravatarImage';

let Link = Radium(RouterLink);

const sidebarStyles: SidebarStyles = {
  sidebar: { width: '150px' },
  overlay: { width: '150px', backgroundColor: 'white' },
};

function CloseButton({ close }) {
  return (
    <a onClick={close} href="#" style={{ float: 'right', marginTop: '-10px' }}>
      X
    </a>
  );
}

export default function Navigation(props: { children: React.ReactNode }) {
  const [side, changeSide] = React.useState('right');
  const docked = useDocked();
  const [sidebarOpen, changeSidebarOpen] = React.useState(false);

  function closeSidebar() {
    changeSidebarOpen(false);
  }

  function toggleOpen() {
    changeSidebarOpen(!sidebarOpen);
  }

  const sidebarContent = (
    <div>
      {!docked ? <CloseButton close={closeSidebar} /> : null}
      <img id="nav-display-picture" src={imageData} alt="Me (Amit)" />
      <br />
      <div className="nav-link">
        <Link onClick={closeSidebar} to="/" className="menu-item">
          <strong>Home</strong>
        </Link>
      </div>
      <div className="nav-link">
        <Link onClick={closeSidebar} to="/about" className="menu-item">
          <strong>About</strong>
        </Link>
      </div>
      <div className="nav-link">
        <Link onClick={closeSidebar} to="/blog" className="menu-item">
          <strong>Blog</strong>
        </Link>
      </div>
      <div className="nav-link">
        <Link onClick={closeSidebar} to="/contact" className="menu-item">
          <strong>Contact</strong>
        </Link>
      </div>
    </div>
  );

  return (
    <Sidebar
      sidebar={sidebarContent}
      open={sidebarOpen}
      docked={docked}
      onSetOpen={changeSidebarOpen}
      styles={sidebarStyles}
      touch={false}
      shadow={false}
    >
      <span>
        {!docked ? (
          <a onClick={toggleOpen} href="#" className="content-header-menu-link">
            =
          </a>
        ) : (
          undefined
        )}
      </span>
      {props.children}
    </Sidebar>
  );
}

function useDocked() {
  const [docked, changeDocked] = React.useState(window.innerWidth > 650);
  React.useEffect(() => {
    function update(e) {
      changeDocked((e.currentTarget as Window).innerWidth > 650);
    }

    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    };
  }, [docked]);
  return docked;
}
