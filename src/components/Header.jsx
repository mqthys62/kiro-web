import React from 'react'

export default function Header() {
    return (
        <>
            <div className="headerContainer">
                <div className="main--container">
                    <div className="custom-flex">
                        <div className="custom-flex--column" data-aos="fade-right" data-aos-duration="2000">
                            <div className="title">Obtenez vos</div>
                            <div className="subtitle-group">
                                <div className="subtitle">Jetons Kiro</div>
                                <div className="paragraph">Dès maintenant !</div>
                            </div>
                        </div>
                        <div className="custom-flex--column" data-aos="fade-up" data-aos-duration="2000">
                            <div className="img-header"></div>
                        </div>
                    </div>
                    <section  data-aos="fade-in" id="section07" class="demo">
                        <div><span></span><span></span><span></span></div>
                    </section>
                </div>
            </div>
        </>
    )
}
