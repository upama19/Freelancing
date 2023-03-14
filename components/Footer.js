const Footer = () => {
    return (
        <>
            <div className="container-fluid mt-5 pt-5 px-0">
                <footer className="d-flex justify-content-center align-items-start pt-5" style={{ color: "white" }}>
                    <div className="container px-5 pt-1">
                        <div className="row px-5">
                            <div className="col">
                                <h2 className="mb-4">ROJGARI<span style={{ color: "var(--orange-ball)" }}>.</span></h2>
                                <ul>
                                    <li className="mb-1"><a>Freelancers</a></li>
                                    <li><a>About</a></li>
                                </ul>
                            </div>

                            <div className="col px-5 text-center">
                                <h2 className="mb-4">Contact Us</h2>
                                <ul>
                                    <li className="mb-1">+(977)9861382840</li>
                                    <li><a>www.ROJGARI.com</a></li>
                                </ul>
                            </div>

                            <div className="col" style={{ textAlign: "end" }}>
                                <h2 className="mb-4">Follow Us</h2>
                                <div className="footer-social-links" style={{ paddingRight: "2rem" }}>
                                    <a className="d-inline mx-2"><i className="fa fa-facebook"></i></a>
                                    <a className="d-inline mx-2"><i className="fa fa-instagram"></i></a>
                                    <a className="d-inline mx-2"><i className="fa fa-envelope"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid px-5">
                            <div className="line" style={{ backgroundColor: "var(--white)" }}></div>
                        </div>

                        <div className="container-fluid px-5">
                            <p>@2023Rojgari. All rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    );
};

export default Footer;