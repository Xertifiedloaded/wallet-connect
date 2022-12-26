import React, { useEffect, useState } from "react"


const Wallet = () => {
    const showIcon = () => {
        let hide = document.querySelector(".hide")
        hide.classList.replace("hide", "show")
    }
    const removeIcon = () => {
        console.log("hi")
        let show1 = document.querySelector(".show")
        console.log(show1)
        show1.classList.replace("show", "hide")
    }
    const [value, setValue] = useState("wallet-connect")
    // const [open, setOpen] = useState(false)
    useEffect(() => {
        let handler = () => {

        }
        document.addEventListener("click", handler)
    }, [])
    return (
        <>
            <section>
                <div className="my-home">
                    <div className="container">
                        <div className="connect">
                            <h1 className="connect-heading">connect wallet</h1>
                            <p>Multiple iOS and Android wallets support this protocol. Your private keys are encrypted locally on your device with a secure enclave, protected by Biometric and 2-Factor Authentication.</p>
                        </div>
                        <div className="wallets">
                            <div className="wallet one " onClick={showIcon} >
                                <div onClick={() => setValue("wallet connect")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./logo.png" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p className="wallet-connect">Wallet connect</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Rainbow")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/rainbow.png" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Rainbow</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Trust wallet")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/trust.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Trustwallet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("argent")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/argent.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Argent</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Metamask")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/meta.png" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Metamask</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Binance")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/binance.png" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Binance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Safenoon")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/safemoon.png" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Safemoon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue('Gnosis Safe')}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/gnosis.avif" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Gnosis Safe</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Defi")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/defi.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Defi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Pillar")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/pillar.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Pillar</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet">
                                <div onClick={() => setValue("ImToken")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/imtoken.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>ImToken</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet">
                                <div onClick={() => setValue("Onto")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/onto.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Onto</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Token Pocket")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/token.png" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>TokenPocket</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Aave")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/aave.png" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Aave</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("digitex")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/digitex.png" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Digitex</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("coinbase")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/coinbase.png" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>coinbase</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("phontem")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/phontem.svg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Phontem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("phantom")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/phantom.jpg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Phantom</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("petra")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/petra.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Petra</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("martian")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/martian.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Martian</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("portis")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/portis.svg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Portis</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("mathWallet")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/mathwallet.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>MathWallet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Bitpay")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/bitpay.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Bitpay</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Ledger")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/ledger.avif" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Ledger</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("wallETH")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/wall.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>WallETH</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Authereum")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/authereum.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Authereum</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("dharma")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/dharma.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Dharma</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("1inch")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/1inch.avif" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>1inch</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("houbi")}>

                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/houbi.avif" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Houbi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Eidoo")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/eidoo.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Eidoo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("loopring")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/loop.avif" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Loopring</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("TrustVault")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/vault.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name" onClick={showIcon}>
                                        <p>TrustVault</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Atomic")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/atomic.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Atomic</p>
                                    </div>
                            </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("coin98")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/coin98.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Coin98</p>
                                    </div>
                              </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("Tron")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/tron.png" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Tron</p>
                                    </div>
                            </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("alice")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/alice.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Alice</p>
                                    </div>
                              </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("safepal")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/safepal.png" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Safepal</p>
                                    </div>
                            </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("infinito")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/infinito.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Infinito</p>
                                    </div>
                             </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("wallet.io")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/wallet.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Wallet.io</p>
                                    </div>
                              </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("paytube")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/paytube.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>PayTube</p>
                                    </div>
                            </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("AT.wallet")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/at-wallet.jpeg" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>AT.wallet</p>
                                    </div>
                              </div>
                            </div>
                            <div className="wallet" onClick={showIcon}>
                                <div onClick={() => setValue("kyberswap")}>
                                    <div className="wallet-img-cont">
                                        <img className="wallet-img" src="./images/kyberswap.webp" alt="logo" />
                                    </div>
                                    <div className="wallet-name">
                                        <p>Kyberswap</p>
                                    </div>
                             </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="connect">
                    <div className="connect-wallet hide">
                        <div className="container">
                            <i class="fa-solid fa-xmark" onClick={removeIcon}></i>
                        </div>
                        <div className="container">
                            {/* <div className="container">
                                <i class="fa-solid fa-xmark" onClick={showIcon}></i>
                            </div> */}
                            <div className="manual">
                                <div className="status">
                                    <h5>Error Connecting</h5>
                                </div>
                                <div className="manual-btn">
                                    <a href="/connect"> <button className="manually">connect manually</button></a>
                                </div>
                            </div>
                            <div className="wallet-name1">
                                <p className="value">{value}</p>
                                <p>Connect to {value} and More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Wallet