import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './Form.css'; // Ensure you have CSS for styling errors

const AddPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleReset = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            contact: ''
        });
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            let olddata = JSON.parse(localStorage.getItem('todo')); 
            
            if(!Array.isArray(olddata)){
                olddata = [];
            }

            const newdata = {id: formData.id || new Date().getTime(), name: formData.name, email: formData.email, contact: formData.contact}

            const updatedData = [...olddata, newdata];

            localStorage.setItem('todo', JSON.stringify(updatedData));
            
        } else {
            console.log('Form submission failed due to validation errors.');
        }
    };

    const validateForm = (data) => {
        const errors = {};
        
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (!data.contact.trim()) {
            errors.contact = 'Contact number is required';
        } else if (data.contact.length < 10 || data.contact.length > 10) {
            errors.contact = 'Contact number must be at least 10 digits long';
        }

        return errors;
    };

    return (
        <div className="mt-3">
            <div>
                <button className="btn btn-primary" onClick={() => navigate('/home')}>Home</button>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                            id="name" 
                            name="name"
                            value={formData.name} 
                            placeholder="Enter Name" 
                            onChange={handleChange} 
                        />
                        {errors.name && (
                            <span className="error-message">{errors.name}</span>
                        )}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                            id="email" 
                            name="email"
                            value={formData.email} 
                            placeholder="Enter Email" 
                            onChange={handleChange} 
                        />
                        {errors.email && (
                            <span className="error-message">{errors.email}</span>
                        )}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="contact">Contact No.</label>
                        <input 
                            type="text" 
                            className={`form-control ${errors.contact ? 'is-invalid' : ''}`} 
                            id="contact" 
                            name="contact"
                            value={formData.contact} 
                            placeholder="Enter Contact No." 
                            onChange={handleChange} 
                        />
                        {errors.contact && (
                            <span className="error-message">{errors.contact}</span>
                        )}
                    </div>
                    <div className="d-flex gap-3 mt-2">
                        <button className="btn btn-primary">Submit</button>
                        <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPage;
