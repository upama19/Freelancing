import React from 'react';

const Records = (record) => {
    return (
        <>
            <div className="records-main">
                <div className="records-box shadow p-2">
                    <div className="records-photo mx-3 d-flex justify-content-center align-items-center">
                        <img src="./images/banner2.jpg" />
                    </div>
                    <div className="record-info mx-3">
                        <div className="talent-name p-2"><p>{record.fullName}</p></div>
                        <div className="talent-description p-2"><p>i'm cool. i like movies. i like songs</p></div>
                    </div>
                    <div className="records-price p-2 m-3">
                        <div className="price">
                            <h2>Rs 200</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Records;