import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState({});

    useEffect(() => {
        const listdata = JSON.parse(localStorage.getItem('todo'));
        setdata(listdata);
    }, []);

    const handleedit = (item) => {
        navigate('/editpage', {state: item});
    }

    const handledelete = (deleteid) => {
        const deletedata = data.filter(item => item.id !== deleteid);
        localStorage.setItem('todo', JSON.stringify(deletedata));
    }

    const handleview = (viewitem) => {
        navigate('/viewpage', {state: viewitem});
    }

    return (
        <div className="mt-3">
            <div><button className="btn btn-primary" onClick={() => navigate('/addpage')}>AddPage</button></div>

            <div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 ?
                                data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{1 + index}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.contact}</td>
                                        <td><button className="btn btn-primary" onClick={(e) => handleedit(item)}>Edit</button></td>
                                        <td><button className="btn btn-primary" onClick={(e) => handledelete(item.id)}>Delete</button></td>
                                        <td><button className="btn btn-primary" onClick={(e) => handleview(item)}>View</button></td>
                                    </tr>
                                )) : (
                                    <div>No Record</div>
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomePage;