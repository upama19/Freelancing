import Link from 'next/link';
import api from '../services/api';
import { useState, useEffect } from 'react';
import { Router } from 'next/router';
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import Script from 'next/script';

const NavBar = () => {
  const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = Cookies.get("auth_token");
    console.log(token);
    if (Cookies.get("talent")) {
      const profile = JSON.parse(Cookies.get("talent"));
      setProfile(profile)
    }
    setToken(token);



  }, []);

  const router = useRouter();


  const logout = () => {
    console.log('hello');
    document.cookie =
      'auth_token' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie =
      'talent' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    alert('You have been logged out');
    location.reload(true);
    router.push('/');
  };

  return (
    <>
      <nav
        id='navbar_top'
        className='navbar navbar-expand-lg navbar-light px-5'
      >
        <div className='container-fluid'>
          <Link href='/'>
            <a className='navbar-brand' style={{ fontWeight: 'bold' }}>
              NEPLANCER<span style={{ color: 'var(--orange-ball)' }}>.</span>
            </a>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item pages-link'>
                <Link href='/'>
                  <a className='nav-link active' aria-current='page' style={{ color: '#756f6f' }}>
                    Home
                  </a>
                </Link>
              </li>
              <li className='nav-item pages-link'>
                <Link href='/services'>
                  <a className='nav-link'>Services</a>
                </Link>
              </li>
              <li className='nav-item pages-link'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              {token ? (<div></div>) : <li className='nav-item dropdown me-5 '>
                <a
                  className='nav-link dropdown-toggle ' style={{ color: "var(--orange-ball)" }}
                  href='#'
                  id='login_text'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Log In
                </a>

                <ul
                  className='dropdown-menu m-0 p-2'
                  style={{ minWidth: '0' }}
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <li className='m-0'>
                    <Link href='/talent-login'>
                      <a className='dropdown-item p-1'>Talent</a>
                    </Link>
                  </li>
                  <li className='m-0'>
                    <Link href='/employer-login'>
                      <a className='dropdown-item p-1'>Employer</a>
                    </Link>
                  </li>
                </ul>
              </li>}

              {/* {token ? <div></div> : <li className='nav-item'> */}
              {(token && profile) ? (

                <li className='nav-item-pages-link' >
                  <Link href='/profile'  >
                    <a className='nav-link me-3' style={{ color: "var(--orange-ball)", textDecoration: 'none' }}>{profile.profile.fullName}</a>
                  </Link>
                </li>
              ) : (
                <Link href='/sign-up'>
                  <a
                    type='button'
                    className='d-flex justify-content-center align-items-center get-started-btn app-btn'
                    style={{ color: 'white' }}
                  >

                    Get Started
                  </a>
                </Link>

              )}
              {/* </li>} */}

              {token ? <li className='nav-item pages-link'>
                <a type='button'
                  className='nav-link d-flex justify-content-center align-items-center get-started-btn app-btn'
                  style={{ color: 'white' }} onClick={() => logout()}
                >

                  Logout
                </a>
              </li> : <div></div>}



            </ul>
          </div>
        </div>
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
      </nav>
    </>
  );
};

export default NavBar;
