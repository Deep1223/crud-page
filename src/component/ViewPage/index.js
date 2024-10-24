import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ViewPage = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [data, setdata] = useState(state);

    return (
        <div className="mt-3">
            <div><button className="btn btn-primary" onClick={() => navigate('/home')}>Home</button></div>

            <div>
                <div>Name : <span>{data.name}</span></div>
            </div>
            <div>
                <div>Email : <span>{data.email}</span></div>
            </div>
            <div>
                <div>Contact : <span>{data.contact}</span></div>
            </div>
        </div>
    )
}

export default ViewPage;