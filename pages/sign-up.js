import { useState } from "react";
const { yupResolver } = require("@hookform/resolvers/yup");

import NavBar from "../components/NavBar";
import TalentForm from "../components/sign-up/TalentForm";
import EmployerForm from "../components/sign-up/EmployerForm";

const SignUp = () => {
    const [isTalent, setIsTalent] = useState(false);

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <div className="main-btn-container d-flex justify-content-center align-items-center m-3">
                    <div className="button-container row" style={{ width: "70%" }}>
                        <div className="col md-6 d-flex justify-content-center align-items-center">
                            <button id="employer-btn" className={`btn my-btn  ${isTalent ? '' : ' active'}`} onClick={() => setIsTalent(false)}>Employer</button>
                        </div>
                        <div className="col md-6  d-flex justify-content-center align-items-center ">
                            <button id="talent-btn" className={`btn my-btn ${isTalent ? 'active' : ' '}`} onClick={() => setIsTalent(true)}>Talent</button>
                        </div>

                    </div>
                </div>
                <div className="content-container container-flex d-flex justify-content-center align-items-center  m-3">
                    {
                        isTalent ? <TalentForm /> : <EmployerForm />
                    }
                </div>
            </div>
        </>
    )
};

export default SignUp;