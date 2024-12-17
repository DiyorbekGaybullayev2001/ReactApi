import Homepage from "../homepage/homepage";

const Layout = ({ children }) => {
    return (
      <div className="layout">
        <Homepage/>
        <main className="main-content">{children}</main>
      </div>
    );
  };

  export default Layout;