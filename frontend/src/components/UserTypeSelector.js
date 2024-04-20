import React, { useState } from 'react';

function UserTypeSelector({ setUserType }) {
    const [userType, setUserTypeLocal] = useState('');

    const handleUserTypeChange = (selectedType) => {
        setUserTypeLocal(selectedType);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserType(userType);
    };

    return (
        <div>
            <h2>Select User Type</h2>
            <div>
        <span
            className={`user-type ${userType === "student" ? "selected" : ""}`}
            onClick={() => handleUserTypeChange("student")}
            style={{ cursor: "pointer" }}
        >
          Student
        </span>{" "}
                or{" "}
                <span
                    className={`user-type ${userType === "teacher" ? "selected" : ""}`}
                    onClick={() => handleUserTypeChange("teacher")}
                    style={{ cursor: "pointer" }}
                >
          Teacher
        </span>
            </div>
            <button className="App-button" type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default UserTypeSelector;
