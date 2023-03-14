import Link from "next/link";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Script from "next/script";


const Home = () => {

  return (
    <>
      <NavBar />

      <main>
        <div className="container-fluid" style={{ marginTop: "-56px" }}>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="header-content px-5">
                <div className="content">
                  <h1 className="fw-bold">Find out talented <span>freelancer.</span></h1>
                  <p style={{ fontweight: "600" }}>Freelancer with better ratings and <br />high profile.</p>
                </div>
                {/* <div className="input-group " style={{ width: "60%" }}>
                  <input type="search" className="form-control rounded" placeholder="Eg. Electrician "
                    aria-label="Search" aria-describedby="search-addon" />
                  <button type="button" className="btn "
                    style={{ backgroundColor: "var(--orange-ball)", color: "var(--white)" }}>Search</button>
                </div> */}
              </div>
            </div>
            <div className="col-12 col-lg-6 banner">
            </div>
          </div>
        </div>

        <div className="container-fluid px-5 pt-5">
          <div className="line"></div>
        </div>

        <div className="container-fluid pt-5">
          <h1 className="text-center fw-bold">How It Works</h1>

          <div className="row how-it-works-row">
            <div className="col-12 col-md-4">
              <div className="box-style m-5 p-3">

                <div style={{ fontSize: "5rem", textAlign: "center" }}><i className="fa fa-map-marker"></i></div>



                <h1>Find the best Freelancer easily</h1>
                <p>
                  Get the best certified freelancers in Nepal. Pick your choices based on reviews, ratings and
                  potfolio.

                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="box-style m-5 p-3">


                <div className="five-star py-5" style={{ fontSize: '1.5rem', textAlign: 'center', height: '120px' }}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <h1>Review and Rating system</h1>
                <p>Authentic recommendation system so that you can get
                  best
                  service possible.</p>

              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="box-style m-5 p-3">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "120px" }}>
                  <img className="booking-icon" src="images/booking.png" alt="booking" />
                </div>
                <h1>
                  Easy Booking service
                </h1>
                <p>Choose the freelacer best fit for your service and book easily via our website.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid find-great-work px-5 pt-5 mt-5">
          <div className="find-great-work-image"></div>

          <div className="find-great-work-content">
            <h1>Find Great Work</h1>
            <p>
              Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.
            </p>
          </div>
        </div>

        <div className="container our-services pt-5 mt-5 ">
          <h1 className="align-center mb-5">Our Services</h1>

          <div className="row">
            <div className="col-12 col-md-3">
              <Link href="/talentRecords?servicesOffered=Maid">
                <a style={{ textDecoration: "none", color: "black" }}>
                  <div className="service-box shadow-sm">
                    <img className="mt-4" src="./images/housekeeper.png" alt="" />
                    <p className="mt-3" >Maid</p>
                  </div>
                </a>
              </Link>
            </div>




            <div className="col-12 col-md-3">
              <Link href="/talentRecords?servicesOffered=Tutor">
                <a style={{ textDecoration: "none", color: "black" }}>
                  <div className="service-box shadow-sm">
                    <img src="/images/teacher.png" alt="" className="mt-4" />
                    <p className="mt-3">Tutor</p>
                  </div>
                </a>

              </Link>

            </div>
            <div className="col-12 col-md-3">
              <Link href="/talentRecords?servicesOffered=Developer">
                <a style={{ textDecoration: "none", color: "black" }}>
                  <div className="service-box shadow-sm">
                    <img src="/images/coding.png" alt="" className="mt-4" />
                    <p className="mt-3">Developer</p>
                  </div>
                </a>

              </Link>
            </div>
            <div className="col-12 col-md-3">
              <Link href="/talentRecords?servicesOffered=Painter">
                <a style={{ textDecoration: "none", color: "black" }}>
                  <div className="service-box shadow-sm">
                    <img src="/images/painter.png" alt="" className="mt-4" />
                    <p className="mt-3">Painter</p>
                  </div>
                </a>

              </Link>
            </div>
            <div className="col-12 col-md-3">
              <Link href="/talentRecords?servicesOffered=Gardener">
                <a style={{ textDecoration: "none", color: "black" }}>
                  <div className="service-box shadow-sm">
                    <img src="/images/gardener.png" alt="" className="mt-4" />
                    <p className="mt-3">Gardener</p>
                  </div>
                </a>

              </Link>
            </div>
            <div className="col-12 col-md-3">
              <Link href="/talentRecords?servicesOffered=Beautician">
                <a style={{ textDecoration: "none", color: "black" }}>
                  <div className="service-box shadow-sm">
                    <img src="/images/makeup.png" alt="" className="mt-4" />
                    <p className="mt-3">Beautician</p>
                  </div>

                </a>
              </Link>
            </div>
            <div className="col-12 col-md-3">
              <Link href="/talentRecords?servicesOffered=Plumber">
                <a style={{ textDecoration: "none", color: "black" }}>
                  <div className="service-box shadow-sm">
                    <img src="/images/plumber.png" alt="" className="mt-4" />
                    <p className="mt-3">Plumber</p>
                  </div>
                </a>

              </Link>
            </div >
            <div className="col-12 col-md-3">
              <Link href="/talentRecords?servicesOffered=Graphic%20Design">
                <a style={{ textDecoration: "none", color: "black" }}>
                  <div className="service-box shadow-sm">
                    <img src="/images/graphic-design.png" alt="" className="mt-4" />
                    <p className="mt-3">Graphic Design</p>
                  </div>
                </a>

              </Link>
            </div>
          </div >

          <div style={{ textAlign: "center" }} className="see-more mt-5">
            <Link href="/services">
              <a className="btn see-more-btn">See More</a>
            </Link>
          </div>
        </div >

        <div className=" container-fluid mt-5 px-5 pt-5">
          <div className="advertisement d-flex">
            <div className="ad-content p-5">
              <h1><b>Whole world of <br /> freelancer<br /> talent at your finger tip</b></h1>

              <ul className="fa-ul mt-4" style={{ fontSize: "1.125rem" }}>
                <li><span className="fa-li"><i className="fa fa-lg fa-check-circle"></i></span> Best for every budget
                  <ul style={{ listStyleType: "none" }}>
                    <li className="mb-3" style={{ lineHeight: "1.5rem" }}>Select potential fits for your job, negotiate rates, and only pay for work you approve.
                    </li>
                  </ul>
                </li>

                <li><span className="fa-li"><i className="fa fa-lg fa-check-circle"></i></span> Quality work done
                  quickly
                  <ul style={{ listStyleType: "none" }}>
                    <li style={{ lineHeight: "1.5rem" }}>Find the right freelancer to begin working on your project within minutes.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="ad-image">
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous" />



      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
        integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossorigin="anonymous"></Script>

      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
        integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
        crossorigin="anonymous"></Script>



    </>);
};

export default Home;