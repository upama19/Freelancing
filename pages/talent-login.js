import axios from "axios";
import * as yup from "yup";
import Link from "next/link";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import api from "../services/api";


const { yupResolver } = require("@hookform/resolvers/yup");

const TalentLogIn = () => {
    let schema = yup.object().shape({
        email: yup
            .string()
            .required("Email is required")
            .email("Please enter a valid email"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
    });

    const router = useRouter();

    const { register, formState: { errors }, handleSubmit, setError } = useForm({ resolver: yupResolver(schema) });
    const [isLoading, setIsLoading] = useState(false);
    const [ profile, setProfile] = useState(null);
    const Profile = ()=>{
        // console.log('hello');
        return api.get('/profile/me').then(( {data} ) => {
            // console.log(data);
            if (data.profile) {
              setProfile(data.profile);

            } else {
              router.push('/profile-form');
            }
            // console.log(data);
            location.reload(true);
            Cookies.set("talent", JSON.stringify(data));
          });
    }

    const onSubmit = (data) => {
        // console.log(data);
        // console.log(data);
        setIsLoading(true);

        let url = '/login/talent'
        axios.post(process.env.NEXT_PUBLIC_API + url, data)
            .then(({ data }) => {
                console.log(data.token);
                Cookies.set("auth_token", data.token);
                Profile();
                

                // router.push('/');
            }).catch((err) => {
                if (err.response?.data && err.response?.data.error) {
                    setError("email", {
                        type: "manual",
                        message: err.response?.data.error,
                    });
                }
                console.log(err.response?.data);
                alert('Invalis Credentials')
            }).finally(() => {
                setIsLoading(false);
                router.push('/')
            })

    };

    return (
        <>
            <NavBar />
            <div className="container" style={{ marginBottom: "100px", marginTop: "100px" }}>
                <div className="content-container container-flex d-flex justify-content-center align-items-center  m-3">
                    <div className="row shadow" id="talent-div" style={{ width: "70%" }}>
                        <div className="col-md-6 signup-image p-3">
                            <img className="mx-3 my-5" style={{ width: "90%" }} src="./images/talent.png" />
                        </div>
                        <div className="col-md-6 signup-form py-3">
                            <div className="border-0 m-3 d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
                                <div className="line3"
                                    style={{ width: "80%", height: "1px", backgroundColor: "var(--sad-grey)", opacity: "0.5" }}></div>
                            </div>
                            <div className="signup-form-container mt-3" style={{ width: "80%" }}>
                                <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Email Address"
                                            aria-label="Email Address" aria-describedby="basic-addon1" required   {...register('email')} />
                                    </div>
                                    {errors.email && <div className="error-message">{errors.email.message}</div>}
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Password" aria-label="Password"
                                            aria-describedby="basic-addon2" required   {...register('password')} />
                                    </div>
                                    {errors.password && <div className="error-message">{errors.password.message}</div>}
                                    <button className="btn signup-btn m-3" id="sign-up-btn" disabled={isLoading}>Log In</button>
                                </form>
                            </div>
                            <div className="border-0 m-3 d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
                                <div className="line3"
                                    style={{ width: "80%", height: "1px", backgroundColor: "var(--sad-grey)", opacity: " 0.5" }}></div>
                            </div>
                            <Link href="/sign-up">
                                <a className="m-3" style={{ color: "var(--orange-ball)", textDecoration: "none" }}>Sign
                                    Up</a>
                            </Link>
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
};

export default TalentLogIn;