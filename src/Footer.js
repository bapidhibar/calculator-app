import React from "react";

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (<div>
        <footer className="footer-app">
            Copyright&copy;{year}
        </footer>
    </div>)
}

export default Footer;