import React, { Component } from "react"

class Header extends Component {
    render() {
        return (<div class="wrapper">
            <div class="container w-container">
                <a href="/" class="link-block w-inline-block">
                    <img src="https://assets.website-files.com/5cdda85fdd56267f267e339e/5cdda94be09fa52cc17746c3_satisfactory_logo_lg.png" srcset="https://assets.website-files.com/5cdda85fdd56267f267e339e/5cdda94be09fa52cc17746c3_satisfactory_logo_lg-p-500.png 500w, https://assets.website-files.com/5cdda85fdd56267f267e339e/5cdda94be09fa52cc17746c3_satisfactory_logo_lg.png 885w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 436.796875px, 564px" alt="" class="image-11"/></a>
                    <div class="div-block">
                        <div data-delay="0" class="dropdown w-dropdown" role="menu">
                            <div class="w-dropdown-toggle" tabindex="0" aria-controls="w-dropdown-toggle-0" aria-haspopup="menu">
                                <div class="w-icon-dropdown-toggle"></div><div class="text-block-3">ABOUT</div></div>
                                
                                <nav class="w-dropdown-list" id="w-dropdown-toggle-0">
                                    <a href="/about" class="dropdown-link blue w-dropdown-link w--current" tabindex="-1" role="menuitem" >About Us</a>
                                    <a href="/meet-shopcat" class="dropdown-link w-dropdown-link" tabindex="-1" role="menuitem" >Meet ShopCat</a>
                                    <a href="/tour-the-shop" class="dropdown-link w-dropdown-link" tabindex="-1" role="menuitem" >Take the Tour</a></nav></div>
                                    <div data-delay="0" class="dropdown w-dropdown" role="menu">
                                        <div class="w-dropdown-toggle" tabindex="0" aria-controls="w-dropdown-toggle-1" aria-haspopup="menu" >
                                        
                                        <div class="w-icon-dropdown-toggle"></div>
                                        <div class="text-block-3">SERVICES</div></div>
                                        
                                        <nav class="w-dropdown-list" id="w-dropdown-toggle-1"><a href="/apparel-screenprinting" class="dropdown-link blue w-dropdown-link" tabindex="-1" role="menuitem" >Apparel Screenprinting</a>
                                        <a href="/graphic-design" class="dropdown-link w-dropdown-link" tabindex="-1" role="menuitem" >Graphic Design</a>
                                        <a href="/greek-licensing" class="dropdown-link w-dropdown-link" tabindex="-1" role="menuitem" >Greek Licensing</a></nav></div>
                                        <div data-delay="0" class="dropdown w-dropdown" role="menu">
                                            <div class="w-dropdown-toggle" tabindex="0" aria-controls="w-dropdown-toggle-2" aria-haspopup="menu" >
                                                <div class="w-icon-dropdown-toggle"></div>
                                                    <div class="text-block-3">CLIENTS&nbsp;TOOLS</div>
                                            </div>
                                                <nav class="w-dropdown-list" id="w-dropdown-toggle-2"><a href="/popular-garments" class="dropdown-link blue w-dropdown-link" tabindex="-1" role="menuitem" >Popular Garments</a>
                                                <a href="/artwork-requirements" class="dropdown-link w-dropdown-link" tabindex="-1" role="menuitem" >Artwork Requirements</a>
                                                <a href="/payment-and-shipping" class="dropdown-link w-dropdown-link" tabindex="-1" role="menuitem" >Payment &amp; Shipping</a>
                                                    </nav>
                                                </div>
                                            <a href="/old-home" class="button w-button">ENAMEL&nbsp;PINS</a><a href="/quote-request" class="button w-button">CONTACT</a>
                                        </div>
                                    </div>
        </div>
        )
    }
}

export default Header;