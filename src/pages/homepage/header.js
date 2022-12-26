import React from "react";
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="logo-nav">
                        <div className="logo">
                            <div className="logo-img-cont">
                                <a href="/">
                                    <img className="header-logo" src="./logo/logo.png" alt="hello" />
                                </a>
                            </div>
                            <div className="title">
                                <h4>wallet connect</h4>
                            </div>
                        </div>
                        <nav className="nav">
                            <a href="/defi">
                                <button className="nav-btn">connect</button>
                          </a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;