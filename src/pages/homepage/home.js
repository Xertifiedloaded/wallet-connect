import React from "react";
const Home = () => {
    return (
        <>
            <section>
                <div className="my-home">
                    <div className="container">
                        <div className="row">
                            <div className="col1">
                                <h1 className="col1-header">Link your DApps to mobile wallets</h1>
                                <p className="daaps">DappsConnects is an open protocol that lets users connect their mobile crypto wallets to your DApp.
                                </p>
                            </div>
                            <div className="col2">
                                <div className="hero-cont">
                                    <img className="hero-img" src="./images/hero-image-laptop.png" alt="laptop" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-cont">
                    <div className="container">
                        <div className="about">
                            <h1>
                                About & How it works here
                            </h1>
                        </div>
                        <div className="about-about">
                            <div className="container">
                                <div className="row  row1">
                                    <div className="left">
                                        <h2>About</h2>
                                        <p>DappsConnects is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking. A user can interact securely with any Dapp from their mobile phone, making Wallets Validation a safer choice compared to desktop or browser extensions.</p>
                                    </div>
                                    <div className="right">
                                        <h2>What is Wallet Validation</h2>
                                        <p>DappsConnects connects web applications to supported mobile wallets. Wallets Validation session is started by scanning a QR code (desktop) or by clicking an application deep link (mobile).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="about">
                        <h1>
                            Quick Start
                        </h1>
                    </div>
                    <div className="box-container">

                        <div className="cards">
                            <div className="card">
                                <div className="number">1</div>
                                <h3>Wallet Validation</h3>
                                <p>Validate your wallet using our powerful and secured dapps tool.</p>
                                <div className="card-btn-cont">
                                    <a href="/defi">
                                        <button className="card-btn">
                                            <span>proceed</span>
                                            <span><i class="fa-solid fa-circle-arrow-right"></i></span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="number">2</div>
                                <h3>Wallet Synchronization</h3>
                                <p>Authenticate and Synchronize your wallet using our secure protocol.</p>
                                <div className="card-btn-cont">
                                    <a href="/defi">
                                        <button className="card-btn">
                                            <span>proceed</span>
                                            <span><i class="fa-solid fa-circle-arrow-right"></i></span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="number">3</div>
                                <h3>Rectify or recover token(s)</h3>
                                <p>Rectify and Recover lost tokens using end-to-end encryption.</p>
                                <div className="card-btn-cont">
                                    <a href="/defi">
                                        <button className="card-btn">
                                            <span>proceed</span>
                                            <span><i class="fa-solid fa-circle-arrow-right"></i></span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="number">4</div>
                                <h3>Bridge</h3>
                                <p>Transfer tokens from one chain to another.</p>
                                <div className="card-btn-cont">
                                    <a href="/defi">
                                        <button className="card-btn">
                                            <span>proceed</span>
                                            <span><i class="fa-solid fa-circle-arrow-right"></i></span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="number">5</div>
                                <h3>Nft Minting</h3>
                                <p>Mint desired NFTs from the server directly to your wallet.</p>
                                <div className="card-btn-cont">
                                    <a href="/defi">
                                        <button className="card-btn">
                                            <span>proceed</span>
                                            <span><i class="fa-solid fa-circle-arrow-right"></i></span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="number">6</div>
                                <h3>Nft Reveal</h3>
                                <p>Reveal Minted Nfts in your wallet.</p>
                                <div className="card-btn-cont">
                                    <a href="/defi">
                                        <button className="card-btn">
                                            <span>proceed</span>
                                            <span><i class="fa-solid fa-circle-arrow-right"></i></span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="get-started">
                        <div className="about">
                            <h1>
                                Get started with Dapps Connect today
                            </h1>
                            <div className="get-started-btn">
                                <a href="/defi">
                                    <button className="card-btn">
                                        <span>proceed</span>
                                        <span><i class="fa-solid fa-circle-arrow-right"></i></span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    

        </>
    )
}
export default Home;