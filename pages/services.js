import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import api from "../services/api";

const Services = () => {
    return (

        <>
            <NavBar />
            <main>
                <div className="container-fluid px-0 text-align-center position-relative">
                    <div className="banner2 d-flex align-items-center justify-content-center">

                    </div>
                    <div className="banner-overlay position-absolute top-0 left-0 w-100 h-100 ">
                    </div>
                    <div
                        className="banner-content position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center">
                        <h1 className="fw-bold" style={{ color: "var(--white)", letterSpacing: "0.095em" }}>Our Services
                        </h1>
                    </div>
                </div>

                <div className="container-fluid  pt-5 mt-5 ">
                    <div className="col px-5 service-col">
                        <div className="row-12">
                            <div className="shadow p-3 mb-5 service-content bg-white">
                                <h1 className="service-category m-3">Home</h1>
                                <div className="d-flex">
                                    <Link href="/talentRecords?servicesOffered=Plumber">
                                        <a className="border rounded-pill m-3 px-3 py-2">Plumber
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Maid">
                                        <a className="border rounded-pill m-3 px-3 py-2">Maid
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Electrician">
                                        <a className="border rounded-pill m-3 px-3 py-2">Electrician
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Carpenter">
                                        <a className="border rounded-pill m-3 px-3 py-2">Carpenter
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Pest%20Control">
                                        <a className="border rounded-pill m-3 px-3 py-2">Pest Control
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Movers">
                                        <a className="border rounded-pill m-3 px-3 py-2">Movers
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Cook">
                                        <a className="border rounded-pill m-3 px-3 py-2">Cook
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Gardener">
                                        <a className="border rounded-pill m-3 px-3 py-2">Gardener
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Baby%20Sitter">
                                        <a className="border rounded-pill m-3 px-3 py-2">Baby Sitter
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Laundry">
                                        <a className="border rounded-pill m-3 px-3 py-2">Laundry
                                        </a>
                                    </Link>

                                </div>

                            </div>
                        </div>
                        <div className="row-12">
                            <div className="shadow p-3 mb-5 service-content bg-white">
                                <h1 className="service-category m-3">
                                    IT
                                </h1>
                                <div className="d-flex flex-wrap">
                                    <Link href="/talentRecords?servicesOffered=Web%20Developer">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Web Developer
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Graphics%20Designer">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Graphics Designer
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=App%20Developer">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">App Developer
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Networking">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Networking
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Web%20Hosting">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Web Hosting
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Data%20Analyst">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Data Analyst
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=UI/UX%20Designer">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">UI/UX Designer
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Ethical%20Hacking">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Ethical Hacking
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row-12">
                            <div className="shadow p-3 mb-5 service-content bg-white">
                                <h1 className="service-category m-3">
                                    Health
                                </h1>
                                <div className="d-flex">
                                    <Link href="/talentRecords?servicesOffered=Doctor">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Doctor
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Trainer">
                                        <a className="border rounded-pill m-3 px-3 py-2">Trainer
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Therapist">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Therapist
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Old%20Age%20Care">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Old Age Care
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Nurse">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Nurse
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Veterinarian">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Veterinarian
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row-12">
                            <div className="shadow p-3 mb-5 service-content bg-white">
                                <h1 className="service-category m-3">
                                    Others
                                </h1>
                                <div className="d-flex flex-wrap">
                                    <Link href="/talentRecords?servicesOffered=Beautician">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Beautician
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Home%20Tutor">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Home Tutor
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Artist">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Artist
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Trainer">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Trainer
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Language%20Translator">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Language Translator
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Event%20Manager">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Event Manager

                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Security%20Guard">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Security Guard
                                        </a>
                                    </Link>
                                    <Link href="/talentRecords?servicesOffered=Driver">
                                        <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Driver
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );

};

export default Services;