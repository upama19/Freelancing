import axios from "axios";
import * as yup from "yup";
import Link from "next/link";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const EmployerForm = () => {
    let schema = yup.object().shape({
        username: yup
            .string()
            .required("Username is required"),
        email: yup
            .string()
            .required("Email is required")
            .email("Please enter a valid email"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
        confirmPassword: yup
            .string()
            .required("Confirm password is required")
            .oneOf([yup.ref("password")], "Passwords must match"),
        mobileNumber: yup
            .string()
            .required("Mobile number must be provided")
            .length(10, "Must be 10 characters")
    });

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (formData) => {
        setIsLoading(true);

        axios.post(process.env.NEXT_PUBLIC_API + '/register/employer', formData)
            .then(({ data }) => {
                if (data.token) {
                    console.log(data.token);
                    Cookies.set("auth_token", data.token);
                }
                router.push('/');
            }).catch((err) => {
                console.log(err.response?.data);
            }).finally(() => {
                setIsLoading(false);
            })
    };

    return (
        <div className="row shadow" id="employer-div" style={{ width: "70%" }}>
            <div className="col-md-6 signup-form py-3">
                <div className="border-0 m-3 d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
                    <div className="line3"
                        style={{ width: "80%", height: "1px", backgroundColor: "var(--sad-grey)", opacity: "0.5" }}></div>
                </div>
                <div className="signup-form-container mt-3" style={{ width: "80%" }}>
                    <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="User Name" aria-label="user Name"
                                aria-describedby="basic-addon1" required {...register('username')} />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email Address"
                                aria-label="Email Address" aria-describedby="basic-addon2" required {...register('email')} />
                        </div>
                        {errors.email && <div>{errors.email.message}</div>}
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" placeholder="Mobile Number"
                                aria-label="Mobile Number" aria-describedby="basic-addon3" required {...register('mobileNumber')} />
                        </div>
                        {errors.mobileNumber && <div>{errors.mobileNumber.message}</div>}
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password"
                                aria-describedby="basic-addon4" required {...register('password')} />
                        </div>
                        {errors.password && <div>{errors.password.message}</div>}
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Confirm Password"
                                aria-label="Confirm Password" aria-describedby="basic-addon4" required {...register('confirmPassword')} />
                        </div>
                        {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
                        <button className="btn signup-btn m-3" disabled={isLoading}>Sign Up</button>
                    </form>
                </div>

                <div className="border-0 m-3 d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
                    <div className="line3"
                        style={{ width: "80%", height: "1px", backgroundColor: "var(--sad-grey)", opacity: "0.5" }}></div>
                </div>
                <Link href="/employer-login">
                    <a className="m-3"
                        style={{ color: "var(--orange-ball)", textDecoration: "none" }}>Login</a>
                </Link>
            </div>
            <div className="col-md-6 signup-image p-3">
                <img className="mx-3 my-5" style={{ width: "90%" }} src="./images/employer.png" />
            </div>
        </div>
    );
}

export default EmployerForm;